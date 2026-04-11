/**
 * useFocusTrap — traps keyboard focus within a container element.
 *
 * When active, Tab/Shift+Tab cycle within the focusable children.
 * Used by Modal, Drawer, CommandPalette.
 *
 * @example
 * const containerRef = useRef<HTMLDivElement>(null);
 * useFocusTrap(containerRef, isOpen);
 */

import { useEffect } from "react";
import type { RefObject } from "react";

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[contenteditable]",
].join(", ");

export function useFocusTrap(
  containerRef: RefObject<HTMLElement>,
  active: boolean,
): void {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;

    // Focus the first focusable element
    const focusableElements = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
    ).filter((el) => !el.closest("[aria-hidden='true']"));

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Save previously focused element to restore on deactivation
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Focus first element when trap activates
    requestAnimationFrame(() => {
      firstFocusable?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      // Re-query in case children changed
      const currentFocusable = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
      ).filter((el) => !el.closest("[aria-hidden='true']"));

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];

      if (!e.shiftKey) {
        // Tab forward: if on last, wrap to first
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      } else {
        // Shift+Tab backward: if on first, wrap to last
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus when trap deactivates
      previouslyFocused?.focus?.();
    };
  }, [active, containerRef]);
}
