/**
 * Heading — semantic heading component with visual level control.
 *
 * Supports `level` (h1–h6, controls the DOM element) and `size` (controls
 * visual appearance). This allows semantic and visual hierarchy to be
 * decoupled — e.g., rendering an h2 that looks like an h4.
 *
 * @example
 * <Heading>Default h2 heading</Heading>
 * <Heading level={1} size="lg">Page title (h1, lg visual)</Heading>
 * <Heading level={3}>Section heading</Heading>
 */

import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type HeadingAlign = "left" | "center" | "right";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Semantic heading level (h1–h6). Controls the rendered HTML element.
   * Default: 2
   */
  level?: HeadingLevel;
  /**
   * Visual size. If omitted, defaults to the size corresponding to `level`.
   * Set explicitly to decouple visual size from semantic level.
   */
  size?: HeadingSize;
  /** Text alignment */
  align?: HeadingAlign;
  /** Truncate with ellipsis */
  truncate?: boolean;
}

// Default size for each heading level (from Opticule type spec)
const defaultSizeForLevel: Record<HeadingLevel, HeadingSize> = {
  1: "4xl",   // 40px h1
  2: "3xl",   // 32px h2
  3: "2xl",   // 24px h3
  4: "xl",    // 20px h4
  5: "lg",    // 18px h5
  6: "md",    // 16px h6
};

const sizeClasses: Record<HeadingSize, string> = {
  xs:   "text-sm font-bold leading-normal",        // 14px
  sm:   "text-base font-bold leading-normal",      // 16px
  md:   "text-lg font-bold leading-normal",        // 18px
  lg:   "text-xl font-bold leading-normal",        // 20px
  xl:   "text-2xl font-bold leading-[1.4]",        // 24px — H3 spec
  "2xl": "text-[2rem] font-bold leading-[1.3]",   // 32px — H2 spec
  "3xl": "text-[2rem] font-bold leading-[1.3]",   // 32px
  "4xl": "text-[2.5rem] font-bold leading-tight", // 40px — H1 spec
};

const alignClasses: Record<HeadingAlign, string> = {
  left:   "text-left",
  center: "text-center",
  right:  "text-right",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 2,
      size,
      align,
      truncate = false,
      className,
      ...props
    },
    ref,
  ) => {
    const resolvedSize = size ?? defaultSizeForLevel[level];
    const Component = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

    return (
      <Component
        ref={ref}
        className={cn(
          "text-foreground tracking-tight",
          sizeClasses[resolvedSize],
          align && alignClasses[align],
          truncate && "truncate",
          className,
        )}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";
