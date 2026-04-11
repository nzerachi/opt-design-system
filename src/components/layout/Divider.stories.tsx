import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    variant:     { control: "select", options: ["solid", "dashed", "dotted"] },
    label:       { control: "text" },
    labelPosition: { control: "select", options: ["left", "center", "right"] },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithLabel: Story = {
  args: { label: "or" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const LabelPositions: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Divider label="left" labelPosition="left" />
      <Divider label="center" labelPosition="center" />
      <Divider label="right" labelPosition="right" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-12">
      <span className="text-sm">Item 1</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Item 2</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Item 3</span>
    </div>
  ),
};
