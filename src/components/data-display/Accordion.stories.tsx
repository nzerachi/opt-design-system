import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const faqItems = [
  { q: "What is Opticule DS?", a: "A world-class design system built on React, TypeScript, and Tailwind CSS." },
  { q: "Is it accessible?", a: "Yes — all components meet WCAG 2.1 AA with keyboard navigation and screen reader support." },
  { q: "Does it support dark mode?", a: "Yes — light, dark, and high-contrast themes are included out of the box." },
];

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-0" className="w-96">
      {faqItems.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-96">
      {faqItems.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
