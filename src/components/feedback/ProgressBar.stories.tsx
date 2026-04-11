import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/Feedback/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value:        { control: { type: "range", min: 0, max: 100 } },
    color:        { control: "select", options: ["brand", "success", "warning", "error", "info", "neutral"] },
    size:         { control: "select", options: ["xs", "sm", "md", "lg"] },
    showValue:    { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: { value: 65, label: "Uploading…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithValue: Story = {
  args: { value: 72, showValue: true, label: "Storage used" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Indeterminate: Story = {
  args: { indeterminate: true, label: "Loading…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      {(["brand", "success", "warning", "error", "info"] as const).map((c) => (
        <ProgressBar key={c} color={c} value={65} label={c} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <ProgressBar size="xs" value={40} label="xs" />
      <ProgressBar size="sm" value={55} label="sm" />
      <ProgressBar size="md" value={70} label="md" />
      <ProgressBar size="lg" value={85} label="lg" />
    </div>
  ),
};
