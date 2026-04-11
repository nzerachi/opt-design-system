/**
 * Divider — horizontal or vertical separator.
 *
 * @example
 * <Divider />
 * <Divider orientation="vertical" className="h-6" />
 * <Divider label="Or continue with" />
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation. Default: "horizontal" */
  orientation?: "horizontal" | "vertical";
  /** Optional label shown in the center of the divider */
  label?: string;
  /** Decorative divider (aria-hidden). Default: true */
  decorative?: boolean;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      label,
      decorative = true,
      className,
      ...props
    },
    ref,
  ) => {
    const isHorizontal = orientation === "horizontal";

    if (label && isHorizontal) {
      return (
        <div
          ref={ref}
          role={decorative ? "none" : "separator"}
          aria-orientation={!decorative ? orientation : undefined}
          className={cn("flex items-center gap-3", className)}
          {...props}
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-foreground/50 font-medium whitespace-nowrap">
            {label}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={!decorative ? orientation : undefined}
        className={cn(
          "shrink-0 bg-border",
          isHorizontal ? "h-px w-full" : "w-px self-stretch",
          className,
        )}
        {...props}
      />
    );
  },
);

Divider.displayName = "Divider";
