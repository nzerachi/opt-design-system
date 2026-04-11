import { addons } from "storybook/manager-api";
import opticuleTheme from "./opticule-theme";

addons.setConfig({
  theme: opticuleTheme,
  sidebar: {
    showRoots: true,
  },
});
