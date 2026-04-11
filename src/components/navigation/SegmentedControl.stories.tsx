import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SegmentedControl } from "./SegmentedControl";
import { LayoutList, LayoutGrid, Kanban } from "lucide-react";

const meta: Meta<typeof SegmentedControl> = {
  title: "Components/Navigation/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  argTypes: {
    size:      { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState("list");
    return (
      <SegmentedControl
        value={v}
        onChange={setV}
        options={[
          { label: "List",   value: "list" },
          { label: "Grid",   value: "grid" },
          { label: "Kanban", value: "kanban" },
        ]}
      />
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [v, setV] = useState("list");
    return (
      <SegmentedControl
        value={v}
        onChange={setV}
        options={[
          { label: <span className="flex items-center gap-1.5"><LayoutList className="size-4" />List</span>, value: "list" },
          { label: <span className="flex items-center gap-1.5"><LayoutGrid className="size-4" />Grid</span>, value: "grid" },
          { label: <span className="flex items-center gap-1.5"><Kanban className="size-4" />Kanban</span>, value: "kanban" },
        ]}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const opts = [{ label: "A", value: "a" }, { label: "B", value: "b" }, { label: "C", value: "c" }];
    return (
      <div className="flex flex-col gap-4">
        <SegmentedControl size="sm" value="a" onChange={() => {}} options={opts} />
        <SegmentedControl size="md" value="a" onChange={() => {}} options={opts} />
        <SegmentedControl size="lg" value="a" onChange={() => {}} options={opts} />
      </div>
    );
  },
};
