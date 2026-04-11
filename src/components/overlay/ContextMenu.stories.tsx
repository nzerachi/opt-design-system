import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
  ContextMenuShortcut,
} from "./ContextMenu";

const meta: Meta = {
  title: "Components/Overlay/ContextMenu",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-40 w-72 items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-foreground/60 select-none cursor-context-menu">
          Right-click here
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Open <ContextMenuShortcut>⌘O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Advanced</ContextMenuLabel>
        <ContextMenuItem disabled>
          Delete <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCheckboxes: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="flex h-40 w-72 items-center justify-center rounded-lg border-2 border-dashed border-border text-sm text-foreground/60 select-none cursor-context-menu">
          Right-click for view options
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>View</ContextMenuLabel>
        <ContextMenuCheckboxItem checked>Show Toolbar</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Sidebar</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked>Show Status Bar</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
