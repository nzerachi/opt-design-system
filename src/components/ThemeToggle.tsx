import { useTheme } from "../tokens/ThemeProvider";

export function ThemeToggle() {
  const { resolvedTheme, toggleColorMode } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleColorMode}
      className="shrink-0 hover:opacity-70 transition-opacity rounded-full"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <ThemeIcon isDark={isDark} />
    </button>
  );
}

function ThemeIcon({ isDark }: { isDark: boolean }) {
  return (
    <div className="relative size-[30px]">
      {/* Outer ring */}
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 35 35"
      >
        <circle cx="17.5" cy="17.5" fill="none" r="17.5" />
        <circle
          cx="17.5"
          cy="17.5"
          r="16"
          stroke="#808080"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
      </svg>

      {isDark ? (
        /* Moon icon — shown in dark mode (click to go light) */
        <div className="absolute inset-[14.29%] flex items-center justify-center">
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 25 25"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      ) : (
        /* Sun icon — shown in light mode (click to go dark) */
        <div className="absolute inset-[14.29%] flex items-center justify-center">
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 25 25"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12.5" cy="12.5" r="4" />
            <line x1="12.5" y1="2" x2="12.5" y2="5" />
            <line x1="12.5" y1="20" x2="12.5" y2="23" />
            <line x1="2" y1="12.5" x2="5" y2="12.5" />
            <line x1="20" y1="12.5" x2="23" y2="12.5" />
            <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
            <line x1="17.95" y1="17.95" x2="20.07" y2="20.07" />
            <line x1="4.93" y1="20.07" x2="7.05" y2="17.95" />
            <line x1="17.95" y1="7.05" x2="20.07" y2="4.93" />
          </svg>
        </div>
      )}
    </div>
  );
}
