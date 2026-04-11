import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "./AspectRatio";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/Layout/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  argTypes: {
    ratio: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

const Placeholder = ({ label }: { label: string }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-muted-light/20 border border-border rounded-lg text-foreground/50 text-sm">
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <AspectRatio ratio={16 / 9}>
        <Placeholder label="16:9" />
      </AspectRatio>
    </div>
  ),
};

export const Ratios: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {([
        { label: "1:1 Square", ratio: 1 },
        { label: "16:9 Widescreen", ratio: 16 / 9 },
        { label: "4:3 Standard", ratio: 4 / 3 },
        { label: "3:2 Photo", ratio: 3 / 2 },
        { label: "21:9 Ultrawide", ratio: 21 / 9 },
        { label: "9:16 Portrait", ratio: 9 / 16 },
      ] as const).map(({ label, ratio }) => (
        <div key={label}>
          <AspectRatio ratio={ratio}>
            <Placeholder label={label} />
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
};
