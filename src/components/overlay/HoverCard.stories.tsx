import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./HoverCard";
import { Avatar } from "../data-display/Avatar";

const meta: Meta = {
  title: "Components/Overlay/HoverCard",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          className="text-brand-orange underline-offset-4 hover:underline font-medium"
          onClick={(e) => e.preventDefault()}
        >
          @opticule
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar name="Opticule DS" size="lg" />
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Opticule Design System</h4>
            <p className="text-sm text-foreground/60">
              A world-class, production-grade component library built with React + Tailwind CSS v4.
            </p>
            <p className="text-xs text-foreground/40">
              Joined April 2024
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <p className="text-sm">
      Designed by{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <span className="text-brand-orange cursor-pointer font-medium hover:underline">
            nzerachi
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Avatar name="Nze Rachi" status="online" />
              <div>
                <p className="font-semibold text-sm">Nze Rachi</p>
                <p className="text-xs text-foreground/50">@nzerachi</p>
              </div>
            </div>
            <p className="text-xs text-foreground/60">
              UI/UX Designer & Frontend Engineer building Opticule DS.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      at Opticule.
    </p>
  ),
};
