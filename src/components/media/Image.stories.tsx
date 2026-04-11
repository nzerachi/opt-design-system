import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "./Image";

const meta: Meta<typeof Image> = {
  title: "Components/Media/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    fit:     { control: "select", options: ["cover", "contain", "fill", "none", "scale-down"] },
    rounded: { control: "select", options: ["none", "sm", "md", "lg", "xl", "full"] },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Image
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
        alt="Abstract colorful art"
        aspectRatio="16/9"
        rounded="lg"
      />
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      {(["none", "sm", "md", "lg", "xl", "full"] as const).map((r) => (
        <div key={r} className="flex flex-col items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80"
            alt="Art"
            aspectRatio="1/1"
            rounded={r}
            className="w-24"
          />
          <span className="text-xs text-foreground/50">{r}</span>
        </div>
      ))}
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="w-48">
      <Image
        src="https://example.invalid/broken-image.jpg"
        fallbackSrc="https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&q=80"
        alt="Fallback demo"
        aspectRatio="4/3"
        rounded="lg"
      />
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      {[80, 64, 48, 40, 32].map((size) => (
        <Image
          key={size}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80"
          alt="Avatar"
          rounded="full"
          style={{ width: size, height: size }}
          fit="cover"
        />
      ))}
    </div>
  ),
};
