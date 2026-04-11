import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Components/Inputs/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {
    multiple: { control: "boolean" },
    disabled: { control: "boolean" },
    maxSize:  { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: { label: "Upload files", description: "PNG, JPG, PDF up to 10MB" },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const ImageOnly: Story = {
  args: {
    label: "Upload an image",
    accept: { "image/*": [".png", ".jpg", ".webp"] },
    maxSize: 5 * 1024 * 1024,
    description: "PNG, JPG, WebP · max 5MB",
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const MultipleFiles: Story = {
  args: {
    label: "Upload files",
    multiple: true,
    description: "Select one or more files",
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};

export const Disabled: Story = {
  args: { label: "Upload files", disabled: true },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
};
