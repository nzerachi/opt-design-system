import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyButton } from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
  title: "Components/Inputs/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  argTypes: {
    variant:   { control: "select", options: ["default", "outline", "ghost"] },
    size:      { control: "select", options: ["xs", "sm", "md", "lg"] },
    showLabel: { control: "boolean" },
    timeout:   { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: { value: "npm install @opticule/ds" },
};

export const WithLabel: Story = {
  args: { value: "npm install @opticule/ds", showLabel: true, label: "Copy", copiedLabel: "Copied!" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <CopyButton variant="default"  value="test" showLabel />
      <CopyButton variant="outline"  value="test" showLabel />
      <CopyButton variant="ghost"    value="test" showLabel />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <CopyButton size="xs" value="test" />
      <CopyButton size="sm" value="test" />
      <CopyButton size="md" value="test" />
      <CopyButton size="lg" value="test" />
    </div>
  ),
};

export const InlineWithCode: Story = {
  render: () => (
    <div className="flex items-center gap-2 bg-muted-light/30 rounded-lg px-3 py-2 w-fit">
      <code className="text-sm font-mono text-brand-orange">npm install @opticule/ds</code>
      <CopyButton value="npm install @opticule/ds" variant="ghost" size="sm" />
    </div>
  ),
};
