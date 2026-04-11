import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Typography/Kbd",
  component: Kbd,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: { children: "⌘K" },
};

export const Shortcuts: Story = {
  render: () => (
    <div className="flex flex-col gap-4 text-sm text-foreground">
      <p>
        Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
      </p>
      <p>
        Use <Kbd>⌘</Kbd> + <Kbd>Z</Kbd> to undo and <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>Z</Kbd> to redo.
      </p>
      <p>
        Navigate with <Kbd>↑</Kbd> <Kbd>↓</Kbd> <Kbd>←</Kbd> <Kbd>→</Kbd> arrow keys.
      </p>
      <p>
        Press <Kbd>Escape</Kbd> to dismiss, <Kbd>Enter</Kbd> to confirm.
      </p>
    </div>
  ),
};

export const Table: Story = {
  render: () => (
    <div className="rounded-lg border border-border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-bg-secondary">
            <th className="px-4 py-2 text-left font-medium text-foreground/70">Action</th>
            <th className="px-4 py-2 text-left font-medium text-foreground/70">Shortcut</th>
          </tr>
        </thead>
        <tbody>
          {[
            { action: "Command palette", keys: ["⌘", "K"] },
            { action: "Save file", keys: ["⌘", "S"] },
            { action: "Find in files", keys: ["⌘", "⇧", "F"] },
            { action: "Toggle sidebar", keys: ["⌘", "B"] },
            { action: "Quick open", keys: ["⌘", "P"] },
          ].map(({ action, keys }) => (
            <tr key={action} className="border-b border-border/50 last:border-0">
              <td className="px-4 py-2 text-foreground/80">{action}</td>
              <td className="px-4 py-2 flex gap-1">
                {keys.map((k) => <Kbd key={k}>{k}</Kbd>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};
