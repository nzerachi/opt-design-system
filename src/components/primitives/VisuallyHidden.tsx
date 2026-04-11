/**
 * VisuallyHidden — hides content visually while keeping it accessible to screen readers.
 *
 * Use this for icon-only buttons, skip-nav links, and decorative elements
 * that need to convey meaning to assistive technologies.
 *
 * @example
 * <button>
 *   <SearchIcon aria-hidden />
 *   <VisuallyHidden>Search</VisuallyHidden>
 * </button>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  /** Whether the content should be focusable (for skip links). Default: false */
  focusable?: boolean;
}

export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ focusable = false, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Standard visually-hidden technique (all major screen readers support this)
          "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
          // Clip the element
          "[clip:rect(0,0,0,0)]",
          // When focusable, become visible on focus (for skip links)
          focusable &&
            "focus:static focus:w-auto focus:h-auto focus:p-1 focus:m-0 focus:overflow-visible focus:whitespace-normal focus:[clip:auto]",
          className,
        )}
        {...props}
      />
    );
  },
);

VisuallyHidden.displayName = "VisuallyHidden";
