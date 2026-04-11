import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "./VisuallyHidden";
import { Search, Bell, X } from "lucide-react";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/Primitives/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
  argTypes: {
    focusable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof VisuallyHidden>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-foreground/60">
        VisuallyHidden hides content visually while keeping it accessible. The buttons below have icon-only visual design but include screen-reader text.
      </p>
      <div className="flex gap-3">
        <button className="p-2 rounded-lg border border-border hover:bg-muted-light/20 transition-colors">
          <Search size={18} aria-hidden />
          <VisuallyHidden>Search</VisuallyHidden>
        </button>
        <button className="p-2 rounded-lg border border-border hover:bg-muted-light/20 transition-colors">
          <Bell size={18} aria-hidden />
          <VisuallyHidden>Notifications</VisuallyHidden>
        </button>
        <button className="p-2 rounded-lg border border-border hover:bg-muted-light/20 transition-colors">
          <X size={18} aria-hidden />
          <VisuallyHidden>Close</VisuallyHidden>
        </button>
      </div>
    </div>
  ),
};

export const FocusableSkipLink: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-foreground/60 mb-2">
        Tab into this example — a skip-to-content link appears:
      </p>
      <VisuallyHidden focusable>
        <a
          href="#main-content"
          className="absolute top-2 left-2 z-50 rounded-lg bg-bg-primary border border-brand-orange px-4 py-2 text-sm font-medium text-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange"
          onClick={(e) => e.preventDefault()}
        >
          Skip to main content
        </a>
      </VisuallyHidden>
      <div id="main-content" className="rounded-lg border border-dashed border-border p-6 text-sm text-foreground/50">
        Main content area
      </div>
    </div>
  ),
};
