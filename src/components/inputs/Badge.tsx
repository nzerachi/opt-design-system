/**
 * Badge — a small status indicator or label.
 *
 * Fixed from the original: the 'success' variant now correctly uses brand-purple
 * (not brand-folly which was a bug in the original Badge.tsx).
 *
 * @example
 * <Badge>New</Badge>
 * <Badge variant="gradient">Pro</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error" size="sm">Error</Badge>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export type BadgeVariant =
  | "default"
  | "gradient"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "outline"
  | "neutral";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual variant. Default: "default" */
  variant?: BadgeVariant;
  /** Size. Default: "md" */
  size?: BadgeSize;
  /** Render as a dot (no text, just a colored circle) */
  dot?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  default:  "bg-foreground text-background",
  gradient: "bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white",
  success:  "bg-brand-purple/15 text-brand-purple",   // FIXED: was brand-folly
  warning:  "bg-brand-orange/15 text-brand-orange",
  error:    "bg-brand-folly/15 text-brand-folly",
  info:     "bg-blue-500/15 text-blue-500",
  outline:  "border-2 border-border bg-transparent text-foreground",
  neutral:  "bg-muted-light/50 text-foreground/75",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = "default", size = "md", dot = false, className, children, ...props },
    ref,
  ) => {
    if (dot) {
      return (
        <span
          ref={ref}
          role="status"
          className={cn(
            "inline-block rounded-full",
            size === "sm" ? "size-1.5" : size === "md" ? "size-2" : "size-2.5",
            variant === "success"  && "bg-brand-purple",
            variant === "warning"  && "bg-brand-orange",
            variant === "error"    && "bg-brand-folly",
            variant === "info"     && "bg-blue-500",
            variant === "gradient" && "bg-brand-orange",
            (variant === "default" || variant === "neutral") && "bg-foreground/50",
            variant === "outline"  && "bg-transparent border-2 border-border",
            className,
          )}
          {...props}
        >
          <span className="sr-only">{children}</span>
        </span>
      );
    }

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg whitespace-nowrap",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
