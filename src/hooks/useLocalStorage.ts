/**
 * useLocalStorage — synchronized state backed by localStorage.
 *
 * SSR-safe: works without throwing on server.
 *
 * @example
 * const [theme, setTheme] = useLocalStorage("theme", "light");
 */

import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const readValue = useCallback((): T => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      if (typeof window === "undefined") return;
      try {
        const newValue =
          typeof value === "function"
            ? (value as (prev: T) => T)(storedValue)
            : value;
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(newValue);
        window.dispatchEvent(new Event("local-storage"));
      } catch {
        // Silently fail (e.g., private browsing quota exceeded)
      }
    },
    [key, storedValue],
  );

  const removeValue = useCallback(() => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
    setStoredValue(initialValue);
  }, [initialValue, key]);

  // Sync across tabs
  useEffect(() => {
    const handleStorageChange = () => setStoredValue(readValue());
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, [readValue]);

  return [storedValue, setValue, removeValue];
}
