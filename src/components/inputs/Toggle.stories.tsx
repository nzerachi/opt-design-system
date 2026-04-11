import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle, ToggleGroup, ToggleGroupItem } from "./Toggle";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Inputs/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "outline", "ghost"] },
    size:    { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { "aria-label": "Toggle bold", children: <Bold className="size-4" /> },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Toggle variant="default" aria-label="Bold"><Bold className="size-4" /></Toggle>
      <Toggle variant="outline" aria-label="Italic"><Italic className="size-4" /></Toggle>
      <Toggle variant="ghost" aria-label="Underline"><Underline className="size-4" /></Toggle>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const MultiSelect: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="size-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="size-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
};
