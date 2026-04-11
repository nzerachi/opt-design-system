import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Primitives/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    size:  { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: { level: 2, children: "Section Heading" },
};

export const Scale: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Heading level={1}>H1 — Display heading</Heading>
      <Heading level={2}>H2 — Page title</Heading>
      <Heading level={3}>H3 — Section title</Heading>
      <Heading level={4}>H4 — Subsection</Heading>
      <Heading level={5}>H5 — Card title</Heading>
      <Heading level={6}>H6 — Small label</Heading>
    </div>
  ),
};
