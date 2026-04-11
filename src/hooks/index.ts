/**
 * Hooks Library — Barrel Export
 */

export { useId } from "./useId";
export { useMergeRefs } from "./useMergeRefs";
export { useDisclosure } from "./useDisclosure";
export type { UseDisclosureOptions, UseDisclosureReturn } from "./useDisclosure";
export { useMediaQuery } from "./useMediaQuery";
export { useReducedMotion } from "./useReducedMotion";
export { useBreakpoint } from "./useBreakpoint";
export type { UseBreakpointReturn } from "./useBreakpoint";
export { useClickOutside } from "./useClickOutside";
export { useClipboard } from "./useClipboard";
export type { UseClipboardOptions, UseClipboardReturn } from "./useClipboard";
export { useScrollLock } from "./useScrollLock";
export { useLocalStorage } from "./useLocalStorage";
export { useDebounce } from "./useDebounce";
export { useFocusTrap } from "./useFocusTrap";
export { useKeyboard } from "./useKeyboard";
export type { UseKeyboardOptions } from "./useKeyboard";
export { useControllable } from "./useControllable";
export { usePrevious } from "./usePrevious";
export { useCallbackRef } from "./useCallbackRef";
export { useIntersection } from "./useIntersection";

// Re-export useTheme from tokens for convenience
export { useTheme } from "../tokens/ThemeProvider";
export type { ThemeContextValue } from "../tokens/ThemeProvider";
