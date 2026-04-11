import type { Meta, StoryObj } from "@storybook/react-vite";
import { Code, CodeBlock } from "./Code";

const meta: Meta = {
  title: "Components/Typography/Code",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Inline: Story = {
  render: () => (
    <p className="text-sm text-foreground leading-7">
      Install with <Code>npm install @opticule/ds</Code> or run{" "}
      <Code>npx create-opticule-app</Code> to scaffold a new project.
      The <Code>ThemeProvider</Code> component wraps your app.
    </p>
  ),
};

export const Block: Story = {
  render: () => (
    <CodeBlock language="tsx">
      {`import { Button, ThemeProvider } from "@opticule/ds";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button variant="primary" size="md">
        Click me
      </Button>
    </ThemeProvider>
  );
}`}
    </CodeBlock>
  ),
};

export const Languages: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CodeBlock language="tsx">
        {`const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 bg-brand-orange text-white rounded-lg">
    {children}
  </button>
);`}
      </CodeBlock>
      <CodeBlock language="css">
        {`:root {
  --brand-orange: 30 100% 50%;
  --brand-purple: 285 100% 60%;
}`}
      </CodeBlock>
      <CodeBlock language="bash">
        {`npm install @opticule/ds
npm run storybook`}
      </CodeBlock>
    </div>
  ),
};
