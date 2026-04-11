/**
 * Primitive Color Tokens
 *
 * Raw color values organized into named scales.
 * These are the ground-truth values — all semantic tokens and component tokens
 * must reference values from this file.
 *
 * Scales are generated from each brand base value using perceptual lightness steps.
 * Brand base values are taken directly from the Opticule Figma design (audited April 2026):
 *   - Purple:  #CC33FF (brand-purple)
 *   - Folly:   #FF004F (brand-folly / magenta)
 *   - Orange:  #FF8000 (brand-orange)
 *   - Gray:    #808080 (brand-gray / neutral)
 */

// ---------------------------------------------------------------------------
// Opticule Brand — Purple (#CC33FF is the 500 base)
// ---------------------------------------------------------------------------
export const purple = {
  50:  "#f9e6ff",
  100: "#f1c1ff",
  200: "#e699ff",
  300: "#da66ff",
  400: "#d44dff",
  500: "#cc33ff", // brand-purple — primary brand accent
  600: "#b800f0",
  700: "#9200c2",
  800: "#6c0091",
  900: "#480060",
  950: "#2e003e",
} as const;

// ---------------------------------------------------------------------------
// Opticule Brand — Folly / Magenta (#FF004F is the 500 base)
// ---------------------------------------------------------------------------
export const folly = {
  50:  "#ffe0eb",
  100: "#ffb3cc",
  200: "#ff80aa",
  300: "#ff4d88",
  400: "#ff2669",
  500: "#ff004f", // brand-folly — error / destructive
  600: "#d90043",
  700: "#b30038",
  800: "#8c002c",
  900: "#660020",
  950: "#400013",
} as const;

// ---------------------------------------------------------------------------
// Opticule Brand — Orange (#FF8000 is the 500 base)
// ---------------------------------------------------------------------------
export const orange = {
  50:  "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb84d",
  400: "#ffa326",
  500: "#ff8000", // brand-orange — warning / interactive primary accent
  600: "#e67200",
  700: "#cc6600",
  800: "#994c00",
  900: "#663300",
  950: "#401f00",
} as const;

// ---------------------------------------------------------------------------
// Neutral / Gray (built around #808080 as the 500 base)
// ---------------------------------------------------------------------------
export const neutral = {
  0:   "#ffffff",
  50:  "#f5f5f5",
  100: "#e6e6e6",
  150: "#d9d9d9",
  200: "#cccccc",
  300: "#b3b3b3",
  400: "#999999",
  500: "#808080", // brand-gray
  600: "#666666",
  700: "#4d4d4d",
  800: "#333333",
  900: "#1a1a1a",
  950: "#0d0d0d",
  1000: "#000000",
} as const;

// ---------------------------------------------------------------------------
// Supporting Purple (#9B59B6 is the 500 base)
// ---------------------------------------------------------------------------
export const violet = {
  50:  "#f3e5f9",
  100: "#e1bef0",
  200: "#cd94e6",
  300: "#b96bdb",
  400: "#aa50d3",
  500: "#9b59b6", // supporting purple — secondary accent
  600: "#8a4fa3",
  700: "#744391",
  800: "#5d367d",
  900: "#3e235a",
  950: "#26153a",
} as const;

// ---------------------------------------------------------------------------
// Semantic Scale Colors — Red (error, destructive; distinct from folly)
// ---------------------------------------------------------------------------
export const red = {
  50:  "#fff1f2",
  100: "#ffe4e6",
  200: "#fecdd3",
  300: "#fda4af",
  400: "#fb7185",
  500: "#f43f5e",
  600: "#e11d48",
  700: "#be123c",
  800: "#9f1239",
  900: "#881337",
  950: "#4c0519",
} as const;

// ---------------------------------------------------------------------------
// Green (success)
// ---------------------------------------------------------------------------
export const green = {
  50:  "#f0fdf4",
  100: "#dcfce7",
  200: "#bbf7d0",
  300: "#86efac",
  400: "#4ade80",
  500: "#22c55e",
  600: "#16a34a",
  700: "#15803d",
  800: "#166534",
  900: "#14532d",
  950: "#052e16",
} as const;

// ---------------------------------------------------------------------------
// Yellow (warning — used alongside brand-orange)
// ---------------------------------------------------------------------------
export const yellow = {
  50:  "#fefce8",
  100: "#fef9c3",
  200: "#fef08a",
  300: "#fde047",
  400: "#facc15",
  500: "#eab308",
  600: "#ca8a04",
  700: "#a16207",
  800: "#854d0e",
  900: "#713f12",
  950: "#422006",
} as const;

// ---------------------------------------------------------------------------
// Blue (info)
// ---------------------------------------------------------------------------
export const blue = {
  50:  "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a",
  950: "#172554",
} as const;

// ---------------------------------------------------------------------------
// Teal (supplementary)
// ---------------------------------------------------------------------------
export const teal = {
  50:  "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#2dd4bf",
  500: "#14b8a6",
  600: "#0d9488",
  700: "#0f766e",
  800: "#115e59",
  900: "#134e4a",
  950: "#042f2e",
} as const;

// ---------------------------------------------------------------------------
// Pink (supplementary)
// ---------------------------------------------------------------------------
export const pink = {
  50:  "#fdf2f8",
  100: "#fce7f3",
  200: "#fbcfe8",
  300: "#f9a8d4",
  400: "#f472b6",
  500: "#ec4899",
  600: "#db2777",
  700: "#be185d",
  800: "#9d174d",
  900: "#831843",
  950: "#500724",
} as const;

// ---------------------------------------------------------------------------
// Alpha / Transparency utilities (brand-orange at various opacities)
// ---------------------------------------------------------------------------
export const orangeAlpha = {
  5:  "rgba(255, 128, 0, 0.05)",
  10: "rgba(255, 128, 0, 0.10)",
  20: "rgba(255, 128, 0, 0.20)",
  30: "rgba(255, 128, 0, 0.30)",
  40: "rgba(255, 128, 0, 0.40)",
  50: "rgba(255, 128, 0, 0.50)",
} as const;

export const purpleAlpha = {
  5:  "rgba(204, 51, 255, 0.05)",
  10: "rgba(204, 51, 255, 0.10)",
  20: "rgba(204, 51, 255, 0.20)",
  30: "rgba(204, 51, 255, 0.30)",
  40: "rgba(204, 51, 255, 0.40)",
  50: "rgba(204, 51, 255, 0.50)",
} as const;

export const follyAlpha = {
  5:  "rgba(255, 0, 79, 0.05)",
  10: "rgba(255, 0, 79, 0.10)",
  20: "rgba(255, 0, 79, 0.20)",
  30: "rgba(255, 0, 79, 0.30)",
  40: "rgba(255, 0, 79, 0.40)",
  50: "rgba(255, 0, 79, 0.50)",
} as const;

export const blackAlpha = {
  5:  "rgba(0, 0, 0, 0.05)",
  10: "rgba(0, 0, 0, 0.10)",
  20: "rgba(0, 0, 0, 0.20)",
  30: "rgba(0, 0, 0, 0.30)",
  40: "rgba(0, 0, 0, 0.40)",
  50: "rgba(0, 0, 0, 0.50)",
  60: "rgba(0, 0, 0, 0.60)",
  70: "rgba(0, 0, 0, 0.70)",
  80: "rgba(0, 0, 0, 0.80)",
  90: "rgba(0, 0, 0, 0.90)",
} as const;

export const whiteAlpha = {
  5:  "rgba(255, 255, 255, 0.05)",
  10: "rgba(255, 255, 255, 0.10)",
  20: "rgba(255, 255, 255, 0.20)",
  30: "rgba(255, 255, 255, 0.30)",
  40: "rgba(255, 255, 255, 0.40)",
  50: "rgba(255, 255, 255, 0.50)",
  60: "rgba(255, 255, 255, 0.60)",
  70: "rgba(255, 255, 255, 0.70)",
  80: "rgba(255, 255, 255, 0.80)",
  90: "rgba(255, 255, 255, 0.90)",
} as const;

// ---------------------------------------------------------------------------
// Brand gradient — the signature Opticule visual element
// ---------------------------------------------------------------------------
export const gradient = {
  brand: "linear-gradient(45deg, #cc33ff, #ff004f, #ff8000)",
  brandHorizontal: "linear-gradient(90deg, #cc33ff, #ff004f, #ff8000)",
  brandVertical: "linear-gradient(180deg, #cc33ff, #ff004f, #ff8000)",
  brandReverse: "linear-gradient(45deg, #ff8000, #ff004f, #cc33ff)",
  purpleToFolly: "linear-gradient(45deg, #cc33ff, #ff004f)",
  follyToOrange: "linear-gradient(45deg, #ff004f, #ff8000)",
  purpleToOrange: "linear-gradient(45deg, #cc33ff, #ff8000)",
} as const;

// Consolidated primitive colors export
export const primitiveColors = {
  purple,
  folly,
  orange,
  neutral,
  violet,
  red,
  green,
  yellow,
  blue,
  teal,
  pink,
  orangeAlpha,
  purpleAlpha,
  follyAlpha,
  blackAlpha,
  whiteAlpha,
  gradient,
} as const;

export type PrimitiveColors = typeof primitiveColors;
