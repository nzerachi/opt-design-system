/**
 * Stat — a metric / KPI display card.
 *
 * No equivalent in Carbon/dev-launchers but a universal dashboard pattern.
 * Combines label, value, delta (up/down/neutral), and optional icon.
 *
 * @example
 * <Stat label="Total Revenue" value="$48,295" delta={+12.4} />
 * <Stat label="Active Users" value="1,204" delta={-3.1} deltaLabel="vs last week" />
 */

import { forwardRef, type HTMLAttributes } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  /** Percentage change. Positive = up (green/purple), negative = down (red) */
  delta?: number;
  deltaLabel?: string;
  icon?: React.ReactNode;
  /** Visual size variant */
  size?: "sm" | "md" | "lg";
}

// ---------------------------------------------------------------------------
// Stat
// ---------------------------------------------------------------------------

export const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ label, value, delta, deltaLabel, icon, size = "md", className, ...props }, ref) => {
    const isUp   = delta !== undefined && delta > 0;
    const isDown = delta !== undefined && delta < 0;
    const isNeutral = delta !== undefined && delta === 0;

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 rounded-lg border border-border bg-background",
          size === "sm" && "p-4",
          size === "md" && "p-5",
          size === "lg" && "p-6",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <p className={cn(
            "font-medium text-foreground/60 uppercase tracking-wider",
            size === "sm" ? "text-xs" : "text-xs",
          )}>
            {label}
          </p>
          {icon && (
            <span className="text-foreground/40">{icon}</span>
          )}
        </div>

        <p className={cn(
          "font-bold text-foreground tabular-nums",
          size === "sm" && "text-2xl",
          size === "md" && "text-3xl",
          size === "lg" && "text-4xl",
        )}>
          {value}
        </p>

        {delta !== undefined && (
          <div className={cn(
            "inline-flex items-center gap-1 text-xs font-medium",
            isUp   && "text-brand-purple",
            isDown && "text-brand-folly",
            isNeutral && "text-foreground/50",
          )}>
            {isUp      && <TrendingUp className="size-3.5" aria-hidden />}
            {isDown    && <TrendingDown className="size-3.5" aria-hidden />}
            {isNeutral && <Minus className="size-3.5" aria-hidden />}
            <span>
              {isUp && "+"}{delta.toFixed(1)}%
            </span>
            {deltaLabel && (
              <span className="text-foreground/40 font-normal">{deltaLabel}</span>
            )}
          </div>
        )}
      </div>
    );
  },
);
Stat.displayName = "Stat";
