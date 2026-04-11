import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Download, ArrowRight, Trash2 } from "lucide-react";
import { Button, ButtonGroup } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Inputs/Button",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "text", "gradient", "destructive", "ghost"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    loading:   { control: "boolean" },
    disabled:  { control: "boolean" },
    fullWidth: { control: "boolean" },
    leftIcon:  { control: false },
    rightIcon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button", variant: "primary", size: "md" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="text">Text</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button leftIcon={<Download className="size-4" />}>Download</Button>
      <Button rightIcon={<ArrowRight className="size-4" />}>Continue</Button>
      <Button variant="destructive" leftIcon={<Trash2 className="size-4" />}>Delete</Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button loading>Loading…</Button>
      <Button variant="secondary" loading>Saving…</Button>
      <Button variant="outline" loading>Processing</Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-3">
      <Button fullWidth>Full Width Primary</Button>
      <Button fullWidth variant="outline">Full Width Outline</Button>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <ButtonGroup>
        <Button variant="outline">Copy</Button>
        <Button variant="outline">Cut</Button>
        <Button variant="outline">Paste</Button>
      </ButtonGroup>
      <ButtonGroup attached>
        <Button variant="secondary">Previous</Button>
        <Button variant="secondary">Next</Button>
      </ButtonGroup>
    </div>
  ),
};
