/**
 * Drawer / SideSheet — an accessible slide-in panel anchored to a screen edge.
 *
 * Features:
 * - Portal rendering + focus trap + scroll lock + Escape key
 * - Four placement variants: left, right, top, bottom
 * - Three sizes per axis
 * - aria-labelledby + aria-describedby
 * - Backdrop click to close
 * - Slide-in/out CSS transitions via data attributes
 *
 * @example
 * const { isOpen, open, close } = useDisclosure();
 *
 * <Button onClick={open}>Open drawer</Button>
 * <Drawer isOpen={isOpen} onClose={close} placement="right">
 *   <DrawerHeader onClose={close}>
 *     <DrawerTitle>Settings</DrawerTitle>
 *   </DrawerHeader>
 *   <DrawerContent>…</DrawerContent>
 *   <DrawerFooter>
 *     <Button onClick={close}>Done</Button>
 *   </DrawerFooter>
 * </Drawer>
 */

import {
  forwardRef,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Portal } from "../primitives/Portal";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useScrollLock } from "../../hooks/useScrollLock";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useId } from "../../hooks/useId";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DrawerPlacement = "left" | "right" | "top" | "bottom";
export type DrawerSize = "sm" | "md" | "lg" | "full";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  children: ReactNode;
}

// ---------------------------------------------------------------------------
// Size maps per axis
// ---------------------------------------------------------------------------

const horizontalSize: Record<DrawerSize, string> = {
  sm:   "w-72",
  md:   "w-96",
  lg:   "w-[32rem]",
  full: "w-full",
};

const verticalSize: Record<DrawerSize, string> = {
  sm:   "h-64",
  md:   "h-96",
  lg:   "h-[32rem]",
  full: "h-full",
};

const placementClasses: Record<DrawerPlacement, string> = {
  left:   "inset-y-0 left-0 data-[open=true]:animate-[slide-in-from-left_250ms_ease-out] data-[open=false]:animate-[slide-out-to-left_200ms_ease-in]",
  right:  "inset-y-0 right-0 data-[open=true]:animate-[slide-in-from-right_250ms_ease-out] data-[open=false]:animate-[slide-out-to-right_200ms_ease-in]",
  top:    "inset-x-0 top-0 data-[open=true]:animate-[slide-in-from-top_250ms_ease-out] data-[open=false]:animate-[slide-out-to-top_200ms_ease-in]",
  bottom: "inset-x-0 bottom-0 data-[open=true]:animate-[slide-in-from-bottom_250ms_ease-out] data-[open=false]:animate-[slide-out-to-bottom_200ms_ease-in]",
};

// ---------------------------------------------------------------------------
// Drawer
// ---------------------------------------------------------------------------

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen,
      onClose,
      placement = "right",
      size = "md",
      closeOnBackdropClick = true,
      closeOnEscape = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const autoId = useId("drawer");
    const labelId = `${autoId}-label`;
    const descId = `${autoId}-desc`;

    useFocusTrap(panelRef, isOpen);
    useScrollLock(isOpen);
    useKeyboard("Escape", onClose, { enabled: isOpen && closeOnEscape });

    if (!isOpen) return null;

    const isHorizontal = placement === "left" || placement === "right";
    const sizeClass = isHorizontal ? horizontalSize[size] : verticalSize[size];

    return (
      <Portal>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-[800] animate-[fade-in_150ms_ease-out]"
          aria-modal="true"
          role="dialog"
          aria-labelledby={labelId}
          aria-describedby={descId}
          onClick={closeOnBackdropClick ? onClose : undefined}
        >
          {/* Backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden
          />

          {/* Panel */}
          <div
            ref={(node) => {
              panelRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            data-open={isOpen}
            className={cn(
              "absolute z-10 bg-background shadow-[var(--shadow-2xl)] flex flex-col",
              "max-h-full max-w-full overflow-y-auto",
              isHorizontal ? "h-full" : "w-full",
              sizeClass,
              placementClasses[placement],
              className,
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {children}
          </div>
        </div>
      </Portal>
    );
  },
);
Drawer.displayName = "Drawer";

// ---------------------------------------------------------------------------
// DrawerHeader
// ---------------------------------------------------------------------------

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ onClose, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-6 border-b border-border shrink-0",
        className,
      )}
      {...props}
    >
      <div className="flex-1 min-w-0">{children}</div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close panel"
          className="ml-4 p-1.5 rounded-lg hover:bg-muted-light/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
        >
          <X className="size-5" aria-hidden />
        </button>
      )}
    </div>
  ),
);
DrawerHeader.displayName = "Drawer.Header";

// ---------------------------------------------------------------------------
// DrawerTitle
// ---------------------------------------------------------------------------

export const DrawerTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-xl font-bold text-foreground leading-tight", className)}
      {...props}
    />
  ),
);
DrawerTitle.displayName = "Drawer.Title";

// ---------------------------------------------------------------------------
// DrawerContent
// ---------------------------------------------------------------------------

export const DrawerContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 overflow-y-auto p-6", className)} {...props} />
  ),
);
DrawerContent.displayName = "Drawer.Content";

// ---------------------------------------------------------------------------
// DrawerFooter
// ---------------------------------------------------------------------------

export const DrawerFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-end gap-3 p-6 border-t border-border shrink-0",
        className,
      )}
      {...props}
    />
  ),
);
DrawerFooter.displayName = "Drawer.Footer";
