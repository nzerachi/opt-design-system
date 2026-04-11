import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "Components/Inputs/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    size:     { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    min:      { control: "number" },
    max:      { control: "number" },
    step:     { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: { label: "Quantity", defaultValue: 1, min: 1, max: 99 },
  decorators: [(Story) => <div className="w-64"><Story /></div>],
};

export const WithSteps: Story = {
  args: { label: "Volume (%)", defaultValue: 50, min: 0, max: 100, step: 5, showValue: true },
  decorators: [(Story) => <div className="w-64"><Story /></div>],
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <NumberInput size="sm" label="Small" defaultValue={0} />
      <NumberInput size="md" label="Medium" defaultValue={0} />
      <NumberInput size="lg" label="Large" defaultValue={0} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <NumberInput label="Normal" defaultValue={5} />
      <NumberInput label="With error" defaultValue={5} error="Value out of range" />
      <NumberInput label="Disabled" defaultValue={5} disabled />
    </div>
  ),
};
