/**
 * useCallbackRef — creates a stable function reference that always calls
 * the latest version of the callback.
 *
 * Useful when passing callbacks to event listeners that shouldn't be
 * re-registered on every render.
 *
 * @example
 * const stableOnChange = useCallbackRef(onChange);
 */

import { useCallback, useEffect, useRef } from "react";

export function useCallbackRef<T extends (...args: never[]) => unknown>(
  callback: T | undefined,
): T {
  const callbackRef = useRef<T | undefined>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    ((...args) => callbackRef.current?.(...args)) as T,
    [],
  );
}
