/**
 * useDebounce — debounces a value by a given delay.
 *
 * @example
 * const debouncedSearch = useDebounce(searchInput, 300);
 * // Use debouncedSearch for API calls instead of searchInput
 */

import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
