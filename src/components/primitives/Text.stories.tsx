import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Primitives/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size:   { control: "select", options: ["2xs", "xs", "sm", "md", "lg", "xl"] },
    weight: { control: "select", options: ["light", "regular", "medium", "bold"] },
    color:  { control: "select", options: ["primary", "secondary", "tertiary", "error", "brand", "success", "warning", "inherit"] },
    truncate: { control: "boolean" },
    italic:   { control: "boolean" },
    underline: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "The quick brown fox jumps over the lazy dog.", size: "md" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["2xs", "xs", "sm", "md", "lg", "xl"] as const).map((s) => (
        <Text key={s} size={s}>Size {s} — The quick brown fox</Text>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["light", "regular", "medium", "bold"] as const).map((w) => (
        <Text key={w} weight={w}>Weight {w} — The quick brown fox</Text>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text color="primary">Primary text</Text>
      <Text color="secondary">Secondary text</Text>
      <Text color="tertiary">Tertiary text</Text>
      <Text color="brand">Brand text (orange)</Text>
      <Text color="success">Success text (purple)</Text>
      <Text color="error">Error text (folly)</Text>
    </div>
  ),
};
