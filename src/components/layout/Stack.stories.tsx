import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, HStack, VStack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Components/Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    direction: { control: "select", options: ["row", "column", "row-reverse", "column-reverse"] },
    gap:       { control: "select", options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12] },
    align:     { control: "select", options: ["start", "center", "end", "stretch", "baseline"] },
    justify:   { control: "select", options: ["start", "center", "end", "between", "around", "evenly"] },
    wrap:      { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Box = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center w-16 h-12 rounded bg-brand-orange/20 text-brand-orange text-xs font-medium border border-brand-orange/30">
    {label}
  </div>
);

export const Horizontal: Story = {
  render: () => (
    <HStack gap={3}>
      <Box label="A" />
      <Box label="B" />
      <Box label="C" />
    </HStack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <VStack gap={3}>
      <Box label="A" />
      <Box label="B" />
      <Box label="C" />
    </VStack>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <Stack direction="row" gap={2} wrap className="max-w-xs">
      {["A", "B", "C", "D", "E", "F", "G", "H"].map((l) => (
        <Box key={l} label={l} />
      ))}
    </Stack>
  ),
};
