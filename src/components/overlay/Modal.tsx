/**
 * Modal / Dialog — an accessible modal dialog.
 *
 * Improvements over original Modal.tsx:
 * - Focus trap via useFocusTrap hook
 * - Portal rendering (escapes stacking contexts)
 * - aria-labelledby + aria-describedby
 * - Body scroll lock via useScrollLock
 * - Animates in/out with CSS transitions
 * - forwardRef + displayName on all parts
 *
 * @example
 * const { isOpen, open, close } = useDisclosure();
 *
 * <Button onClick={open}>Open modal</Button>
 * <Modal isOpen={isOpen} onClose={close} aria-label="Confirm deletion">
 *   <ModalHeader onClose={close}>
 *     <ModalTitle>Delete item?</ModalTitle>
 *   </ModalHeader>
 *   <ModalContent>
 *     <p>This action cannot be undone.</p>
 *   </ModalContent>
 *   <ModalFooter>
 *     <Button variant="secondary" onClick={close}>Cancel</Button>
 *     <Button variant="destructive">Delete</Button>
 *   </ModalFooter>
 * </Modal>
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

export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is visible */
  isOpen: boolean;
  /** Callback to close the modal */
  onClose: () => void;
  /** Modal size. Default: "md" */
  size?: ModalSize;
  /** Whether clicking the backdrop closes the modal. Default: true */
  closeOnBackdropClick?: boolean;
  /** Whether Escape key closes the modal. Default: true */
  closeOnEscape?: boolean;
  children: ReactNode;
}

const sizeClasses: Record<ModalSize, string> = {
  sm:   "max-w-md",
  md:   "max-w-lg",
  lg:   "max-w-2xl",
  xl:   "max-w-4xl",
  full: "max-w-none w-full h-full rounded-none",
};

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
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
    const autoId = useId("modal");
    const labelId = `${autoId}-label`;
    const descId = `${autoId}-desc`;

    useFocusTrap(panelRef, isOpen);
    useScrollLock(isOpen);
    useKeyboard("Escape", onClose, { enabled: isOpen && closeOnEscape });

    if (!isOpen) return null;

    return (
      <Portal>
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 z-[800] flex items-center justify-center p-4",
            "animate-[fade-in_150ms_ease-out]",
          )}
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
            className={cn(
              "relative bg-background rounded-lg shadow-[var(--shadow-2xl)] w-full",
              "max-h-[90vh] overflow-y-auto",
              "animate-[scale-in_200ms_ease-out]",
              sizeClasses[size],
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

Modal.displayName = "Modal";

// ---------------------------------------------------------------------------
// ModalHeader
// ---------------------------------------------------------------------------

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ onClose, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-between p-6 border-b border-border",
        className,
      )}
      {...props}
    >
      <div className="flex-1 min-w-0">{children}</div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="ml-4 p-1.5 rounded-lg hover:bg-muted-light/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
        >
          <X className="size-5" aria-hidden />
        </button>
      )}
    </div>
  ),
);
ModalHeader.displayName = "Modal.Header";

// ---------------------------------------------------------------------------
// ModalTitle
// ---------------------------------------------------------------------------

export const ModalTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-2xl font-bold text-foreground leading-tight", className)}
      {...props}
    />
  ),
);
ModalTitle.displayName = "Modal.Title";

// ---------------------------------------------------------------------------
// ModalContent
// ---------------------------------------------------------------------------

export const ModalContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props} />
  ),
);
ModalContent.displayName = "Modal.Content";

// ---------------------------------------------------------------------------
// ModalFooter
// ---------------------------------------------------------------------------

export const ModalFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-end gap-3 p-6 border-t border-border",
        className,
      )}
      {...props}
    />
  ),
);
ModalFooter.displayName = "Modal.Footer";
