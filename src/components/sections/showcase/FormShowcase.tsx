import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../../forms/Form";
import { Input } from "../../inputs/Input";
import { TextArea } from "../../inputs/TextArea";
import { Select } from "../../inputs/Select";
import { Checkbox } from "../../inputs/Checkbox";
import { Switch } from "../../inputs/Switch";
import { Button } from "../../inputs/Button";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  AccessibilitySection,
  A11yPoint,
  IC,
  AnatomyList,
  CodeBlock,
} from "./DocComponents";

// ─── Demo forms ───────────────────────────────────────────────────────────────

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4 w-full max-w-sm">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Min. 8 characters" {...field} />
              </FormControl>
              <FormDescription>Must be at least 8 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="primary" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  );
}

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().max(200, "Bio must be under 200 characters").optional(),
  role: z.string().min(1, "Please select a role"),
  notifications: z.boolean(),
  terms: z.boolean().refine((v) => v, "You must accept the terms"),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", bio: "", role: "", notifications: false, terms: false },
  });

  const roles = [
    { value: "designer", label: "Designer" },
    { value: "engineer", label: "Engineer" },
    { value: "pm", label: "Product Manager" },
    { value: "researcher", label: "Researcher" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-5 w-full max-w-md">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Nze Rachi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio <span className="text-foreground/40 text-xs font-normal">(optional)</span></FormLabel>
              <FormControl>
                <TextArea placeholder="Tell us about yourself…" rows={3} {...field} />
              </FormControl>
              <FormDescription>Max 200 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select options={roles} placeholder="Select your role" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-sm font-medium">Email notifications</FormLabel>
                <FormDescription>Receive weekly digest of new components.</FormDescription>
              </div>
              <FormControl>
                <Switch checked={field.value} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-start gap-3">
              <FormControl>
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              </FormControl>
              <div className="space-y-0.5">
                <FormLabel htmlFor="terms" className="text-sm leading-none cursor-pointer">
                  I accept the terms of service
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" variant="gradient" className="w-full">
          Save profile
        </Button>
      </form>
    </Form>
  );
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export function FormShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Form"
        description="A typed form system integrating react-hook-form and zod validation. FormField, FormItem, FormLabel, FormControl, FormDescription, and FormMessage compose together to wire up any input to validation state automatically — with zero manual error handling."
        badges={[
          { label: "Stable", color: "green" },
          { label: "RHF + Zod", color: "purple" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@opticule/ds"`}
      />

      <DocSection title="Anatomy">
        <AnatomyList items={[
          { number: 1, label: "Form", description: "Wraps the react-hook-form FormProvider. Spread the useForm() return value onto it." },
          { number: 2, label: "FormField", description: "Wires a named field to react-hook-form's Controller. Passes field and fieldState to its render prop." },
          { number: 3, label: "FormItem", description: "Vertical flex container for label, control, description, and message. Provides the field ID via context." },
          { number: 4, label: "FormLabel", description: "Renders a <label> tied to the control's ID. Turns red when the field has an error." },
          { number: 5, label: "FormControl", description: "Passes aria-describedby, aria-invalid, and the generated ID to the wrapped input." },
          { number: 6, label: "FormDescription", description: "Helper text shown below the control. Referenced by aria-describedby." },
          { number: 7, label: "FormMessage", description: "Renders the zod validation error message. Automatically hidden when there is no error." },
        ]} />
      </DocSection>

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Form + FormField for every controlled input — it handles aria wiring automatically." },
            { text: "Define your schema with zod.object() and pass zodResolver to useForm." },
            { text: "Use FormDescription for constraints users need to know before submitting (max length, format)." },
            { text: "Show FormMessage beneath each field — don't aggregate errors only at the top of the form." },
          ]}
          avoid={[
            { text: "Don't manage error state manually when using the Form system — FormMessage handles it." },
            { text: "Don't place submit logic inside the schema — put it in handleSubmit's callback." },
            { text: "Don't skip FormControl — it's what sets aria-invalid and aria-describedby on the input." },
            { text: "Don't use uncontrolled inputs (no register/Controller) inside a Form — they won't validate." },
          ]}
        />
      </DocSection>

      <DocSection title="Login Form" description="Minimal form with validation on submit.">
        <DemoBlock label="email + password — with validation" vertical>
          <LoginForm />
        </DemoBlock>
      </DocSection>

      <DocSection title="Profile Form" description="Multi-field form with text, select, switch, and checkbox fields.">
        <DemoBlock label="name, bio, role, notifications, terms" vertical>
          <ProfileForm />
        </DemoBlock>
      </DocSection>

      <DocSection title="Code Pattern">
        <CodeBlock
          language="tsx"
          code={`import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form, FormField, FormItem, FormLabel,
  FormControl, FormDescription, FormMessage,
} from "@opticule/ds";
import { Input, Button } from "@opticule/ds";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

export function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", name: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}`}
        />
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable
          title="FormField props"
          rows={[
            { name: "control", type: "Control<TFieldValues>", required: true, description: "The control object from useForm()." },
            { name: "name", type: "string", required: true, description: "The field path — must match a key in your zod schema." },
            { name: "render", type: "({ field, fieldState }) => ReactNode", required: true, description: "Render prop receiving the field controller and validation state." },
          ]}
        />
        <PropsTable
          title="FormItem / FormLabel / FormControl"
          rows={[
            { name: "FormItem", type: "HTMLDivElement props", description: "Flex column container. Provides field ID context to children." },
            { name: "FormLabel", type: "HTMLLabelElement props", description: "Label tied to control ID. Red color when field has error." },
            { name: "FormControl", type: "Slot", description: "Passes aria-describedby, aria-invalid, and id to the wrapped child." },
            { name: "FormDescription", type: "HTMLParagraphElement props", description: "Helper text. ID is passed to aria-describedby on the control." },
            { name: "FormMessage", type: "HTMLParagraphElement props", description: "Shows the current validation error. Hidden when field is valid." },
          ]}
        />
      </DocSection>

      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint><IC>FormControl</IC> injects <IC>aria-invalid="true"</IC> onto the wrapped input when the field has an error — screen readers announce this automatically.</A11yPoint>
          <A11yPoint><IC>FormDescription</IC> is linked via <IC>aria-describedby</IC> so its text is announced alongside the input when the user focuses it.</A11yPoint>
          <A11yPoint><IC>FormLabel</IC> uses <IC>htmlFor</IC> tied to the auto-generated field ID — every input is always associated with its label.</A11yPoint>
          <A11yPoint>Error messages from <IC>FormMessage</IC> are also accessible via the input's <IC>aria-describedby</IC> — they don't require a separate live region.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
