/**
 * Primitive Border Tokens
 *
 * Border widths and styles used across the Opticule design system.
 * Derived from audit: most components use 1px borders, some use 2px (outlined cards, alert borders).
 */

export const borderWidths = {
  /** 0px — no border */
  0:  "0px",
  /** 1px — default border (inputs, cards, navigation) */
  1:  "1px",
  /** 2px — emphasized border (Alert component uses border-2, outlined Card uses border-2) */
  2:  "2px",
  /** 4px — accent/focus border */
  4:  "4px",
} as const;

export const borderStyles = {
  solid:   "solid",
  dashed:  "dashed",
  dotted:  "dotted",
  double:  "double",
  hidden:  "hidden",
  none:    "none",
} as const;

export const primitiveBorders = {
  widths: borderWidths,
  styles: borderStyles,
} as const;

export type PrimitiveBorders = typeof primitiveBorders;
