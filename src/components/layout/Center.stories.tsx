import type { Meta, StoryObj } from "@storybook/react-vite";
import { Center } from "./Center";
import { Spinner } from "../feedback/Spinner";

const meta: Meta<typeof Center> = {
  title: "Components/Layout/Center",
  component: Center,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Center>;

export const Default: Story = {
  render: () => (
    <Center className="h-48 w-full rounded-lg border border-dashed border-border">
      <span className="text-sm text-foreground/60">Centered content</span>
    </Center>
  ),
};

export const WithSpinner: Story = {
  render: () => (
    <Center className="h-48 w-full rounded-lg border border-border bg-bg-secondary">
      <Spinner size="lg" />
    </Center>
  ),
};

export const WithText: Story = {
  render: () => (
    <Center className="h-32 rounded-lg bg-brand-orange/10 border border-brand-orange/30">
      <div className="text-center">
        <p className="font-semibold text-brand-orange">No results found</p>
        <p className="text-xs text-foreground/50 mt-1">Try adjusting your filters</p>
      </div>
    </Center>
  ),
};
