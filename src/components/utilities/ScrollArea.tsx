/**
 * ScrollArea — a cross-browser custom scrollbar container built on Radix UI.
 *
 * @example
 * <ScrollArea className="h-64">
 *   {longContent}
 * </ScrollArea>
 *
 * <ScrollArea orientation="horizontal" className="w-full">
 *   <div className="flex gap-4 w-max">{items}</div>
 * </ScrollArea>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";

export interface ScrollAreaProps extends ComponentPropsWithoutRef<typeof RadixScrollArea.Root> {
  orientation?: ScrollAreaOrientation;
  scrollbarClassName?: string;
}

// ---------------------------------------------------------------------------
// ScrollArea
// ---------------------------------------------------------------------------

export const ScrollArea = forwardRef<
  ElementRef<typeof RadixScrollArea.Root>,
  ScrollAreaProps
>(
  (
    { className, children, orientation = "vertical", scrollbarClassName, ...props },
    ref,
  ) => (
    <RadixScrollArea.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <RadixScrollArea.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </RadixScrollArea.Viewport>

      {(orientation === "vertical" || orientation === "both") && (
        <ScrollAreaScrollbar
          orientation="vertical"
          className={scrollbarClassName}
        />
      )}
      {(orientation === "horizontal" || orientation === "both") && (
        <ScrollAreaScrollbar
          orientation="horizontal"
          className={scrollbarClassName}
        />
      )}

      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  ),
);
ScrollArea.displayName = "ScrollArea";

// ---------------------------------------------------------------------------
// ScrollAreaScrollbar
// ---------------------------------------------------------------------------

export const ScrollAreaScrollbar = forwardRef<
  ElementRef<typeof RadixScrollArea.ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof RadixScrollArea.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <RadixScrollArea.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <RadixScrollArea.ScrollAreaThumb
      className={cn(
        "relative flex-1 rounded-full bg-border",
        "hover:bg-foreground/30 transition-colors",
      )}
    />
  </RadixScrollArea.ScrollAreaScrollbar>
));
ScrollAreaScrollbar.displayName = "ScrollArea.Scrollbar";
