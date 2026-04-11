import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { MultiSelect } from "./MultiSelect";

const options = [
  { label: "React",       value: "react" },
  { label: "TypeScript",  value: "ts" },
  { label: "Tailwind CSS", value: "tailwind" },
  { label: "Vite",        value: "vite" },
  { label: "Next.js",     value: "next" },
  { label: "Astro",       value: "astro" },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Components/Inputs/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {
    searchable: { control: "boolean" },
    clearable:  { control: "boolean" },
    disabled:   { control: "boolean" },
    maxSelected: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["react", "ts"]);
    return (
      <div className="w-80">
        <MultiSelect
          options={options}
          value={value}
          onChange={setValue}
          label="Technologies"
          placeholder="Select frameworks…"
        />
      </div>
    );
  },
};

export const WithMaxSelected: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(["react"]);
    return (
      <div className="w-80">
        <MultiSelect
          options={options}
          value={value}
          onChange={setValue}
          label="Top 3 frameworks"
          placeholder="Select up to 3…"
          maxSelected={3}
        />
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => (
    <div className="w-80">
      <MultiSelect
        options={options}
        value={[]}
        onChange={() => {}}
        label="Required field"
        placeholder="Select at least one…"
        error="Please select at least one option"
      />
    </div>
  ),
};
