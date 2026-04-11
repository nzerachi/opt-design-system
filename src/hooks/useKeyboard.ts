/**
 * useKeyboard — attaches a keydown listener for specific key combinations.
 *
 * @example
 * useKeyboard("Escape", () => setOpen(false), { enabled: isOpen });
 * useKeyboard("k", () => openCommandPalette(), { meta: true });
 */

import { useEffect } from "react";

export interface UseKeyboardOptions {
  /** Whether the listener is active. Default: true */
  enabled?: boolean;
  /** Require Ctrl key (Windows/Linux) */
  ctrl?: boolean;
  /** Require Meta key (Cmd on Mac) */
  meta?: boolean;
  /** Require Shift key */
  shift?: boolean;
  /** Require Alt key */
  alt?: boolean;
  /** Target element. Default: document */
  target?: EventTarget;
  /** Event type. Default: "keydown" */
  event?: "keydown" | "keyup" | "keypress";
}

export function useKeyboard(
  key: string | string[],
  handler: (e: KeyboardEvent) => void,
  options: UseKeyboardOptions = {},
): void {
  const {
    enabled = true,
    ctrl = false,
    meta = false,
    shift = false,
    alt = false,
    target,
    event = "keydown",
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const keys = Array.isArray(key) ? key : [key];
    const eventTarget = target ?? document;

    const listener = (e: Event) => {
      const ke = e as KeyboardEvent;
      if (!keys.includes(ke.key)) return;
      if (ctrl && !ke.ctrlKey) return;
      if (meta && !ke.metaKey) return;
      if (shift && !ke.shiftKey) return;
      if (alt && !ke.altKey) return;
      handler(ke);
    };

    eventTarget.addEventListener(event, listener);
    return () => eventTarget.removeEventListener(event, listener);
  }, [key, handler, enabled, ctrl, meta, shift, alt, target, event]);
}
