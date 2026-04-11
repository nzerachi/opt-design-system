import { create } from "storybook/theming";

export default create({
  base: "dark",

  // Brand
  brandTitle: "Opticule Design System",
  brandUrl:   "https://opticule-ds.vercel.app",

  // Brand colors — pulled directly from Opticule primitive tokens
  colorPrimary:   "#ff8000", // brand-orange
  colorSecondary: "#cc33ff", // brand-purple

  // UI chrome
  appBg:           "#0a0a0a",
  appContentBg:    "#000000",
  appPreviewBg:    "#ffffff",
  appBorderColor:  "#1a1a1a",
  appBorderRadius: 8,

  // Text
  textColor:        "#ffffff",
  textInverseColor: "#000000",
  textMutedColor:   "#737373",

  // Toolbar
  barTextColor:    "#a3a3a3",
  barHoverColor:   "#ffffff",
  barSelectedColor: "#ff8000",
  barBg:           "#0a0a0a",

  // Inputs
  inputBg:          "#111111",
  inputBorder:      "#262626",
  inputTextColor:   "#ffffff",
  inputBorderRadius: 6,

  // Fonts
  fontBase:      '"Ubuntu", system-ui, -apple-system, sans-serif',
  fontCode:      '"Ubuntu Mono", "Fira Code", "Fira Mono", monospace',
});
