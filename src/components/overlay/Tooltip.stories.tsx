import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, TooltipProvider } from "./Tooltip";
import { Button } from "../inputs/Button";
import { IconButton } from "../inputs/IconButton";
import { Copy } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [(Story) => <TooltipProvider><Story /></TooltipProvider>],
  argTypes: {
    side:          { control: "select", options: ["top", "right", "bottom", "left"] },
    align:         { control: "select", options: ["start", "center", "end"] },
    delayDuration: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-8 items-center justify-center p-16">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} content={`${side} tooltip`} side={side}>
          <Button variant="outline" size="sm">{side}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const OnIcon: Story = {
  render: () => (
    <Tooltip content="Copy to clipboard">
      <IconButton label="Copy" icon={<Copy className="size-4" />} variant="ghost" />
    </Tooltip>
  ),
};

export const InstantOpen: Story = {
  render: () => (
    <Tooltip content="No delay" delayDuration={0}>
      <Button variant="outline">Instant tooltip</Button>
    </Tooltip>
  ),
};
