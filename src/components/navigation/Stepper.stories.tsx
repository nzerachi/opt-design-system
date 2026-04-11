import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "./Stepper";

const steps = [
  { label: "Account", description: "Basic information" },
  { label: "Profile", description: "Personal details" },
  { label: "Review",  description: "Confirm and submit" },
];

const meta: Meta<typeof Stepper> = {
  title: "Components/Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    currentStep:  { control: { type: "range", min: 0, max: 2 } },
    orientation:  { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: { steps, currentStep: 1 },
};

export const Vertical: Story = {
  args: { steps, currentStep: 1, orientation: "vertical" },
  decorators: [(Story) => <div className="h-56"><Story /></div>],
};

export const Complete: Story = {
  args: { steps, currentStep: 3 },
};

export const Start: Story = {
  args: { steps, currentStep: 0 },
};
