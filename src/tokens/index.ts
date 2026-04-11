/**
 * Design Token System — Main Barrel Export
 *
 * Exports all token layers, the ThemeProvider, and the useTheme hook.
 */

// --- Primitive tokens (raw values) ---
export * from "./primitive/colors";
export * from "./primitive/typography";
export * from "./primitive/spacing";
export * from "./primitive/radii";
export * from "./primitive/shadows";
export * from "./primitive/borders";
export * from "./primitive/opacity";
export * from "./primitive/zIndex";
export * from "./primitive/motion";
export * from "./primitive/breakpoints";

// --- Semantic tokens (meaning-based aliases) ---
export * from "./semantic/colors";
export * from "./semantic/typography";
export * from "./semantic/spacing";
export * from "./semantic/shadows";

// --- Component tokens ---
export * from "./component/button";
export * from "./component/input";
export * from "./component/card";
export * from "./component/badge";
export * from "./component/alert";
export * from "./component/modal";

// --- Themes ---
export * from "./themes/light";
export * from "./themes/dark";
export * from "./themes/high-contrast";
export * from "./themes/index";

// --- Provider + Hook ---
export { ThemeProvider, useTheme, themeInitScript } from "./ThemeProvider";
export type { ThemeContextValue, ThemeProviderProps } from "./ThemeProvider";
