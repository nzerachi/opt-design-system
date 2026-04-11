/**
 * useControllable — manages the controlled/uncontrolled value pattern.
 *
 * Handles the React pattern where a component can be either fully controlled
 * (value + onChange provided) or uncontrolled (defaultValue only).
 *
 * @example
 * const [value, setValue] = useControllable(props.value, props.onChange, props.defaultValue ?? "");
 */

import { useCallback, useRef, useState } from "react";

export function useControllable<T>(
  controlledValue: T | undefined,
  onChange: ((value: T) => void) | undefined,
  defaultValue: T,
): [T, (value: T) => void] {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<T>(defaultValue);

  // Track whether we were controlled on mount (to catch misuse)
  const wasControlledRef = useRef(isControlled);
  if (process.env.NODE_ENV !== "production") {
    if (wasControlledRef.current !== isControlled) {
      console.warn(
        "[Opticule] A component is changing from uncontrolled to controlled (or vice versa). " +
          "This is not supported. Decide between controlled and uncontrolled for the lifetime of the component.",
      );
    }
  }

  const value = isControlled ? (controlledValue as T) : internalValue;

  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  return [value, setValue];
}
