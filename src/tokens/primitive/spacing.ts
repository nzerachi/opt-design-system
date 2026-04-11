/**
 * Primitive Spacing Tokens
 *
 * 4px base unit system. All spacing values are multiples of 4px.
 * Keys follow Tailwind naming conventions for familiarity.
 * Used for padding, margin, gap, width, height, and layout dimensions.
 */

// ---------------------------------------------------------------------------
// Core spacing scale (4px base unit)
// ---------------------------------------------------------------------------
export const spacing = {
  /** 0px */
  0:    "0px",
  /** 2px — micro spacing, hairline gaps */
  px:   "1px",
  0.5:  "2px",
  /** 4px — 1 unit */
  1:    "4px",
  /** 6px */
  1.5:  "6px",
  /** 8px — 2 units */
  2:    "8px",
  /** 10px */
  2.5:  "10px",
  /** 12px — 3 units */
  3:    "12px",
  /** 14px */
  3.5:  "14px",
  /** 16px — 4 units (base input padding) */
  4:    "16px",
  /** 20px — 5 units */
  5:    "20px",
  /** 24px — 6 units (card padding sm) */
  6:    "24px",
  /** 28px — 7 units */
  7:    "28px",
  /** 32px — 8 units (card padding md) */
  8:    "32px",
  /** 36px — 9 units */
  9:    "36px",
  /** 40px — 10 units */
  10:   "40px",
  /** 44px — 11 units (minimum touch target) */
  11:   "44px",
  /** 48px — 12 units (card padding lg) */
  12:   "48px",
  /** 56px — 14 units */
  14:   "56px",
  /** 64px — 16 units (nav height base) */
  16:   "64px",
  /** 80px — 20 units */
  20:   "80px",
  /** 96px — 24 units */
  24:   "96px",
  /** 112px */
  28:   "112px",
  /** 128px */
  32:   "128px",
  /** 160px */
  40:   "160px",
  /** 192px */
  48:   "192px",
  /** 224px */
  56:   "224px",
  /** 256px */
  64:   "256px",
  /** 288px */
  72:   "288px",
  /** 320px */
  80:   "320px",
  /** 384px */
  96:   "384px",
} as const;

// ---------------------------------------------------------------------------
// Named semantic spacing shortcuts (maps to scale above)
// ---------------------------------------------------------------------------
export const spacingAliases = {
  /** 2px — hairline */
  hairline: spacing[0.5],
  /** 4px — xs spacing */
  xxs: spacing[1],
  /** 8px — xs spacing */
  xs: spacing[2],
  /** 12px — sm spacing */
  sm: spacing[3],
  /** 16px — md spacing (base) */
  md: spacing[4],
  /** 24px — lg spacing */
  lg: spacing[6],
  /** 32px — xl spacing */
  xl: spacing[8],
  /** 48px — 2xl spacing */
  "2xl": spacing[12],
  /** 64px — 3xl spacing */
  "3xl": spacing[16],
} as const;

// ---------------------------------------------------------------------------
// Touch target sizing
// ---------------------------------------------------------------------------
export const touchTargets = {
  /** 44px — WCAG minimum touch target */
  minimum: spacing[11],
  /** 48px — comfortable touch target */
  comfortable: spacing[12],
} as const;

// ---------------------------------------------------------------------------
// Layout dimensions
// ---------------------------------------------------------------------------
export const layoutDimensions = {
  /** Sidebar width on desktop */
  sidebarWidth: "calc(340px + 4vw)",
  /** Sidebar max width on mobile */
  sidebarMobileMaxWidth: "300px",
  /** Header height on mobile */
  headerHeightMobile: "56px",
  /** Header height on desktop */
  headerHeightDesktop: "64px",
  /** Nav height — Opticule design guide */
  navHeight: "64px",
  /** Nav height large — Opticule design guide */
  navHeightLarge: "80px",
  /** Max content width */
  maxContentWidth: "1536px",
  /** Standard page width */
  pageWidth: "1280px",
  /** Reading width (optimal for long text) */
  readingWidth: "65ch",
  /** Narrow reading width */
  narrowWidth: "48ch",
  /** Container padding horizontal */
  containerPadding: spacing[6],
  /** Container padding horizontal on mobile */
  containerPaddingMobile: spacing[4],
} as const;

export const primitiveSpacing = {
  spacing,
  spacingAliases,
  touchTargets,
  layoutDimensions,
} as const;

export type PrimitiveSpacing = typeof primitiveSpacing;
