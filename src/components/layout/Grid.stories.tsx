import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid, SimpleGrid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    columns: { control: "number" },
    gap: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "0", "1", "2", "4", "6", "8"] },
    align: { control: "select", options: ["start", "end", "center", "stretch", "baseline"] },
    justify: { control: "select", options: ["start", "end", "center", "stretch"] },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center h-16 rounded-lg bg-muted-light/20 border border-border text-sm text-foreground/70 font-medium">
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap="md">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </Grid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={2} gap="lg">
      <Box>Column A</Box>
      <Box>Column B</Box>
      <Box>Column C</Box>
      <Box>Column D</Box>
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap="sm">
      {Array.from({ length: 8 }, (_, i) => <Box key={i}>{i + 1}</Box>)}
    </Grid>
  ),
};

export const WithSimpleGrid: Story = {
  name: "SimpleGrid (Responsive)",
  render: () => (
    <SimpleGrid minChildWidth={160} gap="md">
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i}>Card {i + 1}</Box>
      ))}
    </SimpleGrid>
  ),
};
