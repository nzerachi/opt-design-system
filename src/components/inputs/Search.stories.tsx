import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "./Search";

const meta: Meta<typeof Search> = {
  title: "Components/Inputs/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    shortcut: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: { placeholder: "Search components…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const WithShortcut: Story = {
  args: { placeholder: "Search…", shortcut: "⌘K" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Loading: Story = {
  args: { loading: true, placeholder: "Searching…" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <Search size="sm" placeholder="Small search" />
      <Search size="md" placeholder="Medium search" />
      <Search size="lg" placeholder="Large search" />
    </div>
  ),
};
