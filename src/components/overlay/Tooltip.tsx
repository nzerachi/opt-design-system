/**
 * Tooltip — a non-interactive floating label for UI elements.
 *
 * Built on Radix UI Tooltip for robust positioning and accessibility.
 * Wraps the Radix primitives with Opticule design tokens.
 *
 * Features:
 * - Four placement sides + alignment
 * - Configurable open delay
 * - Arrow pointer
 * - Keyboard accessible (shows on focus)
 * - WCAG: role="tooltip", aria-describedby on trigger
 *
 * @example
 * <Tooltip content="Copy to clipboard">
 *   <IconButton label="Copy" icon={<Copy />} />
 * </Tooltip>
 *
 * <Tooltip content="Premium feature" side="bottom" delayDuration={0}>
 *   <Button disabled>Upgrade</Button>
 * </Tooltip>
 */

import {
  forwardRef,
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Re-export provider so consumers can wrap their app once
// ---------------------------------------------------------------------------

export const TooltipProvider = RadixTooltip.Provider;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";

export interface TooltipProps {
  /** The tooltip label */
  content: ReactNode;
  /** Trigger element — must accept ref + aria-describedby */
  children: ReactNode;
  /** Which side to show the tooltip. Default: "top" */
  side?: TooltipSide;
  /** Alignment along the side. Default: "center" */
  align?: TooltipAlign;
  /** Delay before showing (ms). Default: 400 */
  delayDuration?: number;
  /** Controlled open state */
  open?: boolean;
  /** Default open for uncontrolled */
  defaultOpen?: boolean;
  /** Change handler */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the arrow pointer. Default: true */
  arrow?: boolean;
  /** Offset from trigger (px). Default: 8 */
  sideOffset?: number;
  /** Disable the tooltip */
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// TooltipContent
// ---------------------------------------------------------------------------

export const TooltipContent = forwardRef<
  ElementRef<typeof RadixTooltip.Content>,
  ComponentPropsWithoutRef<typeof RadixTooltip.Content>
>(({ className, sideOffset = 8, children, ...props }, ref) => (
  <RadixTooltip.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-[900] max-w-xs rounded-lg px-3 py-1.5",
      "bg-foreground text-background text-xs font-medium leading-snug",
      "shadow-[var(--shadow-lg)]",
      "animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  >
    {children}
    <RadixTooltip.Arrow className="fill-foreground" />
  </RadixTooltip.Content>
));
TooltipContent.displayName = "Tooltip.Content";

// ---------------------------------------------------------------------------
// Tooltip (compound)
// ---------------------------------------------------------------------------

export function Tooltip({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 400,
  open,
  defaultOpen,
  onOpenChange,
  sideOffset = 8,
  disabled = false,
}: TooltipProps) {
  if (disabled) return <>{children}</>;

  return (
    <RadixTooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <TooltipContent side={side} align={align} sideOffset={sideOffset}>
          {content}
        </TooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}

Tooltip.displayName = "Tooltip";
