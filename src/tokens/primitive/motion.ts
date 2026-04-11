/**
 * Primitive Motion Tokens
 *
 * Animation durations and easing functions for the Opticule design system.
 *
 * Derived from audit:
 * - Accordion: 0.2s ease-out
 * - All interactive transitions: Tailwind `transition-all` = 150ms
 * - Sidebar drawer: duration-300 ease-in-out
 * - General hover states: transition-all (150ms)
 *
 * Respects prefers-reduced-motion — components must apply this via CSS or JS.
 */

// ---------------------------------------------------------------------------
// Durations (milliseconds)
// ---------------------------------------------------------------------------
export const durations = {
  /** 0ms — instant, no animation */
  instant: 0,
  /** 75ms — ultra-fast micro-interactions */
  ultraFast: 75,
  /** 100ms — fast micro-interactions (ripple, icon swap) */
  fast:     100,
  /** 150ms — default Tailwind transition (hover states) */
  normal:   150,
  /** 200ms — standard Opticule transitions (accordion, hover opacity) */
  moderate: 200,
  /** 300ms — medium transitions (sidebar drawer, modal enter) */
  slow:     300,
  /** 400ms — slower transitions (page transitions) */
  slower:   400,
  /** 500ms — slow, deliberate animations */
  slowest:  500,
  /** 700ms — long animations (skeletons, loading) */
  long:     700,
  /** 1000ms — very long (progress bars, reveal animations) */
  veryLong: 1000,
} as const;

// ---------------------------------------------------------------------------
// Easing Functions
// ---------------------------------------------------------------------------
export const easings = {
  /** No easing — constant rate */
  linear:        "linear",
  /** Starts slow, ends fast — UI enter */
  easeIn:        "cubic-bezier(0.4, 0, 1, 1)",
  /** Starts fast, ends slow — UI exit (Opticule accordion: ease-out) */
  easeOut:       "cubic-bezier(0, 0, 0.2, 1)",
  /** Slow at both ends — general transitions */
  easeInOut:     "cubic-bezier(0.4, 0, 0.2, 1)",
  /** Standard easing */
  ease:          "ease",
  /** Spring-like — overshoot slightly, then settle (for slide-ins) */
  spring:        "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  /** Anticipate — slight backwards pull before moving */
  anticipate:    "cubic-bezier(0.36, 0, 0.66, -0.56)",
  /** Bounce-like ease out */
  bounce:        "cubic-bezier(0.34, 1.56, 0.64, 1)",
  /** Sidebar drawer ease (Opticule App.tsx: ease-in-out) */
  sidebarDrawer: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// ---------------------------------------------------------------------------
// Transition shorthand values (duration + easing combos)
// ---------------------------------------------------------------------------
export const transitions = {
  /** Instant */
  none:     "none",
  /** 150ms ease-in-out — hover highlights */
  hover:    `${durations.normal}ms ${easings.easeInOut}`,
  /** 200ms ease-out — accordion, micro-animations */
  fast:     `${durations.moderate}ms ${easings.easeOut}`,
  /** 300ms ease-in-out — sidebar, modals, drawers */
  modal:    `${durations.slow}ms ${easings.easeInOut}`,
  /** 300ms ease-out — slide-in from top/bottom/side */
  slide:    `${durations.slow}ms ${easings.easeOut}`,
  /** 200ms ease-in — fade out */
  fadeOut:  `${durations.moderate}ms ${easings.easeIn}`,
  /** 300ms ease-out — fade in */
  fadeIn:   `${durations.slow}ms ${easings.easeOut}`,
  /** 400ms spring — elastic elements */
  spring:   `${durations.slower}ms ${easings.spring}`,
  /** 700ms ease-in-out — skeleton shimmer */
  shimmer:  `${durations.long}ms ${easings.easeInOut}`,
} as const;

// ---------------------------------------------------------------------------
// Keyframe names (for CSS keyframe animation references)
// ---------------------------------------------------------------------------
export const keyframes = {
  accordionDown: "accordion-down",
  accordionUp:   "accordion-up",
  fadeIn:        "fade-in",
  fadeOut:       "fade-out",
  slideInFromTop:    "slide-in-from-top",
  slideInFromBottom: "slide-in-from-bottom",
  slideInFromLeft:   "slide-in-from-left",
  slideInFromRight:  "slide-in-from-right",
  scaleIn:       "scale-in",
  scaleOut:      "scale-out",
  spin:          "spin",
  pulse:         "pulse",
  bounce:        "bounce",
  shimmer:       "shimmer",
} as const;

export const primitiveMotion = {
  durations,
  easings,
  transitions,
  keyframes,
} as const;

export type PrimitiveMotion = typeof primitiveMotion;
