import type { Meta, StoryObj } from "@storybook/react-vite";
import { Highlight } from "./Highlight";

const meta: Meta<typeof Highlight> = {
  title: "Components/Typography/Highlight",
  component: Highlight,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["default", "brand", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  render: () => (
    <p className="text-sm text-foreground leading-8">
      This is a sentence with a <Highlight>default highlight</Highlight> for general emphasis.
    </p>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-3 text-sm text-foreground leading-8">
      <p>Default: <Highlight color="default">default highlight</Highlight></p>
      <p>Brand: <Highlight color="brand">brand orange highlight</Highlight></p>
      <p>Success: <Highlight color="success">success purple highlight</Highlight></p>
      <p>Warning: <Highlight color="warning">warning highlight</Highlight></p>
      <p>Error: <Highlight color="error">error / danger highlight</Highlight></p>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="max-w-prose text-sm text-foreground leading-8">
      <p>
        The <Highlight color="brand">ThemeProvider</Highlight> wraps your application and provides
        access to the <Highlight>design token system</Highlight>.
        Import components from <Highlight color="success">@opticule/ds</Highlight> and wrap your
        app to enable <Highlight color="error">zero-config theming</Highlight>.
      </p>
    </div>
  ),
};
