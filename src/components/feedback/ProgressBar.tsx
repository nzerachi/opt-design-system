/**
 * ProgressBar — shows determinate or indeterminate progress.
 *
 * @example
 * <ProgressBar value={65} />
 * <ProgressBar value={40} label="Uploading..." showValue />
 * <ProgressBar indeterminate />
 * <ProgressBar value={100} color="success" />
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export type ProgressColor = "brand" | "success" | "warning" | "error" | "info" | "neutral";
export type ProgressSize = "xs" | "sm" | "md" | "lg";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100). Required unless indeterminate. */
  value?: number;
  /** Show indeterminate animation instead of a set value */
  indeterminate?: boolean;
  /** Accessible label */
  label?: string;
  /** Show the percentage value visually */
  showValue?: boolean;
  /** Color variant. Default: "brand" */
  color?: ProgressColor;
  /** Track height. Default: "sm" */
  size?: ProgressSize;
}

const sizeClasses: Record<ProgressSize, string> = {
  xs: "h-1",
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const colorClasses: Record<ProgressColor, string> = {
  brand:   "bg-brand-orange",
  success: "bg-brand-purple",
  warning: "bg-brand-orange",
  error:   "bg-brand-folly",
  info:    "bg-blue-500",
  neutral: "bg-foreground/50",
};

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value = 0,
      indeterminate = false,
      label,
      showValue = false,
      color = "brand",
      size = "sm",
      className,
      ...props
    },
    ref,
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {(label || showValue) && (
          <div className="flex justify-between items-center mb-1.5">
            {label && (
              <span className="text-sm text-foreground/75">{label}</span>
            )}
            {showValue && !indeterminate && (
              <span className="text-sm font-medium text-foreground" aria-hidden>
                {clampedValue}%
              </span>
            )}
          </div>
        )}

        <div
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label ?? "Progress"}
          aria-valuetext={indeterminate ? "Loading…" : `${clampedValue}%`}
          className={cn(
            "w-full rounded-full overflow-hidden bg-muted-light/60",
            sizeClasses[size],
          )}
        >
          <div
            className={cn(
              "h-full rounded-full transition-[width] duration-300 ease-out",
              colorClasses[color],
              indeterminate &&
                "animate-[shimmer_1.5s_ease-in-out_infinite] w-1/3 translate-x-[-100%]",
            )}
            style={!indeterminate ? { width: `${clampedValue}%` } : undefined}
          />
        </div>
      </div>
    );
  },
);

ProgressBar.displayName = "ProgressBar";
