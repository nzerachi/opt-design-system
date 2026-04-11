import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverFooter } from "./Popover";
import { Button } from "../inputs/Button";
import { Input } from "../inputs/Input";

const meta: Meta<typeof Popover> = {
  title: "Components/Overlay/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent width="md">
        <PopoverHeader>
          <p className="text-sm font-semibold">Settings</p>
        </PopoverHeader>
        <div className="flex flex-col gap-3">
          <Input label="Display name" placeholder="Your name" size="sm" />
          <Input label="Username" placeholder="@handle" size="sm" />
        </div>
        <PopoverFooter>
          <Button size="sm">Save</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">With Close Button</Button>
      </PopoverTrigger>
      <PopoverContent showClose width="sm">
        <p className="text-sm">This popover has a close button in the corner.</p>
      </PopoverContent>
    </Popover>
  ),
};
