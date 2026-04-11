import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "./Modal";
import { Button } from "../inputs/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Overlay/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: { onClose: fn() },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "full"] },
    closeOnBackdropClick: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo({ size }: { size?: "sm" | "md" | "lg" | "xl" | "full" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} size={size}>
        <ModalHeader onClose={() => setOpen(false)}>
          <ModalTitle>Confirm Action</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <p className="text-foreground/75">
            Are you sure you want to proceed? This action will make changes to your account.
          </p>
        </ModalContent>
        <ModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export const Default: Story = { render: () => <ModalDemo /> };
export const Large:   Story = { render: () => <ModalDemo size="lg" /> };
export const Small:   Story = { render: () => <ModalDemo size="sm" /> };
