import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Inputs/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["vertical", "horizontal"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <RadioGroupItem value="default" label="Default" description="System default spacing" />
      <RadioGroupItem value="comfortable" label="Comfortable" description="More breathing room" />
      <RadioGroupItem value="compact" label="Compact" description="Tight spacing for power users" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="light" orientation="horizontal">
      <RadioGroupItem value="light" label="Light" />
      <RadioGroupItem value="dark" label="Dark" />
      <RadioGroupItem value="system" label="System" />
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="a">
        <RadioGroupItem value="a" label="Small radio" size="sm" />
        <RadioGroupItem value="b" label="Medium radio" size="md" />
        <RadioGroupItem value="c" label="Large radio" size="lg" />
      </RadioGroup>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <RadioGroup defaultValue="b">
      <RadioGroupItem value="a" label="Normal option" />
      <RadioGroupItem value="b" label="Selected option" />
      <RadioGroupItem value="c" label="Disabled option" disabled />
    </RadioGroup>
  ),
};
