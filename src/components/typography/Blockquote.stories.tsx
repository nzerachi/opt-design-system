import type { Meta, StoryObj } from "@storybook/react-vite";
import { Blockquote } from "./Blockquote";

const meta: Meta<typeof Blockquote> = {
  title: "Components/Typography/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
  argTypes: {
    cite: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children: "Design is not just what it looks like and feels like. Design is how it works.",
    cite: "Steve Jobs",
  },
};

export const WithoutCite: Story = {
  args: {
    children: "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible.",
  },
};

export const InContext: Story = {
  render: () => (
    <div className="max-w-prose flex flex-col gap-4">
      <p className="text-sm text-foreground/80 leading-7">
        Design systems emerged from the need for consistency across large product teams. As products scaled, so did the challenges of maintaining visual and behavioral coherence.
      </p>
      <Blockquote cite="Brad Frost">
        A design system is the story of how an organization builds a digital product.
      </Blockquote>
      <p className="text-sm text-foreground/80 leading-7">
        This philosophy drives every decision in Opticule: components that enforce consistency while enabling flexibility.
      </p>
    </div>
  ),
};
