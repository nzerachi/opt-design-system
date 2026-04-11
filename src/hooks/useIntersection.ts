/**
 * useIntersection — observes when an element enters/exits the viewport.
 *
 * @example
 * const [ref, entry] = useIntersection({ threshold: 0.5 });
 * const isVisible = entry?.isIntersecting ?? false;
 */

import { useEffect, useRef, useState } from "react";

export function useIntersection<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit,
): [React.RefObject<T>, IntersectionObserverEntry | null] {
  const ref = useRef<T>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([first]) => setEntry(first ?? null),
      options,
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, entry];
}

import type React from "react";
