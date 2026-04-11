/**
 * Kbd — keyboard key indicator.
 *
 * @example
 * Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export const Kbd = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <kbd
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-md border border-border bg-muted-light/50",
        "px-1.5 py-0.5 font-mono text-[0.8125em] font-medium text-foreground/80",
        "shadow-[0_2px_0_0_hsl(var(--border))]",
        className,
      )}
      {...props}
    />
  ),
);
Kbd.displayName = "Kbd";
