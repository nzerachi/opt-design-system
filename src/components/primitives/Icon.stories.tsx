import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import {
  Search, Bell, Settings, Home, User, Star, Heart, Download,
  ArrowRight, ChevronDown, Check, X,
} from "lucide-react";

const meta: Meta<typeof Icon> = {
  title: "Components/Primitives/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size:  { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { icon: Search, size: "md" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon icon={Bell} size={size} />
          <span className="text-xs text-foreground/50">{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const Gallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {[Search, Bell, Settings, Home, User, Star, Heart, Download, ArrowRight, ChevronDown, Check, X].map(
        (icon, i) => (
          <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border w-16">
            <Icon icon={icon} size="md" />
            <span className="text-[10px] text-foreground/50 text-center">{icon.displayName}</span>
          </div>
        )
      )}
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon icon={Bell} size="md" label="Notifications" />
      <Icon icon={Settings} size="md" label="Settings" />
      <Icon icon={User} size="md" label="Profile" />
    </div>
  ),
};
