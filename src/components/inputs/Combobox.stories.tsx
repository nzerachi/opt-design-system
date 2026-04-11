import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Combobox } from "./Combobox";

const frameworks = [
  { label: "React",      value: "react" },
  { label: "Vue",        value: "vue" },
  { label: "Angular",    value: "angular" },
  { label: "Svelte",     value: "svelte" },
  { label: "SolidJS",    value: "solid" },
  { label: "Qwik",       value: "qwik" },
];

const meta: Meta<typeof Combobox> = {
  title: "Components/Inputs/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    clearable:  { control: "boolean" },
    creatable:  { control: "boolean" },
    disabled:   { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="w-72">
        <Combobox
          options={frameworks}
          value={value}
          onChange={setValue}
          label="Framework"
          placeholder="Select a framework…"
        />
      </div>
    );
  },
};

export const Creatable: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <div className="w-72">
        <Combobox
          options={frameworks}
          value={value}
          onChange={setValue}
          label="Framework"
          placeholder="Search or create…"
          creatable
          onCreate={(v) => alert(`Create: ${v}`)}
        />
      </div>
    );
  },
};
