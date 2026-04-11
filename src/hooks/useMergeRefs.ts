/**
 * useMergeRefs — merge multiple React refs into one callback ref.
 *
 * Useful when a component needs to forward a ref while also keeping
 * an internal ref (e.g., for measuring dimensions).
 *
 * @example
 * const ref = useMergeRefs(forwardedRef, internalRef);
 * return <div ref={ref} />;
 */

import { useCallback, type MutableRefObject, type RefCallback, type Ref } from "react";

type ReactRef<T> = Ref<T> | RefCallback<T> | MutableRefObject<T> | null | undefined;

export function useMergeRefs<T>(...refs: ReactRef<T>[]): RefCallback<T> {
  return useCallback(
    (value: T | null) => {
      for (const ref of refs) {
        if (ref == null) continue;
        if (typeof ref === "function") {
          ref(value);
        } else if (typeof ref === "object" && "current" in ref) {
          (ref as MutableRefObject<T | null>).current = value;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs,
  );
}
