/**
 * useReducedMotion — returns true when the user prefers reduced motion.
 *
 * Use this to disable or simplify animations for accessibility.
 *
 * @example
 * const prefersReducedMotion = useReducedMotion();
 * const duration = prefersReducedMotion ? 0 : 300;
 */

import { useMediaQuery } from "./useMediaQuery";

export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
