import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Navigation/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant:  { control: "select", options: ["default", "subtle", "brand", "underline", "nav"] },
    external: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: { children: "Read the documentation", href: "#" },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Link href="#" variant="default">Default link</Link>
      <Link href="#" variant="subtle">Subtle link</Link>
      <Link href="#" variant="brand">Brand link</Link>
      <Link href="#" variant="underline">Underline link</Link>
      <Link href="#" variant="nav">Nav link</Link>
    </div>
  ),
};

export const External: Story = {
  args: { children: "GitHub", href: "https://github.com", external: true },
};
