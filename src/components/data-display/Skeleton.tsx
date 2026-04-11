/**
 * Skeleton — loading placeholder with shimmer animation.
 *
 * @example
 * <Skeleton className="h-4 w-48" />
 * <Skeleton variant="circle" className="size-10" />
 * <Skeleton variant="text" lines={3} />
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export type SkeletonVariant = "default" | "text" | "circle" | "rect";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Shape variant. Default: "default" (rectangular, inherits className size) */
  variant?: SkeletonVariant;
  /** For "text" variant: number of text lines. Default: 1 */
  lines?: number;
  /** Whether animation is active. Default: true */
  animated?: boolean;
}

const shimmerClass =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:animate-[shimmer_1.5s_infinite]";

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = "default",
      lines = 1,
      animated = true,
      className,
      ...props
    },
    ref,
  ) => {
    const baseClass = cn(
      "bg-muted-light rounded",
      animated && shimmerClass,
    );

    if (variant === "text") {
      return (
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(
                baseClass,
                "h-4",
                // Last line is slightly shorter for natural look
                i === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
              )}
            />
          ))}
        </div>
      );
    }

    if (variant === "circle") {
      return (
        <div
          ref={ref}
          className={cn(baseClass, "rounded-full", className)}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn(baseClass, "rounded-lg", className)}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
