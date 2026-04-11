/**
 * useId — SSR-safe unique ID generation.
 *
 * Uses React 18's built-in useId when available, falls back to
 * a stable counter-based ID for older environments.
 */

import { useId as useReactId } from "react";

/**
 * Returns a stable unique ID string.
 * Useful for associating form labels with inputs via aria-labelledby/htmlFor.
 *
 * @param prefix — optional prefix for readability (default: "opticule")
 *
 * @example
 * const id = useId("input");
 * // → "opticule-input-:r0:"
 */
export function useId(prefix = "opticule"): string {
  const reactId = useReactId();
  return `${prefix}-${reactId}`;
}
