/**
 * Form — react-hook-form + zod integration layer.
 *
 * Provides context-aware FormField, FormItem, FormLabel, FormControl,
 * FormDescription, FormMessage that wire up to react-hook-form's
 * Controller and formState automatically.
 *
 * Usage pattern:
 * ```tsx
 * const schema = z.object({ email: z.string().email() });
 * const form = useForm({ resolver: zodResolver(schema) });
 *
 * <Form {...form}>
 *   <form onSubmit={form.handleSubmit(onSubmit)}>
 *     <FormField
 *       control={form.control}
 *       name="email"
 *       render={({ field }) => (
 *         <FormItem>
 *           <FormLabel>Email</FormLabel>
 *           <FormControl>
 *             <Input type="email" {...field} />
 *           </FormControl>
 *           <FormDescription>We'll never share your email.</FormDescription>
 *           <FormMessage />
 *         </FormItem>
 *       )}
 *     />
 *     <Button type="submit">Submit</Button>
 *   </form>
 * </Form>
 * ```
 */

import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type HTMLAttributes,
} from "react";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { cn } from "../../lib/utils";

// ---------------------------------------------------------------------------
// Form (wraps FormProvider)
// ---------------------------------------------------------------------------

export const Form = FormProvider;

// ---------------------------------------------------------------------------
// FormFieldContext
// ---------------------------------------------------------------------------

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

// ---------------------------------------------------------------------------
// FormField
// ---------------------------------------------------------------------------

export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// useFormField hook
// ---------------------------------------------------------------------------

export function useFormField() {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField must be used inside <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
}

// ---------------------------------------------------------------------------
// FormItemContext
// ---------------------------------------------------------------------------

interface FormItemContextValue {
  id: string;
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

// ---------------------------------------------------------------------------
// FormItem
// ---------------------------------------------------------------------------

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = useId();
    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "Form.Item";

// ---------------------------------------------------------------------------
// FormLabel
// ---------------------------------------------------------------------------

export const FormLabel = forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();
    return (
      <label
        ref={ref}
        htmlFor={formItemId}
        className={cn(
          "text-sm font-medium",
          error ? "text-brand-folly" : "text-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);
FormLabel.displayName = "Form.Label";

// ---------------------------------------------------------------------------
// FormControl
// ---------------------------------------------------------------------------

export const FormControl = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (
      <div
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? formDescriptionId
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "Form.Control";

// ---------------------------------------------------------------------------
// FormDescription
// ---------------------------------------------------------------------------

export const FormDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();
  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-xs text-foreground/60", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "Form.Description";

// ---------------------------------------------------------------------------
// FormMessage
// ---------------------------------------------------------------------------

export const FormMessage = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) return null;

  return (
    <p
      ref={ref}
      id={formMessageId}
      role="alert"
      className={cn(
        "text-xs font-medium",
        error ? "text-brand-folly" : "text-foreground/60",
        className,
      )}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "Form.Message";

// ---------------------------------------------------------------------------
// FormSection — groups related fields with an optional heading
// ---------------------------------------------------------------------------

export interface FormSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(
  ({ title, description, className, children, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props}>
      {(title || description) && (
        <div className="mb-2">
          {title && (
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-foreground/60 mt-0.5">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  ),
);
FormSection.displayName = "Form.Section";

// ---------------------------------------------------------------------------
// Fieldset
// ---------------------------------------------------------------------------

export const Fieldset = forwardRef<HTMLFieldSetElement, React.FieldsetHTMLAttributes<HTMLFieldSetElement>>(
  ({ className, ...props }, ref) => (
    <fieldset
      ref={ref}
      className={cn(
        "rounded-lg border border-border p-4 flex flex-col gap-4",
        "disabled:opacity-60",
        className,
      )}
      {...props}
    />
  ),
);
Fieldset.displayName = "Fieldset";

export const Legend = forwardRef<HTMLLegendElement, React.HTMLAttributes<HTMLLegendElement>>(
  ({ className, ...props }, ref) => (
    <legend
      ref={ref}
      className={cn("px-1 text-sm font-medium text-foreground", className)}
      {...props}
    />
  ),
);
Legend.displayName = "Legend";
