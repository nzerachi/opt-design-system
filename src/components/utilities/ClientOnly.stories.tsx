import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClientOnly } from "./ClientOnly";

const meta: Meta<typeof ClientOnly> = {
  title: "Components/Utilities/ClientOnly",
  component: ClientOnly,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ClientOnly>;

export const Default: Story = {
  render: () => (
    <div className="rounded-lg border border-border p-6 text-sm">
      <p className="text-foreground/60 mb-3">
        <code className="text-brand-orange">ClientOnly</code> renders children only after hydration.
        This prevents SSR mismatches for components that read browser-only APIs
        like <code className="text-brand-orange">window</code>, <code className="text-brand-orange">localStorage</code>, etc.
      </p>
      <ClientOnly fallback={<span className="text-foreground/40 italic">Loading…</span>}>
        <span className="text-brand-orange font-medium">
          ✓ Rendered client-side (window is available)
        </span>
      </ClientOnly>
    </div>
  ),
};
