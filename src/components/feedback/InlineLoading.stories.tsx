import type { Meta, StoryObj } from "@storybook/react-vite";
import { InlineLoading } from "./InlineLoading";

const meta: Meta<typeof InlineLoading> = {
  title: "Components/Feedback/InlineLoading",
  component: InlineLoading,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["active", "inactive", "finished", "error"],
    },
    description: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InlineLoading>;

export const Default: Story = {
  args: {
    status: "active",
    description: "Loading…",
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InlineLoading status="active"   description="Saving changes…" />
      <InlineLoading status="finished" description="Changes saved!" />
      <InlineLoading status="error"    description="Failed to save. Please try again." />
      <InlineLoading status="inactive" description="Ready" />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="rounded-lg border border-border p-4 flex items-center justify-between">
      <span className="text-sm text-foreground/80">Auto-save</span>
      <InlineLoading status="finished" description="Saved just now" />
    </div>
  ),
};
