/**
 * Paragraph — a styled prose paragraph.
 *
 * @example
 * <Paragraph size="md" lead>
 *   This is a lead paragraph with slightly larger text.
 * </Paragraph>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg";
  /** Larger leading paragraph style */
  lead?: boolean;
  /** Muted / secondary color */
  muted?: boolean;
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ size = "md", lead = false, muted = false, className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "leading-7",
        sizeClasses[size],
        lead   && "text-xl text-foreground/80 font-light",
        muted  && "text-foreground/60",
        !lead && !muted && "text-foreground",
        "[&:not(:first-child)]:mt-4",
        className,
      )}
      {...props}
    />
  ),
);
Paragraph.displayName = "Paragraph";
