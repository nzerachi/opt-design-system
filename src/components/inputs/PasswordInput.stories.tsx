import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Inputs/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  argTypes: {
    size:     { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: { label: "Password", placeholder: "Enter your password" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithError: Story = {
  args: { label: "Password", placeholder: "Enter password", error: "Password must be at least 8 characters" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <PasswordInput label="Default" placeholder="Password" />
      <PasswordInput label="With description" placeholder="Password" description="At least 8 characters, 1 uppercase, 1 symbol." />
      <PasswordInput label="Error" placeholder="Password" error="Passwords do not match." />
      <PasswordInput label="Disabled" placeholder="Password" disabled />
    </div>
  ),
};
