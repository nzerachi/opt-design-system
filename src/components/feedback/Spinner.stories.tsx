import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size:  { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    color: { control: "select", options: ["brand", "white", "muted", "success", "error"] },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: "md", color: "brand" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      <Spinner color="brand" />
      <Spinner color="muted" />
      <Spinner color="success" />
      <Spinner color="error" />
      <div className="bg-foreground p-3 rounded">
        <Spinner color="white" />
      </div>
    </div>
  ),
};
