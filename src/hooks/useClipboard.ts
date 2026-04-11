/**
 * useClipboard — copy text to the clipboard with a "copied" feedback state.
 *
 * @example
 * const { copy, hasCopied } = useClipboard();
 * <button onClick={() => copy("Hello!")}>{hasCopied ? "Copied!" : "Copy"}</button>
 */

import { useCallback, useEffect, useRef, useState } from "react";

export interface UseClipboardOptions {
  /** How long the hasCopied state remains true (ms). Default: 2000 */
  timeout?: number;
}

export interface UseClipboardReturn {
  /** Copy the given text to clipboard */
  copy: (text: string) => Promise<void>;
  /** True for `timeout`ms after a successful copy */
  hasCopied: boolean;
  /** Reset the hasCopied state early */
  reset: () => void;
}

export function useClipboard(
  options: UseClipboardOptions = {},
): UseClipboardReturn {
  const { timeout = 2000 } = options;
  const [hasCopied, setHasCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = useCallback(() => {
    setHasCopied(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setHasCopied(true);

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setHasCopied(false), timeout);
      } catch {
        // Clipboard write failed silently
        setHasCopied(false);
      }
    },
    [timeout],
  );

  // Cleanup timer on unmount
  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return { copy, hasCopied, reset };
}
