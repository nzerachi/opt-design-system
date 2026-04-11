/**
 * Primitive Typography Tokens
 *
 * Derived from the Opticule design guide:
 * - Font family: Ubuntu (self-hosted woff2, weights 300/400/500/700)
 * - Mono family: Ubuntu Mono (self-hosted woff2, weights 400/700)
 * - Type scale anchored to the design spec (H1=40px, H2=32px, H3=24px, Body=16px, Small=14px)
 */

// ---------------------------------------------------------------------------
// Font Families
// ---------------------------------------------------------------------------
export const fontFamilies = {
  /** Primary brand font — used for all UI text */
  sans: '"Ubuntu", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  /** Monospace font for code blocks, keyboard shortcuts */
  mono: '"Ubuntu Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  /** System serif fallback — used only when absolutely needed */
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
} as const;

// ---------------------------------------------------------------------------
// Font Weights (matches the available Ubuntu woff2 files)
// ---------------------------------------------------------------------------
export const fontWeights = {
  light:    300, // Ubuntu Light
  regular:  400, // Ubuntu Regular
  medium:   500, // Ubuntu Medium (labeled "SemiBold" in woff2 files)
  bold:     700, // Ubuntu Bold
} as const;

// ---------------------------------------------------------------------------
// Font Sizes
// Raw pixel values with rem equivalents (16px base)
// Scale derived from Opticule type spec, extended to cover display and micro sizes
// ---------------------------------------------------------------------------
export const fontSizes = {
  /** 11px / 0.6875rem — micro labels, legal text */
  "2xs": "0.6875rem",
  /** 12px / 0.75rem — helper text, timestamps, secondary labels */
  xs:    "0.75rem",
  /** 14px / 0.875rem — small body, captions, secondary UI */
  sm:    "0.875rem",
  /** 16px / 1rem — base body text (Opticule body spec) */
  md:    "1rem",
  /** 18px / 1.125rem — slightly larger body, intro paragraphs */
  lg:    "1.125rem",
  /** 20px / 1.25rem — H4 / large labels (Opticule H4 spec) */
  xl:    "1.25rem",
  /** 24px / 1.5rem — H3 (Opticule H3 spec) */
  "2xl": "1.5rem",
  /** 30px / 1.875rem — between H3 and H2 */
  "3xl": "1.875rem",
  /** 32px / 2rem — H2 (Opticule H2 spec) */
  "4xl": "2rem",
  /** 40px / 2.5rem — H1 (Opticule H1 spec) */
  "5xl": "2.5rem",
  /** 48px / 3rem — display heading */
  "6xl": "3rem",
  /** 60px / 3.75rem — large display heading */
  "7xl": "3.75rem",
  /** 72px / 4.5rem — hero display */
  "8xl": "4.5rem",
  /** 96px / 6rem — ultra-large hero / billboard */
  "9xl": "6rem",
} as const;

// ---------------------------------------------------------------------------
// Line Heights
// ---------------------------------------------------------------------------
export const lineHeights = {
  /** 1 — single line, for display/headline text */
  none:      "1",
  /** 1.1 — tight, for very large display headings */
  tighter:   "1.1",
  /** 1.2 — tight, H1 (per Opticule spec) */
  tight:     "1.2",
  /** 1.25 — snug */
  snug:      "1.25",
  /** 1.3 — H2 line height (per Opticule spec) */
  h2:        "1.3",
  /** 1.4 — H3 line height (per Opticule spec) */
  h3:        "1.4",
  /** 1.5 — H4 / normal (per Opticule spec) */
  normal:    "1.5",
  /** 1.6 — Body line height (per Opticule spec — optimal readability) */
  relaxed:   "1.6",
  /** 1.75 — loose, for large body paragraphs */
  loose:     "1.75",
  /** 2 — very loose */
  double:    "2",
} as const;

// ---------------------------------------------------------------------------
// Letter Spacing
// ---------------------------------------------------------------------------
export const letterSpacings = {
  /** -0.05em — very tight, for display headings */
  tightest:  "-0.05em",
  /** -0.025em — tight */
  tighter:   "-0.025em",
  /** -0.01em — slightly tight */
  tight:     "-0.01em",
  /** 0 — default */
  normal:    "0",
  /** 0.025em — slightly wide */
  wide:      "0.025em",
  /** 0.05em — wide, labels and overlines */
  wider:     "0.05em",
  /** 0.1em — wider, uppercase labels */
  widest:    "0.1em",
  /** 0.15em — very wide, allcaps display */
  ultraWide: "0.15em",
} as const;

// ---------------------------------------------------------------------------
// Text Decoration
// ---------------------------------------------------------------------------
export const textDecorations = {
  none:      "none",
  underline: "underline",
  overline:  "overline",
  lineThrough: "line-through",
} as const;

// ---------------------------------------------------------------------------
// Text Transform
// ---------------------------------------------------------------------------
export const textTransforms = {
  none:       "none",
  uppercase:  "uppercase",
  lowercase:  "lowercase",
  capitalize: "capitalize",
} as const;

// Consolidated export
export const primitiveTypography = {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  textDecorations,
  textTransforms,
} as const;

export type PrimitiveTypography = typeof primitiveTypography;
