import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Data Display/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant:  { control: "select", options: ["default", "text", "circle", "rect"] },
    animated: { control: "boolean" },
    lines:    { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: { className: "h-4 w-48" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Skeleton className="h-4 w-full" />
      <Skeleton variant="circle" className="size-12" />
      <Skeleton variant="rect" className="h-32 w-full" />
      <Skeleton variant="text" lines={3} />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-72 rounded-lg border border-border p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circle" className="size-10" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton variant="text" lines={4} />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>
    </div>
  ),
};
