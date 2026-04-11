import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConditionalWrap } from "./ConditionalWrap";
import { useState } from "react";
import { Button } from "../inputs/Button";

const meta: Meta<typeof ConditionalWrap> = {
  title: "Components/Utilities/ConditionalWrap",
  component: ConditionalWrap,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ConditionalWrap>;

export const Default: Story = {
  render: () => {
    const [wrap, setWrap] = useState(true);
    return (
      <div className="flex flex-col gap-4">
        <Button size="sm" variant="outline" onClick={() => setWrap(w => !w)}>
          Toggle Wrap (currently: {wrap ? "wrapped" : "unwrapped"})
        </Button>
        <ConditionalWrap
          condition={wrap}
          wrap={(children) => (
            <div className="rounded-lg border-2 border-brand-orange/50 p-4">
              <p className="text-xs text-brand-orange mb-2">Wrapper (visible when condition=true)</p>
              {children}
            </div>
          )}
        >
          <div className="rounded-lg bg-bg-secondary border border-border px-4 py-3 text-sm text-foreground/80">
            Inner content — always rendered
          </div>
        </ConditionalWrap>
      </div>
    );
  },
};
