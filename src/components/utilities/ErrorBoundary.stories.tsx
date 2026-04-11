import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorBoundary } from "./ErrorBoundary";
import { Button } from "../inputs/Button";
import { useState } from "react";

const meta: Meta<typeof ErrorBoundary> = {
  title: "Components/Utilities/ErrorBoundary",
  component: ErrorBoundary,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

// Component that throws on demand
const BombComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) throw new Error("Simulated component error");
  return (
    <div className="rounded-lg border border-border p-6 text-sm text-foreground/70">
      Component rendered successfully. Click the button to simulate an error.
    </div>
  );
};

export const Default: Story = {
  render: () => {
    const [shouldThrow, setShouldThrow] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setShouldThrow(true)}
        >
          Throw Error
        </Button>
        <ErrorBoundary>
          <BombComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>
    );
  },
};

export const CustomFallback: Story = {
  render: () => {
    const [key, setKey] = useState(0);
    return (
      <div className="flex flex-col gap-4">
        <ErrorBoundary
          key={key}
          fallback={(error, reset) => (
            <div className="rounded-lg border border-brand-folly/30 bg-brand-folly/5 p-6 flex flex-col gap-3">
              <h3 className="font-semibold text-brand-folly text-sm">Something went wrong</h3>
              <p className="text-xs text-foreground/60 font-mono bg-muted-light/20 rounded p-2">
                {error.message}
              </p>
              <div className="flex gap-2">
                <Button size="sm" onClick={reset}>Try Again</Button>
                <Button size="sm" variant="outline" onClick={() => setKey(k => k + 1)}>Reset</Button>
              </div>
            </div>
          )}
        >
          <BombComponent shouldThrow={true} />
        </ErrorBoundary>
      </div>
    );
  },
};
