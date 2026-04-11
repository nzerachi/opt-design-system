import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Primitives/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    as: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: { children: "Box component", className: "p-4 border border-border rounded-lg" },
};

export const AsButton: Story = {
  render: () => (
    <Box as="button" className="px-4 py-2 bg-brand-orange text-white rounded-lg font-medium">
      Polymorphic as button
    </Box>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" className="p-6 border border-border rounded-lg">
      <Box as="h2" className="text-xl font-bold mb-2">Section heading</Box>
      <Box as="p" className="text-foreground/75">Section content with semantic HTML.</Box>
    </Box>
  ),
};
