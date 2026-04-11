import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster, toast } from "./Toast";
import { Button } from "../inputs/Button";

const meta: Meta<typeof Toaster> = {
  title: "Components/Feedback/Toast",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [(Story) => (
    <>
      <Story />
      <Toaster position="bottom-right" />
    </>
  )],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast("Event has been created.")}>Default</Button>
      <Button onClick={() => toast.success("File saved successfully.")}>Success</Button>
      <Button onClick={() => toast.error("Upload failed. Check your network.")}>Error</Button>
      <Button onClick={() => toast.warning("Storage is almost full.")}>Warning</Button>
      <Button onClick={() => toast.info("A new version is available.")}>Info</Button>
      <Button onClick={() => toast.loading("Uploading file…")}>Loading</Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Email deleted.", {
          action: { label: "Undo", onClick: () => toast.success("Undo successful!") },
        })
      }
    >
      Delete with Undo
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.error("Upload failed", {
          description: "The file you uploaded exceeds the 10MB size limit.",
        })
      }
    >
      Error with description
    </Button>
  ),
};
