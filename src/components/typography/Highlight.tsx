/**
 * Highlight — marks text with a background color for emphasis.
 *
 * @example
 * <p>This is a <Highlight>highlighted</Highlight> word.</p>
 * <p>Also available in <Highlight color="brand">brand orange</Highlight>.</p>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export type HighlightColor = "default" | "brand" | "success" | "warning" | "error";

export interface HighlightProps extends HTMLAttributes<HTMLMarkElement> {
  color?: HighlightColor;
}

const colorClasses: Record<HighlightColor, string> = {
  default: "bg-brand-orange/20 text-foreground",
  brand:   "bg-brand-orange/25 text-brand-orange",
  success: "bg-brand-purple/15 text-brand-purple",
  warning: "bg-brand-orange/20 text-brand-orange",
  error:   "bg-brand-folly/15 text-brand-folly",
};

export const Highlight = forwardRef<HTMLElement, HighlightProps>(
  ({ color = "default", className, ...props }, ref) => (
    <mark
      ref={ref}
      className={cn(
        "rounded-sm px-0.5 font-medium",
        colorClasses[color],
        className,
      )}
      {...props}
    />
  ),
);
Highlight.displayName = "Highlight";
