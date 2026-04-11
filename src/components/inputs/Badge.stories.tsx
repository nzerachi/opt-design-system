import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Inputs/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "gradient", "success", "warning", "error", "info", "outline", "neutral"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    dot: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Badge", variant: "default", size: "md" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const DotVariant: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2"><Badge variant="success" dot /> Online</div>
      <div className="flex items-center gap-2"><Badge variant="warning" dot /> Away</div>
      <div className="flex items-center gap-2"><Badge variant="error" dot /> Offline</div>
      <div className="flex items-center gap-2"><Badge variant="neutral" dot /> Unknown</div>
    </div>
  ),
};
