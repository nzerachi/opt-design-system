/**
 * Semantic Shadow / Elevation Tokens
 *
 * Maps elevation levels to shadow values via CSS custom properties.
 * Theme-aware: light mode uses lighter shadows, dark mode uses deeper ones.
 */

export const elevation = {
  /** No shadow — flat elements, inline components */
  none:    "none",
  /** Low elevation — default cards, inputs (shadow-sm) */
  low:     "var(--shadow-sm)",
  /** Medium elevation — popovers, dropdowns, hover cards (shadow-md) */
  medium:  "var(--shadow-md)",
  /** High elevation — glass cards, floating elements (shadow-lg) */
  high:    "var(--shadow-lg)",
  /** Overlay elevation — modals, drawers, sheets (shadow-2xl) */
  overlay: "var(--shadow-2xl)",
} as const;

export const semanticShadows = {
  elevation,
} as const;

export type SemanticShadows = typeof semanticShadows;
