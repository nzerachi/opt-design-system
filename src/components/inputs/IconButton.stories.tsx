import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Settings, Trash2, Plus, Search, X, Heart } from "lucide-react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/Inputs/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "outline", "ghost", "text", "destructive"] },
    size:    { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    rounded: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    icon:    { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: () => <IconButton label="Settings" icon={<Settings className="size-4" />} />,
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <IconButton label="Settings" icon={<Settings className="size-4" />} variant="primary" />
      <IconButton label="Settings" icon={<Settings className="size-4" />} variant="secondary" />
      <IconButton label="Settings" icon={<Settings className="size-4" />} variant="outline" />
      <IconButton label="Settings" icon={<Settings className="size-4" />} variant="ghost" />
      <IconButton label="Delete" icon={<Trash2 className="size-4" />} variant="destructive" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <IconButton label="Add" icon={<Plus className="size-3" />} size="xs" variant="outline" />
      <IconButton label="Add" icon={<Plus className="size-4" />} size="sm" variant="outline" />
      <IconButton label="Add" icon={<Plus className="size-4" />} size="md" variant="outline" />
      <IconButton label="Add" icon={<Plus className="size-5" />} size="lg" variant="outline" />
      <IconButton label="Add" icon={<Plus className="size-5" />} size="xl" variant="outline" />
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-3">
      <IconButton label="Search" icon={<Search className="size-4" />} rounded />
      <IconButton label="Close" icon={<X className="size-4" />} rounded variant="ghost" />
      <IconButton label="Like" icon={<Heart className="size-4" />} rounded variant="secondary" />
    </div>
  ),
};
