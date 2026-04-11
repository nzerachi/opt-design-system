import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const options = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
];

const meta: Meta<typeof Select> = {
  title: "Components/Inputs/Select",
  component: Select,
  tags: ["autodocs"],
  args: { options, label: "Framework" },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: { placeholder: "Select a framework" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Select size="sm" options={options} label="Small" placeholder="Select" />
      <Select size="md" options={options} label="Medium" placeholder="Select" />
      <Select size="lg" options={options} label="Large" placeholder="Select" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Select options={options} label="Default" placeholder="Select" />
      <Select options={options} label="With error" error="Please select an option" />
      <Select options={options} label="Disabled" disabled placeholder="Select" />
      <Select options={options} label="Required" required placeholder="Select" />
    </div>
  ),
};
