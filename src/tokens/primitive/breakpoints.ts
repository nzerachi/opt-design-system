/**
 * Primitive Breakpoint Tokens
 *
 * Screen size breakpoints for responsive design.
 * Derived from Opticule globals.css + Tailwind v4 defaults:
 * - xs: 520px (custom — defined in @theme)
 * - md2: 900px (custom — used for sidebar breakpoint in App.tsx)
 * - Standard Tailwind breakpoints for the rest
 */

// Raw pixel values
export const breakpointValues = {
  /** 520px — extra small screens, large phones (custom Opticule breakpoint) */
  xs:   520,
  /** 640px — small screens (Tailwind default sm) */
  sm:   640,
  /** 768px — medium screens, tablets (Tailwind default md) */
  md:   768,
  /** 900px — medium-large, sidebar breakpoint (custom Opticule breakpoint) */
  md2:  900,
  /** 1024px — large screens, small laptops (Tailwind default lg) */
  lg:   1024,
  /** 1280px — extra large, standard desktops (Tailwind default xl) */
  xl:   1280,
  /** 1536px — 2x extra large, wide screens (Tailwind default 2xl) */
  "2xl": 1536,
} as const;

// String values with px unit (for CSS use)
export const breakpoints = {
  xs:    `${breakpointValues.xs}px`,
  sm:    `${breakpointValues.sm}px`,
  md:    `${breakpointValues.md}px`,
  md2:   `${breakpointValues.md2}px`,
  lg:    `${breakpointValues.lg}px`,
  xl:    `${breakpointValues.xl}px`,
  "2xl": `${breakpointValues["2xl"]}px`,
} as const;

// Media query strings (min-width)
export const mediaQueries = {
  xs:    `(min-width: ${breakpoints.xs})`,
  sm:    `(min-width: ${breakpoints.sm})`,
  md:    `(min-width: ${breakpoints.md})`,
  md2:   `(min-width: ${breakpoints.md2})`,
  lg:    `(min-width: ${breakpoints.lg})`,
  xl:    `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
  /** Prefers reduced motion */
  reducedMotion: "(prefers-reduced-motion: reduce)",
  /** Prefers dark color scheme */
  darkMode: "(prefers-color-scheme: dark)",
  /** High contrast preference */
  highContrast: "(prefers-contrast: more)",
  /** Touch input device */
  touch: "(hover: none) and (pointer: coarse)",
  /** Fine pointer (mouse/trackpad) */
  mouse: "(hover: hover) and (pointer: fine)",
} as const;

// Container max-widths (optional, for container queries)
export const containerWidths = {
  xs:    "520px",
  sm:    "640px",
  md:    "768px",
  lg:    "1024px",
  xl:    "1280px",
  "2xl": "1536px",
} as const;

export const primitiveBreakpoints = {
  breakpointValues,
  breakpoints,
  mediaQueries,
  containerWidths,
} as const;

export type PrimitiveBreakpoints = typeof primitiveBreakpoints;
