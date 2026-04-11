import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent, DrawerFooter } from "./Drawer";
import { Button } from "../inputs/Button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Overlay/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    placement: { control: "select", options: ["left", "right", "top", "bottom"] },
    size:      { control: "select", options: ["sm", "md", "lg", "full"] },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

function DrawerDemo({ placement }: { placement?: "left" | "right" | "top" | "bottom" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {placement ?? "right"} Drawer</Button>
      <Drawer isOpen={open} onClose={() => setOpen(false)} placement={placement}>
        <DrawerHeader onClose={() => setOpen(false)}>
          <DrawerTitle>Settings</DrawerTitle>
        </DrawerHeader>
        <DrawerContent>
          <p className="text-sm text-foreground/75">Drawer content goes here.</p>
        </DrawerContent>
        <DrawerFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </DrawerFooter>
      </Drawer>
    </>
  );
}

export const Right:  Story = { render: () => <DrawerDemo placement="right" /> };
export const Left:   Story = { render: () => <DrawerDemo placement="left" /> };
export const Bottom: Story = { render: () => <DrawerDemo placement="bottom" /> };
export const Top:    Story = { render: () => <DrawerDemo placement="top" /> };
