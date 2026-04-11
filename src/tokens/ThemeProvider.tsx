/**
 * ThemeProvider
 *
 * Injects CSS custom properties into the document root and manages
 * theme switching (light / dark / high-contrast / system).
 *
 * Features:
 * - Reads system preference (prefers-color-scheme) for "system" mode
 * - Reads high-contrast preference (prefers-contrast: more) automatically
 * - Persists theme choice to localStorage
 * - Applies .dark / .high-contrast class to <html>
 * - Exposes useTheme() hook for reading/setting theme
 * - SSR-safe (no unguarded window/document access)
 * - Respects prefers-reduced-motion (no theme transitions when motion is reduced)
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { lightTheme } from "./themes/light";
import { darkTheme } from "./themes/dark";
import { highContrastTheme } from "./themes/high-contrast";
import type { Theme } from "./themes";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ThemeContextValue {
  /** The currently active theme setting */
  theme: Theme;
  /** The resolved theme (what's actually applied — never "system") */
  resolvedTheme: "light" | "dark" | "high-contrast";
  /** Whether the system prefers dark mode */
  systemPrefersDark: boolean;
  /** Whether the system prefers high contrast */
  systemPrefersHighContrast: boolean;
  /** Set the theme preference */
  setTheme: (theme: Theme) => void;
  /** Toggle between light and dark */
  toggleColorMode: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
  /** Default theme on first visit. Defaults to "system". */
  defaultTheme?: Theme;
  /** localStorage key for theme persistence */
  storageKey?: string;
  /** Custom attribute to apply on <html>. Defaults to "class". */
  attribute?: "class" | "data-theme";
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ---------------------------------------------------------------------------
// CSS variable injection
// ---------------------------------------------------------------------------

function applyThemeVars(
  vars: Record<string, string>,
  selector: string = ":root",
): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

function getThemeVars(
  resolved: "light" | "dark" | "high-contrast",
): Record<string, string> {
  switch (resolved) {
    case "dark":
      return darkTheme as Record<string, string>;
    case "high-contrast":
      return highContrastTheme as Record<string, string>;
    default:
      return lightTheme as Record<string, string>;
  }
}

// ---------------------------------------------------------------------------
// ThemeProvider component
// ---------------------------------------------------------------------------

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "opticule-theme",
  attribute = "class",
}: ThemeProviderProps) {
  // Read stored theme preference
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored) return stored;
    }
    return defaultTheme;
  });

  // Detect system preferences
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [systemPrefersHighContrast, setSystemPrefersHighContrast] =
    useState(() => {
      if (typeof window === "undefined") return false;
      return window.matchMedia("(prefers-contrast: more)").matches;
    });

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const darkMQ = window.matchMedia("(prefers-color-scheme: dark)");
    const contrastMQ = window.matchMedia("(prefers-contrast: more)");

    const handleDarkChange = (e: MediaQueryListEvent) =>
      setSystemPrefersDark(e.matches);
    const handleContrastChange = (e: MediaQueryListEvent) =>
      setSystemPrefersHighContrast(e.matches);

    darkMQ.addEventListener("change", handleDarkChange);
    contrastMQ.addEventListener("change", handleContrastChange);

    return () => {
      darkMQ.removeEventListener("change", handleDarkChange);
      contrastMQ.removeEventListener("change", handleContrastChange);
    };
  }, []);

  // Resolve theme to a concrete value
  const resolvedTheme = useMemo((): "light" | "dark" | "high-contrast" => {
    // High contrast wins if system requests it (regardless of other settings)
    if (systemPrefersHighContrast && theme !== "light" && theme !== "dark") {
      return "high-contrast";
    }
    if (theme === "high-contrast") return "high-contrast";
    if (theme === "system") return systemPrefersDark ? "dark" : "light";
    return theme as "light" | "dark";
  }, [theme, systemPrefersDark, systemPrefersHighContrast]);

  // Apply theme to DOM and inject CSS variables
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    // Remove all theme classes/attributes
    root.classList.remove("light", "dark", "high-contrast");

    if (attribute === "class") {
      if (resolvedTheme !== "light") {
        root.classList.add(resolvedTheme);
      }
    } else {
      root.setAttribute("data-theme", resolvedTheme);
    }

    // Inject CSS variables for the resolved theme
    const vars = getThemeVars(resolvedTheme);
    for (const [key, value] of Object.entries(vars)) {
      root.style.setProperty(key, value);
    }
  }, [resolvedTheme, attribute]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(storageKey, newTheme);
      }
    },
    [storageKey],
  );

  const toggleColorMode = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      systemPrefersDark,
      systemPrefersHighContrast,
      setTheme,
      toggleColorMode,
    }),
    [
      theme,
      resolvedTheme,
      systemPrefersDark,
      systemPrefersHighContrast,
      setTheme,
      toggleColorMode,
    ],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// useTheme hook
// ---------------------------------------------------------------------------

/**
 * Access the current theme and theme controls.
 *
 * @example
 * const { theme, resolvedTheme, setTheme, toggleColorMode } = useTheme();
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error(
      "useTheme must be used within a ThemeProvider. " +
        "Wrap your app with <ThemeProvider>.",
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Theme initialization script (inject into <head> before React hydrates)
// Prevents flash of wrong theme (FOWT)
// ---------------------------------------------------------------------------

export const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('opticule-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var prefersContrast = window.matchMedia('(prefers-contrast: more)').matches;
    var resolved = stored === 'dark' ? 'dark'
      : stored === 'light' ? 'light'
      : stored === 'high-contrast' ? 'high-contrast'
      : prefersContrast ? 'high-contrast'
      : prefersDark ? 'dark'
      : 'light';
    if (resolved !== 'light') {
      document.documentElement.classList.add(resolved);
    }
  } catch(e) {}
})();
`;
