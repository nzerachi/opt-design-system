import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Inputs/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { onRemove: fn() },
  argTypes: {
    variant: { control: "select", options: ["filled", "outline", "subtle"] },
    color:   { control: "select", options: ["default", "brand", "success", "warning", "error", "info"] },
    size:    { control: "select", options: ["sm", "md", "lg"] },
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: "React", color: "brand" },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag color="default">Default</Tag>
      <Tag color="brand">Brand</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="error">Error</Tag>
      <Tag color="info">Info</Tag>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <div className="flex gap-2">
        <Tag variant="filled" color="brand">Filled</Tag>
        <Tag variant="outline" color="brand">Outline</Tag>
        <Tag variant="subtle" color="brand">Subtle</Tag>
      </div>
    </div>
  ),
};

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {["React", "TypeScript", "Tailwind", "Vite"].map((t) => (
        <Tag key={t} color="brand" onRemove={() => {}}>{t}</Tag>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Tag size="sm" color="brand">Small</Tag>
      <Tag size="md" color="brand">Medium</Tag>
      <Tag size="lg" color="brand">Large</Tag>
    </div>
  ),
};
