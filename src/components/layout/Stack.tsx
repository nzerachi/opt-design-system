/**
 * Stack, HStack, VStack — flexbox stack layout primitives.
 *
 * Stack: general flex container with configurable direction
 * HStack: horizontal stack (flex-row)
 * VStack: vertical stack (flex-col)
 *
 * @example
 * <VStack gap="md" align="start">
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 * </VStack>
 *
 * @example
 * <HStack gap="sm" justify="between">
 *   <Button>Cancel</Button>
 *   <Button variant="primary">Save</Button>
 * </HStack>
 */

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export type StackSpacing =
  | "0" | "px" | "0.5" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5"
  | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "12" | "14" | "16"
  | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type StackAlign = "start" | "end" | "center" | "baseline" | "stretch";
export type StackJustify = "start" | "end" | "center" | "between" | "around" | "evenly";
export type StackWrap = "wrap" | "nowrap" | "wrap-reverse";

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Stack direction. Default: "col" (vertical) */
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  /** Gap between children. Default: "md" */
  gap?: StackSpacing;
  /** align-items. Default: "stretch" */
  align?: StackAlign;
  /** justify-content. Default: "start" */
  justify?: StackJustify;
  /** flex-wrap. Default: "nowrap" */
  wrap?: StackWrap;
  /** Whether to fill the full width. Default: false */
  fullWidth?: boolean;
}

const gapClasses: Record<StackSpacing, string> = {
  "0": "gap-0",
  "px": "gap-px",
  "0.5": "gap-0.5",
  "1": "gap-1",
  "1.5": "gap-1.5",
  "2": "gap-2",
  "2.5": "gap-2.5",
  "3": "gap-3",
  "3.5": "gap-3.5",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "7": "gap-7",
  "8": "gap-8",
  "9": "gap-9",
  "10": "gap-10",
  "12": "gap-12",
  "14": "gap-14",
  "16": "gap-16",
  xs: "gap-2",    // 8px
  sm: "gap-3",    // 12px
  md: "gap-4",    // 16px
  lg: "gap-6",    // 24px
  xl: "gap-8",    // 32px
  "2xl": "gap-12", // 48px
};

const alignClasses: Record<StackAlign, string> = {
  start:    "items-start",
  end:      "items-end",
  center:   "items-center",
  baseline: "items-baseline",
  stretch:  "items-stretch",
};

const justifyClasses: Record<StackJustify, string> = {
  start:   "justify-start",
  end:     "justify-end",
  center:  "justify-center",
  between: "justify-between",
  around:  "justify-around",
  evenly:  "justify-evenly",
};

const directionClasses: Record<NonNullable<StackProps["direction"]>, string> = {
  row:         "flex-row",
  col:         "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const wrapClasses: Record<StackWrap, string> = {
  wrap:         "flex-wrap",
  nowrap:       "flex-nowrap",
  "wrap-reverse": "flex-wrap-reverse",
};

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "col",
      gap = "md",
      align = "stretch",
      justify = "start",
      wrap = "nowrap",
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          directionClasses[direction],
          gapClasses[gap],
          alignClasses[align],
          justifyClasses[justify],
          wrapClasses[wrap],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      />
    );
  },
);

Stack.displayName = "Stack";

// ---------------------------------------------------------------------------
// HStack — convenience horizontal stack
// ---------------------------------------------------------------------------
export interface HStackProps extends Omit<StackProps, "direction"> {}

export const HStack = forwardRef<HTMLDivElement, HStackProps>((props, ref) => (
  <Stack ref={ref} direction="row" align="center" {...props} />
));

HStack.displayName = "HStack";

// ---------------------------------------------------------------------------
// VStack — convenience vertical stack
// ---------------------------------------------------------------------------
export interface VStackProps extends Omit<StackProps, "direction"> {}

export const VStack = forwardRef<HTMLDivElement, VStackProps>((props, ref) => (
  <Stack ref={ref} direction="col" {...props} />
));

VStack.displayName = "VStack";
