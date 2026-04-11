import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error", "neutral"],
    },
    dismissible: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { variant: "info" },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-96">
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>An informational message.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This action may have consequences.</AlertDescription>
      </Alert>
      <Alert variant="error">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
      <Alert variant="neutral">
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>Here's some neutral information.</AlertDescription>
      </Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <div className="w-96">
      <Alert variant="info" dismissible onDismiss={() => alert("dismissed")}>
        <AlertTitle>Dismissible alert</AlertTitle>
        <AlertDescription>Click the X to dismiss this alert.</AlertDescription>
      </Alert>
    </div>
  ),
};
