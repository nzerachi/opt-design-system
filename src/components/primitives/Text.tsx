/**
 * Text — polymorphic text primitive with semantic size + weight variants.
 *
 * Renders as <span> by default. Use `as` to render as p, label, div, etc.
 * Typography values are derived from the Opticule type scale.
 *
 * @example
 * <Text>Default body text</Text>
 * <Text as="p" size="lg" weight="medium">Lead paragraph</Text>
 * <Text size="xs" color="secondary">Caption</Text>
 */

import { forwardRef, type ElementType } from "react";
import { cn } from "../../lib/utils";

export type TextSize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
export type TextWeight = "light" | "regular" | "medium" | "bold";
export type TextAlign = "left" | "center" | "right" | "justify";
export type TextColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "disabled"
  | "inverse"
  | "error"
  | "warning"
  | "success"
  | "info"
  | "brand"
  | "inherit";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render as. Default: "span" */
  as?: ElementType;
  /** Font size. Default: "md" (16px) */
  size?: TextSize;
  /** Font weight. Default: "regular" */
  weight?: TextWeight;
  /** Text alignment */
  align?: TextAlign;
  /** Semantic color */
  color?: TextColor;
  /** Truncate text with ellipsis */
  truncate?: boolean;
  /** Italic text */
  italic?: boolean;
  /** Underline text */
  underline?: boolean;
}

const sizeClasses: Record<TextSize, string> = {
  "2xs": "text-[0.6875rem]",
  xs:    "text-xs",      // 12px
  sm:    "text-sm",      // 14px
  md:    "text-base",    // 16px
  lg:    "text-lg",      // 18px
  xl:    "text-xl",      // 20px
};

const weightClasses: Record<TextWeight, string> = {
  light:   "font-light",
  regular: "font-normal",
  medium:  "font-medium",
  bold:    "font-bold",
};

const alignClasses: Record<TextAlign, string> = {
  left:    "text-left",
  center:  "text-center",
  right:   "text-right",
  justify: "text-justify",
};

const colorClasses: Record<TextColor, string> = {
  primary:   "text-foreground",
  secondary: "text-foreground/75",
  tertiary:  "text-muted-dark",
  disabled:  "text-foreground/50",
  inverse:   "text-background",
  error:     "text-brand-folly",
  warning:   "text-brand-orange",
  success:   "text-brand-purple",
  info:      "text-blue-500",
  brand:     "text-brand-orange",
  inherit:   "",
};

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = "span",
      size = "md",
      weight = "regular",
      align,
      color = "primary",
      truncate = false,
      italic = false,
      underline = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          sizeClasses[size],
          weightClasses[weight],
          align && alignClasses[align],
          colorClasses[color],
          truncate && "truncate",
          italic && "italic",
          underline && "underline",
          className,
        )}
        {...props}
      />
    );
  },
);

Text.displayName = "Text";
