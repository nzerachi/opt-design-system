import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size:   { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    status: { control: "select", options: [undefined, "online", "offline", "busy", "away"] },
    shape:  { control: "select", options: ["circle", "square"] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { name: "Alice Nguyen", size: "md" },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=3",
    name: "Alice Nguyen",
    size: "lg",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((s) => (
        <Avatar key={s} name="Alice N" size={s} />
      ))}
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar name="Online" status="online" />
      <Avatar name="Away" status="away" />
      <Avatar name="Busy" status="busy" />
      <Avatar name="Offline" status="offline" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup max={4}>
        {["Alice", "Bob", "Carol", "Dave", "Eve", "Frank"].map((n) => (
          <Avatar key={n} name={n} />
        ))}
      </AvatarGroup>
    </div>
  ),
};
