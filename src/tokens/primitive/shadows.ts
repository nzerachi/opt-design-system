/**
 * Primitive Shadow Tokens
 *
 * Elevation system for Opticule. Shadows are neutral (dark) for light mode
 * and slightly visible (lighter) for dark mode.
 *
 * Derived from the Opticule audit:
 * - Cards use shadow-sm (default) or shadow-lg (hover/glass)
 * - Modals use shadow-2xl
 * - Buttons (gradient) use shadow-lg
 */

// Light mode shadows
export const shadowsLight = {
  none:  "none",
  /** Hairline shadow for very subtle elevation (table rows, dividers) */
  xs:    "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  /** Subtle elevation — default cards, inputs on focus */
  sm:    "0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10)",
  /** Standard elevation — popovers, dropdowns, hover cards */
  md:    "0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.10)",
  /** Medium-high elevation — glass cards, floating elements */
  lg:    "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
  /** High elevation — modals, drawers, sheets */
  xl:    "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
  /** Maximum elevation — modals on dark overlay */
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  /** Inner shadow — pressed states, inset inputs */
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
  /** Brand orange glow — used for focus rings and special CTAs */
  brand: "0 0 0 4px rgba(255, 128, 0, 0.20)",
  /** Brand purple glow */
  brandPurple: "0 0 0 4px rgba(204, 51, 255, 0.20)",
  /** Brand folly glow */
  brandFolly: "0 0 0 4px rgba(255, 0, 79, 0.20)",
  /** Focus ring — used for all interactive element focus states */
  focus: "0 0 0 3px rgba(255, 128, 0, 0.30)",
  /** Error ring */
  error: "0 0 0 3px rgba(255, 0, 79, 0.30)",
} as const;

// Dark mode shadows — more visible on near-black backgrounds
export const shadowsDark = {
  none:  "none",
  xs:    "0 1px 2px 0 rgba(0, 0, 0, 0.30)",
  sm:    "0 1px 3px 0 rgba(0, 0, 0, 0.40), 0 1px 2px -1px rgba(0, 0, 0, 0.40)",
  md:    "0 4px 6px -1px rgba(0, 0, 0, 0.40), 0 2px 4px -2px rgba(0, 0, 0, 0.40)",
  lg:    "0 10px 15px -3px rgba(0, 0, 0, 0.50), 0 4px 6px -4px rgba(0, 0, 0, 0.40)",
  xl:    "0 20px 25px -5px rgba(0, 0, 0, 0.50), 0 8px 10px -6px rgba(0, 0, 0, 0.40)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.70)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.30)",
  brand: "0 0 0 4px rgba(255, 128, 0, 0.25)",
  brandPurple: "0 0 0 4px rgba(204, 51, 255, 0.25)",
  brandFolly: "0 0 0 4px rgba(255, 0, 79, 0.25)",
  focus: "0 0 0 3px rgba(255, 128, 0, 0.40)",
  error: "0 0 0 3px rgba(255, 0, 79, 0.40)",
} as const;

export const primitiveShadows = {
  light: shadowsLight,
  dark: shadowsDark,
} as const;

export type PrimitiveShadows = typeof primitiveShadows;
