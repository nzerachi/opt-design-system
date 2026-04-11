import { useState } from "react";
import { Mail, User, DollarSign, Search as SearchIcon } from "lucide-react";
import { Input } from "../../inputs/Input";
import { TextArea } from "../../inputs/TextArea";
import { Select } from "../../inputs/Select";
import { Search } from "../../inputs/Search";
import { NumberInput } from "../../inputs/NumberInput";
import { PasswordInput } from "../../inputs/PasswordInput";
import { MultiSelect } from "../../inputs/MultiSelect";
import { Combobox } from "../../inputs/Combobox";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  KeyboardTable,
  AccessibilitySection,
  A11yPoint,
  AnatomyList,
  IC,
} from "./DocComponents";

const FRAMEWORK_OPTIONS = [
  { value: "react",   label: "React" },
  { value: "vue",     label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte",  label: "Svelte" },
  { value: "solid",   label: "SolidJS" },
  { value: "next",    label: "Next.js" },
  { value: "nuxt",    label: "Nuxt" },
];

export function InputsShowcase() {
  const [searchVal, setSearchVal] = useState("");
  const [numberVal, setNumberVal] = useState(42);
  const [multiVal, setMultiVal]   = useState<string[]>(["react"]);
  const [comboVal, setComboVal]   = useState("");

  return (
    <div className="space-y-16">
      <PageHeader
        title="Text Inputs"
        description="Input primitives handle all user data entry — text, passwords, searches, numbers, and multi-value selection. Every input supports labeling, validation states, and helper text out of the box."
        badges={[
          { label: "Stable",     color: "green" },
          { label: "Accessible", color: "blue"  },
          { label: "v1.0.0",     color: "gray"  },
        ]}
        importPath={`import { Input, TextArea, Select, Search, NumberInput, PasswordInput, MultiSelect, Combobox } from "@opticule/ds"`}
      />

      {/* ── Overview ─────────────────────────────────────────────── */}
      <DocSection title="Overview">
        <p className="text-sm text-foreground/60 leading-relaxed max-w-3xl">
          Opticule's input components share a consistent anatomy: a container, optional label, input area,
          optional icon or addon slots, and a message area below for validation feedback.
          All inputs are controlled or uncontrolled, forward refs, and wire up <IC>aria-describedby</IC> automatically
          when a label, helper text, or error message is present.
        </p>
        <AnatomyList items={[
          { number: 1, label: "Label",        description: "Optional. Includes a red asterisk when required." },
          { number: 2, label: "Left addon",   description: "Flush-attached text or element (e.g. 'https://')." },
          { number: 3, label: "Left icon",    description: "Icon inset within the input on the left." },
          { number: 4, label: "Input field",  description: "The native <input> with consistent padding and font." },
          { number: 5, label: "Right icon",   description: "Icon inset within the input on the right." },
          { number: 6, label: "Right addon",  description: "Flush-attached text or element (e.g. '.com')." },
          { number: 7, label: "Message area", description: "Error, success, warning, or helper text below the field." },
        ]} />
      </DocSection>

      {/* ── Usage ────────────────────────────────────────────────── */}
      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Input for free-form single-line text: names, email addresses, URLs, search terms." },
            { text: "Use TextArea for multi-line free text: descriptions, notes, comments." },
            { text: "Use Select when the option list is fixed and well-understood (fewer than ~15 options)." },
            { text: "Use Combobox when users may type to filter a long list or enter a custom value." },
            { text: "Use MultiSelect when multiple values from a predefined set are valid." },
            { text: "Use PasswordInput for all password fields — never use a plain Input with type='password' alone." },
            { text: "Always provide a label — visible or via aria-label. Placeholder text is not a substitute." },
          ]}
          avoid={[
            { text: "Don't use placeholder as the only label — it disappears on focus and has low contrast." },
            { text: "Don't combine addon and icon on the same side — the layout will conflict." },
            { text: "Don't show error state before the user has interacted with the field (use onBlur validation)." },
            { text: "Don't use Select for boolean choices — use a Switch or Checkbox instead." },
            { text: "Don't use NumberInput for freeform numeric data like credit cards or phone numbers." },
            { text: "Don't use Combobox when the full list must be authoritative — use Select instead." },
          ]}
        />
      </DocSection>

      {/* ── Input ────────────────────────────────────────────────── */}
      <DocSection title="Input" description="The core single-line text field. Supports sizes, states, icons, and addons.">
        <DemoBlock label="sizes" vertical>
          <Input size="sm" placeholder="Small input (sm)" />
          <Input size="md" placeholder="Medium input (md) — default" />
          <Input size="lg" placeholder="Large input (lg)" />
        </DemoBlock>
        <DemoBlock label="validation states" vertical>
          <Input placeholder="Default state" />
          <Input placeholder="With value" defaultValue="Nze Rachi" />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Read only" readOnly defaultValue="Read-only value" />
          <Input placeholder="Error state" error="This field is required." />
          <Input placeholder="Success state" success />
        </DemoBlock>
        <DemoBlock label="icons and addons" vertical>
          <Input placeholder="Search…"     leftIcon={<SearchIcon size={16} />} />
          <Input placeholder="your@email.com" leftIcon={<Mail size={16} />} type="email" />
          <Input placeholder="Username"    leftIcon={<User size={16} />} />
          <Input placeholder="Amount"      leftIcon={<DollarSign size={16} />} rightAddon=".00" />
          <Input placeholder="Domain"      leftAddon="https://" rightAddon=".com" />
        </DemoBlock>
        <p className="text-xs text-foreground/50 leading-relaxed">
          Addons (<IC>leftAddon</IC>, <IC>rightAddon</IC>) are flush-attached elements outside the input border.
          Icons (<IC>leftIcon</IC>, <IC>rightIcon</IC>) are positioned inside the input. Don't mix an addon
          and an icon on the same side.
        </p>
      </DocSection>

      {/* ── Password ─────────────────────────────────────────────── */}
      <DocSection title="Password Input" description="Password field with a show/hide toggle and optional password strength meter.">
        <DemoBlock label="default + with strength meter" vertical>
          <PasswordInput placeholder="Enter password" />
          <PasswordInput placeholder="Enter password" showStrength defaultValue="MyP@ssw0rd!" />
        </DemoBlock>
        <p className="text-xs text-foreground/50 leading-relaxed">
          The strength meter grades passwords on length, mixed case, numbers, and special characters.
          It is purely visual — apply your own validation rules via the <IC>error</IC> prop.
        </p>
      </DocSection>

      {/* ── Search ───────────────────────────────────────────────── */}
      <DocSection title="Search" description="Clearable search with keyboard shortcut hint and controlled value.">
        <DemoBlock label="controlled" vertical>
          <Search
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onClear={() => setSearchVal("")}
            placeholder="Search components…"
          />
          {searchVal && (
            <p className="text-sm text-foreground/60">
              Query: <span className="text-brand-orange">{searchVal}</span>
            </p>
          )}
        </DemoBlock>
      </DocSection>

      {/* ── Number Input ─────────────────────────────────────────── */}
      <DocSection title="Number Input" description="Numeric stepper with min, max, and step constraints. Values are clamped on blur.">
        <DemoBlock label="with controls" vertical>
          <NumberInput value={numberVal} onChange={setNumberVal} min={0} max={100} step={1}  label="Quantity" />
          <NumberInput value={numberVal} onChange={setNumberVal} min={0} max={100} step={5}  label="Step 5"   />
          <NumberInput value={numberVal} onChange={setNumberVal} min={0} max={100} step={10} label="Step 10"  />
        </DemoBlock>
      </DocSection>

      {/* ── TextArea ─────────────────────────────────────────────── */}
      <DocSection title="TextArea" description="Multi-line text field. Supports auto-resize, sizes, and validation states.">
        <DemoBlock label="sizes and states" vertical>
          <TextArea placeholder="Small textarea (sm)"          size="sm" rows={2} />
          <TextArea placeholder="Medium textarea — default"                rows={3} />
          <TextArea placeholder="Large textarea (lg)"          size="lg" rows={4} />
          <TextArea placeholder="Disabled"                     disabled  rows={2} />
          <TextArea placeholder="Error state"                  error="Bio is required." rows={2} />
          <TextArea placeholder="Auto-resize enabled"          autoResize rows={2} />
        </DemoBlock>
        <p className="text-xs text-foreground/50 leading-relaxed">
          When <IC>autoResize</IC> is true the textarea grows vertically as the user types,
          eliminating the need for a manual resize handle. Set <IC>rows</IC> to control the minimum height.
        </p>
      </DocSection>

      {/* ── Select ───────────────────────────────────────────────── */}
      <DocSection title="Select" description="Native HTML select with option groups, sizes, error state, and consistent styling.">
        <DemoBlock label="flat options, grouped, sizes, disabled" vertical>
          <Select
            className="w-64"
            placeholder="Pick a framework…"
            options={[
              { value: "react",   label: "React"   },
              { value: "vue",     label: "Vue"     },
              { value: "angular", label: "Angular" },
              { value: "svelte",  label: "Svelte"  },
            ]}
          />
          <Select
            className="w-64"
            placeholder="Grouped options…"
            groups={[
              { label: "Frontend", options: [{ value: "react", label: "React" }, { value: "vue", label: "Vue" }, { value: "svelte", label: "Svelte" }] },
              { label: "Backend",  options: [{ value: "express", label: "Express" }, { value: "fastify", label: "Fastify" }, { value: "nestjs", label: "NestJS" }] },
            ]}
          />
          <Select className="w-64" placeholder="Size: sm" size="sm" options={[{ value: "a", label: "Option A" }, { value: "b", label: "Option B" }]} />
          <Select className="w-64" placeholder="Size: lg" size="lg" options={[{ value: "a", label: "Option A" }, { value: "b", label: "Option B" }]} />
          <Select className="w-64" placeholder="Disabled select" disabled options={[{ value: "x", label: "Option" }]} />
          <Select className="w-64" placeholder="Error state" error="Please select an option." options={[{ value: "a", label: "Option A" }]} />
        </DemoBlock>
      </DocSection>

      {/* ── MultiSelect ──────────────────────────────────────────── */}
      <DocSection title="Multi Select" description="Checkbox-based multi-value picker with search filter and tag display.">
        <DemoBlock label="controlled" vertical>
          <div className="w-80">
            <MultiSelect
              options={FRAMEWORK_OPTIONS}
              value={multiVal}
              onChange={setMultiVal}
              placeholder="Select frameworks…"
            />
          </div>
          {multiVal.length > 0 && (
            <p className="text-sm text-foreground/60">
              Selected: <span className="text-brand-orange">{multiVal.join(", ")}</span>
            </p>
          )}
        </DemoBlock>
      </DocSection>

      {/* ── Combobox ─────────────────────────────────────────────── */}
      <DocSection title="Combobox" description="Filterable dropdown — users can type to narrow options or enter a free-form value.">
        <DemoBlock label="controlled" vertical>
          <div className="w-72">
            <Combobox
              options={FRAMEWORK_OPTIONS}
              value={comboVal}
              onChange={setComboVal}
              placeholder="Search or select…"
            />
          </div>
          {comboVal && (
            <p className="text-sm text-foreground/60">
              Value: <span className="text-brand-orange">{comboVal}</span>
            </p>
          )}
        </DemoBlock>
      </DocSection>

      {/* ── API ──────────────────────────────────────────────────── */}
      <DocSection title="API Reference">
        <PropsTable
          title="Input"
          rows={[
            { name: "label",            type: "string",                        description: "Visible label rendered above the input." },
            { name: "placeholder",      type: "string",                        description: "Placeholder text — never the sole label." },
            { name: "size",             type: `"sm" | "md" | "lg"`,            default: `"md"`,     description: "Height and font size tier." },
            { name: "error",            type: "string",                        description: "Error message shown below. Sets aria-invalid." },
            { name: "success",          type: "string | true",                 description: "Success message or boolean for success styling." },
            { name: "warning",          type: "string",                        description: "Warning message shown below." },
            { name: "helpText",         type: "string",                        description: "Neutral helper text when no validation message is active." },
            { name: "leftIcon",         type: "ReactNode",                     description: "Icon rendered inside the input on the left." },
            { name: "rightIcon",        type: "ReactNode",                     description: "Icon rendered inside the input on the right." },
            { name: "leftAddon",        type: "ReactNode",                     description: "Element attached flush to the left of the input border." },
            { name: "rightAddon",       type: "ReactNode",                     description: "Element attached flush to the right of the input border." },
            { name: "disabled",         type: "boolean",                       description: "Disables the field." },
            { name: "readOnly",         type: "boolean",                       description: "Field value is visible but not editable." },
            { name: "required",         type: "boolean",                       description: "Adds a red asterisk to the label and sets aria-required." },
            { name: "wrapperClassName", type: "string",                        description: "ClassName applied to the outer wrapper div." },
          ]}
        />
        <PropsTable
          title="PasswordInput"
          rows={[
            { name: "showStrength",  type: "boolean",            default: "false",   description: "Show a password strength meter below the field." },
            { name: "size",          type: `"sm" | "md" | "lg"`, default: `"md"`,    description: "Height and font size." },
            { name: "error",         type: "string",                                 description: "Error message." },
            { name: "description",   type: "string",                                 description: "Helper text shown below." },
            { name: "label",         type: "string",                                 description: "Label above the field." },
            { name: "required",      type: "boolean",                                description: "Marks field as required." },
          ]}
        />
        <PropsTable
          title="TextArea"
          rows={[
            { name: "size",        type: `"sm" | "md" | "lg"`, default: `"md"`,   description: "Font and padding size." },
            { name: "rows",        type: "number",              default: "4",      description: "Initial visible row count." },
            { name: "autoResize",  type: "boolean",             default: "false",  description: "Grow vertically as the user types." },
            { name: "error",       type: "string",                                 description: "Error message below the field." },
            { name: "label",       type: "string",                                 description: "Label above the field." },
          ]}
        />
        <PropsTable
          title="NumberInput"
          rows={[
            { name: "value",    type: "number",  required: true,  description: "Controlled value." },
            { name: "onChange", type: "(v: number) => void", required: true, description: "Called when value changes." },
            { name: "min",      type: "number",  description: "Minimum allowed value." },
            { name: "max",      type: "number",  description: "Maximum allowed value." },
            { name: "step",     type: "number",  default: "1",    description: "Increment/decrement amount." },
            { name: "label",    type: "string",  description: "Label above the input." },
            { name: "disabled", type: "boolean", description: "Disables all interaction." },
          ]}
        />
      </DocSection>

      {/* ── Keyboard ─────────────────────────────────────────────── */}
      <DocSection title="Keyboard Interaction">
        <KeyboardTable rows={[
          { key: "Tab",           description: "Move focus to the next focusable element." },
          { key: "Shift + Tab",   description: "Move focus to the previous focusable element." },
          { key: "Escape",        description: "Clear the search field (Search component only)." },
          { key: "↑ / ↓",         description: "Increment / decrement NumberInput value by one step." },
          { key: "Enter",         description: "Submit a form containing the focused input." },
        ]} />
      </DocSection>

      {/* ── Accessibility ────────────────────────────────────────── */}
      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>All inputs wire <IC>aria-describedby</IC> to their label, helper text, and message elements automatically when those props are provided.</A11yPoint>
          <A11yPoint>Error state sets <IC>aria-invalid="true"</IC> on the native input element so screen readers announce the invalid status.</A11yPoint>
          <A11yPoint>The <IC>required</IC> prop sets both the visible asterisk and <IC>aria-required="true"</IC>.</A11yPoint>
          <A11yPoint>PasswordInput's show/hide toggle has an <IC>aria-label</IC> that reflects the current state ("Show password" / "Hide password").</A11yPoint>
          <A11yPoint>Search's clear button is <IC>aria-label="Clear search"</IC> and only focusable when a value is present.</A11yPoint>
          <A11yPoint>NumberInput's stepper buttons have explicit <IC>aria-label</IC> values ("Increment" / "Decrement") and are keyboard-operable.</A11yPoint>
          <A11yPoint>All inputs meet WCAG 2.1 AA 3:1 contrast requirement for the input border against the background in both light and dark modes.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
