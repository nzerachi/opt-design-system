import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormSection,
} from "./Form";
import { Input } from "../inputs/Input";
import { Button } from "../inputs/Button";
import { Select } from "../inputs/Select";
import { Checkbox } from "../inputs/Checkbox";
import { Switch } from "../inputs/Switch";
import { TextArea } from "../inputs/TextArea";

const meta: Meta = {
  title: "Components/Forms/Form",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Login Form
// ---------------------------------------------------------------------------

const loginSchema = z.object({
  email:    z.string().email("Enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const Login: Story = {
  render: () => {
    const form = useForm<z.infer<typeof loginSchema>>({
      resolver: zodResolver(loginSchema),
      defaultValues: { email: "", password: "" },
    });

    return (
      <div className="w-[400px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(console.log)} className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormDescription>At least 8 characters.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </Form>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Profile Form
// ---------------------------------------------------------------------------

const profileSchema = z.object({
  name:     z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(3).regex(/^[a-z0-9_]+$/, "Lowercase, numbers, and underscores only"),
  bio:      z.string().max(200, "Bio must be under 200 characters").optional(),
  role:     z.string({ required_error: "Select a role" }),
  newsletter: z.boolean().default(false),
  publicProfile: z.boolean().default(true),
});

export const ProfileSettings: Story = {
  render: () => {
    const form = useForm<z.infer<typeof profileSchema>>({
      resolver: zodResolver(profileSchema),
      defaultValues: { name: "", username: "", bio: "", newsletter: false, publicProfile: true },
    });

    return (
      <div className="w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(console.log)} className="flex flex-col gap-6">
            <FormSection title="Personal Information">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Nze Rachi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="nzerachi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <TextArea placeholder="Tell us about yourself…" rows={3} {...field} />
                    </FormControl>
                    <FormDescription>Max 200 characters.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FormSection>

            <FormSection title="Preferences">
              <FormField
                control={form.control}
                name="newsletter"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div>
                      <FormLabel className="cursor-pointer">Newsletter</FormLabel>
                      <FormDescription>Receive weekly design system updates.</FormDescription>
                    </div>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </FormSection>

            <div className="flex gap-3 justify-end">
              <Button variant="outline" type="button">Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Form>
      </div>
    );
  },
};

// ---------------------------------------------------------------------------
// Validation States
// ---------------------------------------------------------------------------

const simpleSchema = z.object({
  value: z.string().min(3, "Must be at least 3 characters"),
});

export const ValidationStates: Story = {
  render: () => {
    const form = useForm<z.infer<typeof simpleSchema>>({
      resolver: zodResolver(simpleSchema),
      defaultValues: { value: "Hi" },
    });
    // Trigger validation immediately
    form.trigger();

    return (
      <div className="w-80 flex flex-col gap-4">
        <Form {...form}>
          <form className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field with Error</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>Helper text appears here.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    );
  },
};
