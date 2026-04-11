import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    status:     { control: "select", options: ["default", "error", "success", "warning"] },
    showCount:  { control: "boolean" },
    disabled:   { control: "boolean" },
    required:   { control: "boolean" },
    maxLength:  { control: "number" },
    rows:       { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: { label: "Message", placeholder: "Write your message here…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithCount: Story = {
  args: { label: "Bio", maxLength: 200, showCount: true, placeholder: "Tell us about yourself…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <TextArea label="Default" placeholder="Enter text" />
      <TextArea label="Error" status="error" error="This field is required" placeholder="Enter text" />
      <TextArea label="Success" status="success" placeholder="Enter text" />
      <TextArea label="Disabled" disabled placeholder="Disabled" />
    </div>
  ),
};
