/**
 * Primitive Opacity Tokens
 *
 * Opacity scale used throughout the Opticule design system.
 * Derived from patterns found in the codebase:
 * - text-foreground/75 (0.75) — secondary text
 * - placeholder:text-foreground/75 — placeholder text
 * - bg-background/25 — header glassmorphism
 * - border-border/50 — subtle borders
 * - disabled:opacity-50 — disabled states
 * - hover:opacity-90 — hover states
 * - hover:opacity-70 — ThemeToggle hover
 */

export const opacity = {
  0:   0,
  5:   0.05,
  10:  0.10,
  15:  0.15,
  20:  0.20,
  25:  0.25,
  30:  0.30,
  40:  0.40,
  50:  0.50, // disabled states
  60:  0.60,
  70:  0.70, // ThemeToggle hover
  75:  0.75, // secondary text (text-foreground/75)
  80:  0.80,
  90:  0.90, // hover states
  95:  0.95,
  100: 1,
} as const;

// Named aliases for semantic use
export const opacityAliases = {
  /** Fully transparent */
  none: opacity[0],
  /** Header glassmorphism background */
  headerBg: opacity[25],
  /** Secondary text — text-foreground/75 */
  secondaryText: opacity[75],
  /** Placeholder text */
  placeholder: opacity[75],
  /** Disabled elements */
  disabled: opacity[50],
  /** Hover — primary */
  hover: opacity[90],
  /** Hover — secondary */
  hoverSubtle: opacity[70],
  /** Subtle overlay */
  overlaySubtle: opacity[50],
  /** Heavy overlay */
  overlayHeavy: opacity[80],
  /** Brand orange selection bg */
  selectionBg: 0.20, // #FF800034 ~ 20%
  /** Focus ring */
  focusRing: opacity[30],
  /** Fully opaque */
  full: opacity[100],
} as const;

export const primitiveOpacity = {
  opacity,
  opacityAliases,
} as const;

export type PrimitiveOpacity = typeof primitiveOpacity;
