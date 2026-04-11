/**
 * Primitive Border Radius Tokens
 *
 * Derived from Opticule design system:
 * - Base radius: 0.5rem (8px) — used consistently as `rounded-lg`
 * - All components use rounded corners; sharp corners are not part of the design language
 * - The `--radius` CSS variable is 0.5rem; derived values are: lg=8px, md=6px, sm=4px
 */

export const radii = {
  /** 0px — no rounding, sharp corners */
  none: "0px",
  /** 2px — very subtle rounding */
  xs:   "2px",
  /** 4px — sm (--radius-sm) */
  sm:   "4px",
  /** 6px — md (--radius-md) */
  md:   "6px",
  /** 8px — lg (--radius / --radius-lg) — DEFAULT for all Opticule components */
  lg:   "8px",
  /** 12px — xl */
  xl:   "12px",
  /** 16px — 2xl */
  "2xl": "16px",
  /** 24px — 3xl, pill-like corners */
  "3xl": "24px",
  /** 32px — 4xl */
  "4xl": "32px",
  /** 9999px — full pill / circle */
  full: "9999px",
} as const;

/**
 * Component-specific radius aliases.
 * These reference radii values and can be used to keep component tokens
 * semantically meaningful without hard-coding numbers.
 */
export const radiusAliases = {
  /** Default card radius */
  card: radii.lg,
  /** Default button radius */
  button: radii.lg,
  /** Default input radius */
  input: radii.lg,
  /** Default badge/tag radius */
  badge: radii.lg,
  /** Default modal/dialog radius */
  modal: radii.lg,
  /** Default popover/tooltip radius */
  popover: radii.lg,
  /** Default avatar radius (circular) */
  avatar: radii.full,
  /** Default chip/tag pill */
  chip: radii["3xl"],
  /** Default checkbox */
  checkbox: radii.sm,
  /** Progress bar */
  progress: radii.full,
  /** Switch track */
  switchTrack: radii.full,
  /** Switch thumb */
  switchThumb: radii.full,
} as const;

export const primitiveRadii = {
  radii,
  radiusAliases,
} as const;

export type PrimitiveRadii = typeof primitiveRadii;
