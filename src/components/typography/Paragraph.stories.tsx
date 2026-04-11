import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paragraph } from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    size:  { control: "select", options: ["sm", "md", "lg"] },
    lead:  { control: "boolean" },
    muted: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog. Design systems help teams build better products faster by providing a shared language, reusable components, and clear guidelines.",
    size: "md",
  },
};

export const Lead: Story = {
  render: () => (
    <Paragraph lead>
      This is a lead paragraph — slightly larger and lighter. Used for introductory content, article summaries, and hero descriptions.
    </Paragraph>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-prose">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Paragraph key={size} size={size}>
          <span className="font-medium text-brand-orange">[{size}]</span>{" "}
          The quick brown fox jumps over the lazy dog. A design system is a collection of reusable components guided by clear standards.
        </Paragraph>
      ))}
    </div>
  ),
};

export const Muted: Story = {
  render: () => (
    <div className="flex flex-col gap-3 max-w-prose">
      <Paragraph>Regular paragraph with full foreground color.</Paragraph>
      <Paragraph muted>Muted paragraph with reduced opacity — useful for secondary descriptions and captions.</Paragraph>
    </div>
  ),
};
