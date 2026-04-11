import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Search } from "lucide-react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size:        { control: "select", options: ["sm", "md", "lg"] },
    status:      { control: "select", options: ["default", "error", "success", "warning"] },
    disabled:    { control: "boolean" },
    required:    { control: "boolean" },
    label:       { control: "text" },
    placeholder: { control: "text" },
    error:       { control: "text" },
    description: { control: "text" },
    leftIcon:    { control: false },
    rightIcon:   { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: "Email address", placeholder: "you@example.com" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Default" placeholder="Enter value" />
      <Input label="With description" placeholder="Enter value" description="We'll never share this." />
      <Input label="Error" placeholder="Enter value" status="error" error="This field is required" />
      <Input label="Success" placeholder="Enter value" status="success" />
      <Input label="Warning" placeholder="Enter value" status="warning" />
      <Input label="Disabled" placeholder="Disabled" disabled />
      <Input label="Required" placeholder="Required field" required />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Email" placeholder="you@example.com" leftIcon={<Mail className="size-4" />} />
      <Input label="Search" placeholder="Search…" leftIcon={<Search className="size-4" />} />
    </div>
  ),
};

export const WithAddons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Website" placeholder="example.com" leftAddon="https://" />
      <Input label="Username" placeholder="username" rightAddon=".opticule.dev" />
    </div>
  ),
};
