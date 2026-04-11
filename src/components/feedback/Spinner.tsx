/**
 * Spinner — an animated loading indicator.
 *
 * @example
 * <Spinner />
 * <Spinner size="lg" label="Loading your data..." />
 * <Spinner color="brand" />
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";
import { VisuallyHidden } from "../primitives/VisuallyHidden";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerColor = "current" | "brand" | "primary" | "muted";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual size. Default: "md" */
  size?: SpinnerSize;
  /** Color. Default: "current" (inherits from parent) */
  color?: SpinnerColor;
  /** Accessible label. Default: "Loading…" */
  label?: string;
}

const sizeClasses: Record<SpinnerSize, string> = {
  xs: "size-3",
  sm: "size-4",
  md: "size-6",
  lg: "size-8",
  xl: "size-12",
};

const colorClasses: Record<SpinnerColor, string> = {
  current: "text-current",
  brand:   "text-brand-orange",
  primary: "text-foreground",
  muted:   "text-foreground/50",
};

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = "md", color = "current", label = "Loading…", className, ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <svg
        className={cn(
          "animate-spin",
          sizeClasses[size],
          colorClasses[color],
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      <VisuallyHidden>{label}</VisuallyHidden>
    </span>
  ),
);

Spinner.displayName = "Spinner";
