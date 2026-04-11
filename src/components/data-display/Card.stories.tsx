import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
import { Button } from "../inputs/Button";
import { Badge } from "../inputs/Badge";

const meta: Meta<typeof Card> = {
  title: "Components/Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "glass", "outlined", "elevated", "interactive"],
    },
    padding: { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
    hover:   { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>A short description of the card content.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground/75">
          This is the card body. It can contain any content.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm" className="ml-auto">Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      {(["default", "outlined", "elevated", "glass", "interactive"] as const).map((v) => (
        <Card key={v} variant={v} className="p-4">
          <p className="text-sm font-semibold capitalize">{v}</p>
          <p className="text-xs text-foreground/60 mt-1">variant="{v}"</p>
        </Card>
      ))}
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="relative w-72">
      <Card>
        <CardHeader>
          <CardTitle>Premium Feature</CardTitle>
          <CardDescription>Only available on Pro plan</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/75">Upgrade to unlock this feature.</p>
        </CardContent>
      </Card>
      <div className="absolute top-3 right-3">
        <Badge variant="gradient">Pro</Badge>
      </div>
    </div>
  ),
};
