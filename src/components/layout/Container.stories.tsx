import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/Layout/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "full"],
    },
    centered: { control: "boolean" },
    padded:   { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <div className="rounded-lg border border-dashed border-border p-6">
        <p className="text-sm text-foreground/70">
          Default container (max-width: 1280px) centered with horizontal padding.
        </p>
      </div>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <Container key={size} size={size}>
          <div className="rounded-lg bg-muted-light/20 border border-border p-3 text-sm text-center">
            <span className="font-mono text-brand-orange">{size}</span>
          </div>
        </Container>
      ))}
    </div>
  ),
};

export const Narrow: Story = {
  args: { size: "sm", children: (
    <div className="rounded-lg border border-dashed border-border p-6 text-sm text-foreground/70">
      Narrow container for focused content like forms and auth pages.
    </div>
  )},
};
