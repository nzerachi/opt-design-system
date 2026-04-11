import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  CommandPalette,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteSeparator,
} from "./CommandPalette";
import { Button } from "../inputs/Button";
import {
  Home, Settings, User, FileText, Search, Bell, Code, Layers,
} from "lucide-react";

const meta: Meta = {
  title: "Components/Overlay/CommandPalette",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setOpen(true)}>
          Open Command Palette
        </Button>
        <p className="text-xs text-foreground/50">or press ⌘K / Ctrl+K</p>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          placeholder="Search commands, pages, actions…"
        >
          <CommandPaletteGroup label="Navigation">
            <CommandPaletteItem icon={<Home size={16} />} onSelect={() => setOpen(false)}>
              Dashboard
            </CommandPaletteItem>
            <CommandPaletteItem icon={<User size={16} />} onSelect={() => setOpen(false)}>
              Profile
            </CommandPaletteItem>
            <CommandPaletteItem icon={<Settings size={16} />} onSelect={() => setOpen(false)}>
              Settings
            </CommandPaletteItem>
          </CommandPaletteGroup>
          <CommandPaletteSeparator />
          <CommandPaletteGroup label="Recent Files">
            <CommandPaletteItem icon={<FileText size={16} />} onSelect={() => setOpen(false)}>
              design-tokens.ts
            </CommandPaletteItem>
            <CommandPaletteItem icon={<Code size={16} />} onSelect={() => setOpen(false)}>
              Button.tsx
            </CommandPaletteItem>
            <CommandPaletteItem icon={<Layers size={16} />} onSelect={() => setOpen(false)}>
              Modal.tsx
            </CommandPaletteItem>
          </CommandPaletteGroup>
          <CommandPaletteGroup label="Actions">
            <CommandPaletteItem icon={<Search size={16} />} onSelect={() => setOpen(false)}>
              Search docs
            </CommandPaletteItem>
            <CommandPaletteItem icon={<Bell size={16} />} onSelect={() => setOpen(false)}>
              Notifications
            </CommandPaletteItem>
          </CommandPaletteGroup>
        </CommandPalette>
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex items-center gap-4">
        <Button onClick={() => setOpen(true)}>Open (Loading state)</Button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          loading
        >
          <CommandPaletteGroup label="Results">
            <CommandPaletteItem onSelect={() => setOpen(false)}>Item 1</CommandPaletteItem>
          </CommandPaletteGroup>
        </CommandPalette>
      </div>
    );
  },
};
