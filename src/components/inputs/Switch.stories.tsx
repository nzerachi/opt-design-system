import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    labelPlacement: { control: "select", options: ["left", "right"] },
    disabled: { control: "boolean" },
    label: { control: "text" },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { label: "Enable notifications" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" />
      <Switch size="lg" label="Large" />
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    label: "Dark mode",
    description: "Switch to a darker interface.",
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch label="Unchecked" />
      <Switch label="Checked" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled checked" defaultChecked disabled />
    </div>
  ),
};

export const LabelLeft: Story = {
  args: { label: "Label on the left", labelPlacement: "left" },
};
