import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Inputs/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    showValue: { control: "boolean" },
    disabled: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { defaultValue: [50], min: 0, max: 100 },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithValueLabel: Story = {
  args: { defaultValue: [40], showValue: true, formatValue: (v) => `${v}%` },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Range: Story = {
  args: { defaultValue: [20, 80], min: 0, max: 100, showValue: true },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Slider size="sm" defaultValue={[30]} />
      <Slider size="md" defaultValue={[50]} />
      <Slider size="lg" defaultValue={[70]} />
    </div>
  ),
};
