import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stat } from "./Stat";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const meta: Meta<typeof Stat> = {
  title: "Components/Data Display/Stat",
  component: Stat,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: { label: "Total Revenue", value: "$48,295", delta: 12.4, deltaLabel: "vs last month" },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[480px]">
      <Stat label="Total Revenue" value="$48,295" delta={12.4} icon={<DollarSign className="size-5" />} />
      <Stat label="Active Users"  value="1,204"   delta={-3.1} deltaLabel="vs last week" icon={<Users className="size-5" />} />
      <Stat label="Orders"        value="342"      delta={0}    deltaLabel="no change" icon={<ShoppingCart className="size-5" />} />
      <Stat label="Conversion"    value="3.6%"     delta={8.2}  icon={<TrendingUp className="size-5" />} />
    </div>
  ),
};
