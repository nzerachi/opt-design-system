/**
 * Popover — a floating interactive panel anchored to a trigger.
 *
 * Built on Radix UI Popover. Differs from Tooltip in that it contains
 * interactive content (forms, actions) and is explicitly opened by click.
 *
 * @example
 * <Popover>
 *   <PopoverTrigger asChild>
 *     <Button variant="outline">Filter</Button>
 *   </PopoverTrigger>
 *   <PopoverContent>
 *     <p>Popover body</p>
 *   </PopoverContent>
 * </Popover>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export const Popover       = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;
export const PopoverAnchor  = RadixPopover.Anchor;

// ---------------------------------------------------------------------------
// PopoverContent
// ---------------------------------------------------------------------------

export interface PopoverContentProps
  extends ComponentPropsWithoutRef<typeof RadixPopover.Content> {
  /** Show a close button in the top-right corner. Default: false */
  showClose?: boolean;
  /** Width of the popover panel. Default: "auto" */
  width?: "auto" | "sm" | "md" | "lg" | "trigger";
}

const widthClasses = {
  auto:    "w-auto",
  sm:      "w-56",
  md:      "w-72",
  lg:      "w-96",
  trigger: "w-[var(--radix-popover-trigger-width)]",
};

export const PopoverContent = forwardRef<
  ElementRef<typeof RadixPopover.Content>,
  PopoverContentProps
>(
  (
    {
      className,
      align = "center",
      sideOffset = 8,
      showClose = false,
      width = "auto",
      children,
      ...props
    },
    ref,
  ) => (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-[850] rounded-lg border border-border bg-background",
          "p-4 shadow-[var(--shadow-lg)]",
          "outline-none",
          "animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          widthClasses[width],
          className,
        )}
        {...props}
      >
        {showClose && (
          <RadixPopover.Close
            aria-label="Close"
            className="absolute top-3 right-3 p-1 rounded-md hover:bg-muted-light/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
          >
            <X className="size-4" aria-hidden />
          </RadixPopover.Close>
        )}
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  ),
);
PopoverContent.displayName = "Popover.Content";

// ---------------------------------------------------------------------------
// PopoverHeader / PopoverFooter — optional layout helpers
// ---------------------------------------------------------------------------

export const PopoverHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mb-3 pb-3 border-b border-border", className)}
      {...props}
    />
  ),
);
PopoverHeader.displayName = "Popover.Header";

export const PopoverFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-3 pt-3 border-t border-border flex items-center justify-end gap-2", className)}
      {...props}
    />
  ),
);
PopoverFooter.displayName = "Popover.Footer";
