/**
 * useBreakpoint — returns the current active Opticule breakpoint.
 * Also provides convenience boolean flags for each breakpoint.
 *
 * Breakpoints (from tokens):
 *   xs:  520px
 *   sm:  640px
 *   md:  768px
 *   md2: 900px (sidebar breakpoint)
 *   lg:  1024px
 *   xl:  1280px
 *   2xl: 1536px
 *
 * @example
 * const { isMd, isLg, breakpoint } = useBreakpoint();
 */

import { useMediaQuery } from "./useMediaQuery";
import { mediaQueries } from "../tokens/primitive/breakpoints";

export interface UseBreakpointReturn {
  breakpoint: "xs" | "sm" | "md" | "md2" | "lg" | "xl" | "2xl" | "base";
  isXs:  boolean;
  isSm:  boolean;
  isMd:  boolean;
  isMd2: boolean;
  isLg:  boolean;
  isXl:  boolean;
  is2xl: boolean;
  /** True if viewport is below the md breakpoint (mobile) */
  isMobile: boolean;
  /** True if viewport is at or above the md2 breakpoint (desktop layout) */
  isDesktop: boolean;
}

export function useBreakpoint(): UseBreakpointReturn {
  const isXs  = useMediaQuery(mediaQueries.xs);
  const isSm  = useMediaQuery(mediaQueries.sm);
  const isMd  = useMediaQuery(mediaQueries.md);
  const isMd2 = useMediaQuery(mediaQueries.md2);
  const isLg  = useMediaQuery(mediaQueries.lg);
  const isXl  = useMediaQuery(mediaQueries.xl);
  const is2xl = useMediaQuery(mediaQueries["2xl"]);

  const breakpoint = is2xl
    ? "2xl"
    : isXl
    ? "xl"
    : isLg
    ? "lg"
    : isMd2
    ? "md2"
    : isMd
    ? "md"
    : isSm
    ? "sm"
    : isXs
    ? "xs"
    : "base";

  return {
    breakpoint,
    isXs,
    isSm,
    isMd,
    isMd2,
    isLg,
    isXl,
    is2xl,
    isMobile:  !isMd,
    isDesktop: isMd2,
  };
}
