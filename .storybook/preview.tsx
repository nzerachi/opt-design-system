// @ts-expect-error — CSS side-effect import, no type declarations needed
import "../src/globals.css";
import type { Preview, Decorator } from "@storybook/react-vite";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "../src/tokens/ThemeProvider";
import opticuleTheme from "./opticule-theme";

// ---------------------------------------------------------------------------
// ThemeSync — watches toolbar globals and pushes changes into ThemeProvider
// ---------------------------------------------------------------------------

function ThemeSync({
  theme,
  children,
}: {
  theme: "light" | "dark" | "high-contrast";
  children: React.ReactNode;
}) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(theme);
  }, [theme, setTheme]);

  return <div className="bg-background text-foreground min-h-full">{children}</div>;
}

// ---------------------------------------------------------------------------
// Global decorator — wrap every story in ThemeProvider + ThemeSync
// ---------------------------------------------------------------------------

const withThemeProvider: Decorator = (Story, context) => {
  const theme = (context.globals.theme ?? "light") as "light" | "dark" | "high-contrast";

  return (
    <ThemeProvider defaultTheme={theme} storageKey="sb-opticule-theme">
      <ThemeSync theme={theme}>
        <Story />
      </ThemeSync>
    </ThemeProvider>
  );
};

// ---------------------------------------------------------------------------
// Preview configuration
// ---------------------------------------------------------------------------

const preview: Preview = {
  decorators: [withThemeProvider],

  globalTypes: {
    theme: {
      description: "Opticule color theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light",         title: "Light",         icon: "sun" },
          { value: "dark",          title: "Dark",          icon: "moon" },
          { value: "high-contrast", title: "High Contrast", icon: "accessibility" },
        ],
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    layout: "centered",

    docs: {
      theme: opticuleTheme,
      toc:   true,
    },

    backgrounds: {
      disable: true,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
      sort: "requiredFirst",
    },

    a11y: {
      test: "todo",
    },

    options: {
      storySort: {
        order: [
          "Getting Started",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Shadows", "Motion", "Elevation", "Breakpoints"],
          "Components",
          [
            "Primitives",
            "Layout",
            "Inputs",
            "Data Display",
            "Feedback",
            "Overlay",
            "Navigation",
            "Forms",
            "Typography",
            "Media",
          ],
          "Patterns",
          "Hooks",
          "Utilities",
        ],
      },
    },
  },
};

export default preview;
