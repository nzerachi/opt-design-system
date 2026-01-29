import { useState, useEffect } from "react";

export function ThemeToggle() {
  // 1. Initialize as 'false' for instant load (avoids hydration mismatch blocking).
  // Because your icon uses CSS variables, it will LOOK correct immediately,
  // even if this variable is technically 'false' for a split second.
  const [isDark, setIsDark] = useState(false);

  // 2. Sync logic AFTER the website loads (Client-side only)
  useEffect(() => {
    // This runs silently after the DOM is ready.
    const isActuallyDark = document.documentElement.classList.contains("dark");
    setIsDark(isActuallyDark);
  }, []);

  const toggleTheme = () => {
    // 3. Reliable Toggle: Check the DOM directly at the moment of the click.
    // This ensures that even if React state was lagging, the toggle works perfectly.
    const currentStatus = document.documentElement.classList.contains("dark");
    const enableDark = !currentStatus; // If currently dark, we want light (and vice versa)

    setIsDark(enableDark);

    if (enableDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="shrink-0 hover:opacity-70 transition-opacity rounded-full"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <ThemeIcon />
    </button>
  );
}

function ThemeIcon() {
  return (
    <div className="relative size-[30px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 35 35"
      >
        <g>
          <circle cx="17.5" cy="17.5" fill="none" r="17.5" />
          <circle
            cx="17.5"
            cy="17.5"
            r="16"
            stroke="#808080"
            strokeWidth="2"
            strokeOpacity="0.3"
          />
        </g>
      </svg>
      <div className="absolute inset-[14.29%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 25 25"
        >
          <g
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line
              opacity="0.9"
              x1="20.9546"
              x2="18.5873"
              y1="3.98396"
              y2="6.35123"
            />
            <line opacity="0.8" x1="12.5" x2="12.5" y1="0.5" y2="3.5" />
            <line
              opacity="0.7"
              x1="6.4135"
              x2="4.04623"
              y1="6.35156"
              y2="3.98429"
            />
            <line opacity="0.6" x1="3.5" x2="0.5" y1="12.5" y2="12.5" />
            <line
              opacity="0.5"
              x1="6.35156"
              x2="3.98429"
              y1="18.5872"
              y2="20.9545"
            />
            <line opacity="0.4" x1="12.5" x2="12.5" y1="21.5" y2="24.5" />
            <line
              opacity="0.3"
              x1="21.0165"
              x2="18.6493"
              y1="20.9551"
              y2="18.5878"
            />
            <line opacity="0.2" x1="24.5" x2="21.5" y1="12.5" y2="12.5" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[37.14%]">
        <svg
          className="block size-full"
          fill="hsl(var(--foreground))"
          preserveAspectRatio="none"
          viewBox="0 0 9 9"
        >
          <path d="M4.5 0C5.3542 0 6.15278 0.237956 6.83301 0.651367C8.13212 1.44057 9 2.86889 9 4.5C9 6.98528 6.98528 9 4.5 9C2.86889 9 1.44057 8.13212 0.651367 6.83301C0.237956 6.15278 0 5.3542 0 4.5C0 2.01472 2.01472 0 4.5 0ZM2.02539 6.97461C2.65877 7.60798 3.5335 8 4.5 8C6.433 8 8 6.433 8 4.5C8 3.5335 7.60798 2.65877 6.97461 2.02539L2.02539 6.97461Z" />
        </svg>
      </div>
    </div>
  );
}
