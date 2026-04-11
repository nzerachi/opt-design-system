/**
 * usePrevious — stores the previous value of a variable.
 *
 * @example
 * const prevCount = usePrevious(count);
 */

import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
