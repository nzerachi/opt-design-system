import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "./ScrollArea";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Utilities/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = [
  "React", "TypeScript", "Tailwind CSS", "Vite", "Radix UI",
  "Accessibility", "Design System", "Component Library", "Storybook",
  "Testing", "Vitest", "RTL", "CVA", "Zod", "React Hook Form",
  "Lucide Icons", "Sonner", "cmdk", "Framer Motion", "shadcn",
];

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-64 w-72 rounded-lg border border-border p-4">
      <div className="flex flex-col gap-2">
        {tags.map((tag) => (
          <div key={tag} className="text-sm text-foreground/80 py-1 border-b border-border/50 last:border-0">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-72 rounded-lg border border-border p-4" orientation="horizontal">
      <div className="flex gap-3" style={{ width: "max-content" }}>
        {tags.map((tag) => (
          <div
            key={tag}
            className="shrink-0 rounded-full bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 text-sm text-brand-orange whitespace-nowrap"
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-48 w-72 rounded-lg border border-border p-4">
      <div style={{ width: 600 }}>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="text-sm text-foreground/80 py-1 whitespace-nowrap">
            Row {i + 1}: {tags[i % tags.length]} — This is a longer line of content that extends beyond the container width
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
