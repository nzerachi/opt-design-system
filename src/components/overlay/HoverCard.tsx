/**
 * HoverCard — a card that appears on hover over a trigger, used for previewing content.
 *
 * Different from Tooltip (text only) and Popover (click-triggered):
 * HoverCard is hover-triggered and contains rich content.
 *
 * Built on Radix UI HoverCard.
 *
 * @example
 * <HoverCard>
 *   <HoverCardTrigger asChild>
 *     <a href="https://opticule.dev">@opticule</a>
 *   </HoverCardTrigger>
 *   <HoverCardContent>
 *     <Avatar src="/logo.png" alt="Opticule" />
 *     <div>
 *       <p className="font-bold">Opticule DS</p>
 *       <p>The world-class design system.</p>
 *     </div>
 *   </HoverCardContent>
 * </HoverCard>
 */

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixHoverCard from "@radix-ui/react-hover-card";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Re-exports
// ---------------------------------------------------------------------------

export const HoverCard        = RadixHoverCard.Root;
export const HoverCardTrigger = RadixHoverCard.Trigger;

// ---------------------------------------------------------------------------
// HoverCardContent
// ---------------------------------------------------------------------------

export const HoverCardContent = forwardRef<
  ElementRef<typeof RadixHoverCard.Content>,
  ComponentPropsWithoutRef<typeof RadixHoverCard.Content>
>(({ className, align = "center", sideOffset = 8, ...props }, ref) => (
  <RadixHoverCard.Portal>
    <RadixHoverCard.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-[850] w-72 rounded-lg border border-border bg-background p-4",
        "shadow-[var(--shadow-lg)] outline-none",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        "data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </RadixHoverCard.Portal>
));
HoverCardContent.displayName = "HoverCard.Content";
