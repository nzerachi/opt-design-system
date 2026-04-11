/**
 * Semantic Color Tokens
 *
 * Maps meaning-based aliases to CSS custom property references.
 * These are what components use — they never reference primitive hex values directly.
 * The actual values are resolved by the theme (light/dark/high-contrast) at runtime.
 *
 * Convention: all values are CSS var() references so they work with the ThemeProvider.
 */

// ---------------------------------------------------------------------------
// Background surfaces
// ---------------------------------------------------------------------------
export const backgroundTokens = {
  /** Primary page background */
  primary:    "hsl(var(--bg-primary))",
  /** Secondary background — slightly off-primary, for panels */
  secondary:  "hsl(var(--bg-secondary))",
  /** Tertiary background — sidebar, code blocks */
  tertiary:   "hsl(var(--bg-tertiary))",
  /** Inverse background — swap of primary (dark on light, light on dark) */
  inverse:    "hsl(var(--bg-inverse))",
  /** Brand background — orange-tinted surface */
  brand:      "var(--bg-brand)",
  /** Error/destructive background */
  error:      "var(--bg-error)",
  /** Warning background */
  warning:    "var(--bg-warning)",
  /** Success background */
  success:    "var(--bg-success)",
  /** Info background */
  info:       "var(--bg-info)",
  /** Muted background — subtle, for skeleton, disabled */
  muted:      "hsl(var(--bg-muted))",
  /** Glass / blur surface */
  glass:      "var(--bg-glass)",
  /** Card surface */
  card:       "hsl(var(--bg-card))",
  /** Input surface */
  input:      "var(--bg-input)",
  /** Popover surface */
  popover:    "hsl(var(--bg-popover))",
} as const;

// ---------------------------------------------------------------------------
// Foreground / text
// ---------------------------------------------------------------------------
export const textTokens = {
  /** Primary text — highest emphasis */
  primary:    "hsl(var(--text-primary))",
  /** Secondary text — supporting information (text-foreground/75) */
  secondary:  "hsl(var(--text-secondary))",
  /** Tertiary text — placeholder, hint text */
  tertiary:   "hsl(var(--text-tertiary))",
  /** Disabled text */
  disabled:   "hsl(var(--text-disabled))",
  /** Inverse text — on dark backgrounds in light mode, on light in dark */
  inverse:    "hsl(var(--text-inverse))",
  /** Link text */
  link:       "var(--text-link)",
  /** Error text */
  error:      "var(--text-error)",
  /** Success text */
  success:    "var(--text-success)",
  /** Warning text */
  warning:    "var(--text-warning)",
  /** Info text */
  info:       "var(--text-info)",
  /** Text on brand-colored backgrounds */
  onBrand:    "var(--text-on-brand)",
  /** Brand-colored text (gradient or orange) */
  brand:      "var(--text-brand)",
} as const;

// ---------------------------------------------------------------------------
// Border
// ---------------------------------------------------------------------------
export const borderTokens = {
  /** Default border — subtle dividers, card outlines */
  default:    "hsl(var(--border-default))",
  /** Strong border — emphasized dividers */
  strong:     "hsl(var(--border-strong))",
  /** Disabled border */
  disabled:   "hsl(var(--border-disabled))",
  /** Focus border — brand orange */
  focus:      "var(--border-focus)",
  /** Error border */
  error:      "var(--border-error)",
  /** Success border */
  success:    "var(--border-success)",
  /** Warning border */
  warning:    "var(--border-warning)",
  /** Inverse border */
  inverse:    "hsl(var(--border-inverse))",
} as const;

// ---------------------------------------------------------------------------
// Interactive states
// ---------------------------------------------------------------------------
export const interactiveTokens = {
  /** Primary interactive — button bg, active states */
  primary:         "hsl(var(--interactive-primary))",
  /** Primary interactive hover */
  primaryHover:    "hsl(var(--interactive-primary-hover))",
  /** Primary interactive active (pressed) */
  primaryActive:   "hsl(var(--interactive-primary-active))",
  /** Secondary interactive */
  secondary:       "hsl(var(--interactive-secondary))",
  /** Secondary hover */
  secondaryHover:  "hsl(var(--interactive-secondary-hover))",
  /** Disabled interactive */
  disabled:        "hsl(var(--interactive-disabled))",
  /** Brand accent interactive (orange) */
  brand:           "var(--interactive-brand)",
  /** Brand hover */
  brandHover:      "var(--interactive-brand-hover)",
} as const;

// ---------------------------------------------------------------------------
// Focus ring
// ---------------------------------------------------------------------------
export const focusTokens = {
  /** Focus ring color */
  ring:       "hsl(var(--focus-ring))",
  /** Focus ring shadow */
  shadow:     "var(--focus-shadow)",
} as const;

// ---------------------------------------------------------------------------
// Overlay
// ---------------------------------------------------------------------------
export const overlayTokens = {
  /** Modal backdrop */
  backdrop:   "var(--overlay-backdrop)",
  /** Heavy overlay */
  heavy:      "var(--overlay-heavy)",
} as const;

// ---------------------------------------------------------------------------
// Semantic brand colors (direct references, not theme-dependent)
// ---------------------------------------------------------------------------
export const brandTokens = {
  purple:  "#cc33ff",
  folly:   "#ff004f",
  orange:  "#ff8000",
  gradient: "linear-gradient(45deg, #cc33ff, #ff004f, #ff8000)",
} as const;

// Consolidated export
export const semanticColors = {
  background: backgroundTokens,
  text:       textTokens,
  border:     borderTokens,
  interactive: interactiveTokens,
  focus:      focusTokens,
  overlay:    overlayTokens,
  brand:      brandTokens,
} as const;

export type SemanticColors = typeof semanticColors;
