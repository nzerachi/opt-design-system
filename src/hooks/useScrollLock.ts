/**
 * useScrollLock — prevents body scrolling while a modal/drawer is open.
 *
 * Accounts for the scrollbar width to prevent layout shift.
 *
 * @example
 * useScrollLock(isModalOpen);
 */

import { useEffect } from "react";

export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    if (typeof document === "undefined") return;

    const { body } = document;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalOverflow = body.style.overflow;
    const originalPaddingRight = body.style.paddingRight;

    // Compensate for scrollbar width to prevent layout shift
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = originalOverflow;
      body.style.paddingRight = originalPaddingRight;
    };
  }, [locked]);
}
