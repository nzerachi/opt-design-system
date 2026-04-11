import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabItems = [
  { value: "overview",  label: "Overview",  content: "Overview content goes here." },
  { value: "analytics", label: "Analytics", content: "Analytics content goes here." },
  { value: "settings",  label: "Settings",  content: "Settings content goes here." },
];

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="underline">
        {tabItems.map((t) => <TabsTrigger key={t.value} value={t.value} variant="underline">{t.label}</TabsTrigger>)}
      </TabsList>
      {tabItems.map((t) => (
        <TabsContent key={t.value} value={t.value}>
          <p className="text-sm text-foreground/75">{t.content}</p>
        </TabsContent>
      ))}
    </Tabs>
  ),
};

export const Pill: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="pill">
        {tabItems.map((t) => <TabsTrigger key={t.value} value={t.value} variant="pill">{t.label}</TabsTrigger>)}
      </TabsList>
      {tabItems.map((t) => (
        <TabsContent key={t.value} value={t.value}>
          <p className="text-sm text-foreground/75">{t.content}</p>
        </TabsContent>
      ))}
    </Tabs>
  ),
};

export const Enclosed: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="enclosed">
        {tabItems.map((t) => <TabsTrigger key={t.value} value={t.value} variant="enclosed">{t.label}</TabsTrigger>)}
      </TabsList>
      {tabItems.map((t) => (
        <TabsContent key={t.value} value={t.value}>
          <p className="text-sm text-foreground/75">{t.content}</p>
        </TabsContent>
      ))}
    </Tabs>
  ),
};
