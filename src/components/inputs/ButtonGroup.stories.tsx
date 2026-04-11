import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Inputs/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    attached: { control: "boolean" },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Copy</Button>
      <Button variant="outline">Paste</Button>
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
  ),
};

export const Attached: Story = {
  render: () => (
    <ButtonGroup attached>
      <Button variant="secondary">Previous</Button>
      <Button variant="secondary">Current</Button>
      <Button variant="secondary">Next</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" attached>
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

export const AttachedPrimary: Story = {
  render: () => (
    <ButtonGroup attached>
      <Button variant="primary">Save</Button>
      <Button variant="primary" size="sm" className="px-2">▼</Button>
    </ButtonGroup>
  ),
};
