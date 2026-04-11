import { useState } from "react";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { Checkbox } from "../../inputs/Checkbox";
import { Switch } from "../../inputs/Switch";
import { RadioGroup, RadioGroupItem } from "../../inputs/RadioGroup";
import { Slider } from "../../inputs/Slider";
import { Toggle, ToggleGroup, ToggleGroupItem } from "../../inputs/Toggle";
import {
  PageHeader,
  DocSection,
  DemoBlock,
  UsageBlock,
  PropsTable,
  KeyboardTable,
  AccessibilitySection,
  A11yPoint,
  IC,
} from "./DocComponents";

export function SelectionShowcase() {
  const [sliderSingle, setSliderSingle] = useState([40]);
  const [sliderRange, setSliderRange]   = useState([20, 75]);
  const [radioVal, setRadioVal]         = useState("option-b");

  return (
    <div className="space-y-16">
      <PageHeader
        title="Selection Controls"
        description="Components for making choices — binary toggles, single selections, multiple selections, and continuous value pickers. Each maps to a specific interaction model and data type."
        badges={[
          { label: "Stable",     color: "green" },
          { label: "Accessible", color: "blue"  },
          { label: "v1.0.0",     color: "gray"  },
        ]}
        importPath={`import { Checkbox, Switch, RadioGroup, Slider, Toggle, ToggleGroup } from "@opticule/ds"`}
      />

      {/* ── Usage ────────────────────────────────────────────────── */}
      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Use Checkbox for binary opt-in/opt-out choices, especially in lists." },
            { text: "Use Switch for settings that take effect immediately without a 'Save' step." },
            { text: "Use RadioGroup when only one option from a small set is valid." },
            { text: "Use Slider for continuous numeric values where the exact number is less important than the range." },
            { text: "Use Toggle for on/off states on toolbar actions (bold, italic, filter active)." },
            { text: "Use ToggleGroup when multiple options can be active simultaneously (multi-format)." },
          ]}
          avoid={[
            { text: "Don't use Switch when a 'Save' button is required — the visual implies instant effect." },
            { text: "Don't use RadioGroup for more than 6 options — use Select or Combobox instead." },
            { text: "Don't use Checkbox for mutually exclusive choices — use RadioGroup instead." },
            { text: "Don't use Slider when an exact numeric value is required — use NumberInput." },
            { text: "Don't use Toggle without an aria-label — icon-only toggles are invisible to screen readers." },
          ]}
        />
      </DocSection>

      {/* ── Checkbox ─────────────────────────────────────────────── */}
      <DocSection title="Checkbox" description="Binary selection control. Supports indeterminate state, descriptions, and error messages.">
        <DemoBlock label="sizes" vertical>
          <Checkbox size="sm" label="Small checkbox" />
          <Checkbox size="md" label="Medium checkbox — default" />
          <Checkbox size="lg" label="Large checkbox" />
        </DemoBlock>
        <DemoBlock label="states" vertical>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled unchecked" disabled />
          <Checkbox label="Disabled checked" disabled defaultChecked />
          <Checkbox label="With description" description="Optional helper text that elaborates on the choice." />
          <Checkbox label="With error" error="You must accept the terms to continue." />
        </DemoBlock>
        <DemoBlock label="practical — subscription preferences" vertical>
          <Checkbox label="Product updates"   description="New features and releases"           defaultChecked />
          <Checkbox label="Security alerts"   description="Important account security notices"  defaultChecked />
          <Checkbox label="Marketing emails"  description="Promotions and special offers" />
          <Checkbox label="Newsletter"        description="Weekly digest of top content" />
        </DemoBlock>
        <PropsTable
          title="Checkbox props"
          rows={[
            { name: "label",         type: "string",                    description: "Visible label beside the checkbox." },
            { name: "description",   type: "string",                    description: "Secondary helper text below the label." },
            { name: "error",         type: "string",                    description: "Error message — shown in red below." },
            { name: "size",          type: `"sm" | "md" | "lg"`,        default: `"md"`,  description: "Checkbox and label size." },
            { name: "indeterminate", type: "boolean",                   default: "false", description: "Shows a dash to indicate a partially-checked parent." },
            { name: "checked",       type: "boolean",                   description: "Controlled checked state." },
            { name: "defaultChecked",type: "boolean",                   description: "Uncontrolled initial checked state." },
            { name: "disabled",      type: "boolean",                   description: "Disables interaction." },
            { name: "onChange",      type: "(checked: boolean) => void",description: "Called when the checked state changes." },
          ]}
        />
      </DocSection>

      {/* ── Switch ───────────────────────────────────────────────── */}
      <DocSection title="Switch" description="Toggle for settings and preferences that take effect immediately.">
        <DemoBlock label="sizes and states" vertical>
          <Switch size="sm" label="Small switch" />
          <Switch size="md" label="Medium switch — default" defaultChecked />
          <Switch size="lg" label="Large switch" />
          <Switch label="Disabled off" disabled />
          <Switch label="Disabled on" disabled defaultChecked />
          <Switch label="With description" description="Enables real-time sync across devices" defaultChecked />
        </DemoBlock>
        <DemoBlock label="practical — settings panel" vertical>
          <div className="w-full max-w-sm space-y-3">
            {[
              { label: "Dark mode",     desc: "Use dark color scheme",     on: true  },
              { label: "Notifications", desc: "Push alerts for activity",  on: true  },
              { label: "Auto-save",     desc: "Save changes automatically", on: false },
              { label: "Analytics",     desc: "Share usage data",           on: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-xs text-foreground/50">{item.desc}</p>
                </div>
                <Switch defaultChecked={item.on} />
              </div>
            ))}
          </div>
        </DemoBlock>
        <PropsTable
          title="Switch props"
          rows={[
            { name: "label",        type: "string",                    description: "Visible label beside the switch." },
            { name: "description",  type: "string",                    description: "Secondary helper text." },
            { name: "size",         type: `"sm" | "md" | "lg"`,        default: `"md"`,  description: "Switch track and thumb size." },
            { name: "checked",      type: "boolean",                   description: "Controlled checked state." },
            { name: "defaultChecked",type: "boolean",                  description: "Uncontrolled initial state." },
            { name: "disabled",     type: "boolean",                   description: "Disables interaction." },
            { name: "onChange",     type: "(checked: boolean) => void",description: "Called when the state changes." },
          ]}
        />
      </DocSection>

      {/* ── Radio Group ──────────────────────────────────────────── */}
      <DocSection title="Radio Group" description="Single-selection from a small set of mutually exclusive options.">
        <DemoBlock label="vertical (default)">
          <RadioGroup value={radioVal} onValueChange={setRadioVal} orientation="vertical">
            <RadioGroupItem value="option-a" label="Option A" description="First choice" />
            <RadioGroupItem value="option-b" label="Option B" description="Second choice (default)" />
            <RadioGroupItem value="option-c" label="Option C" description="Third choice" />
            <RadioGroupItem value="option-d" label="Disabled option" disabled />
          </RadioGroup>
          <p className="text-sm text-foreground/50 mt-2">Selected: <span className="text-brand-orange">{radioVal}</span></p>
        </DemoBlock>
        <DemoBlock label="horizontal">
          <RadioGroup defaultValue="monthly" orientation="horizontal">
            <RadioGroupItem value="monthly"  label="Monthly" />
            <RadioGroupItem value="annual"   label="Annual"   description="Save 20%" />
            <RadioGroupItem value="lifetime" label="Lifetime" />
          </RadioGroup>
        </DemoBlock>
        <DemoBlock label="sizes">
          <div className="flex flex-col gap-4 w-full">
            <RadioGroup defaultValue="sm" orientation="horizontal">
              <RadioGroupItem value="sm" label="Small (sm)" size="sm" />
              <RadioGroupItem value="md" label="Medium (md)" size="md" />
              <RadioGroupItem value="lg" label="Large (lg)" size="lg" />
            </RadioGroup>
          </div>
        </DemoBlock>
        <PropsTable
          title="RadioGroup props"
          rows={[
            { name: "value",         type: "string",                      description: "Controlled selected value." },
            { name: "defaultValue",  type: "string",                      description: "Uncontrolled initial value." },
            { name: "onValueChange", type: "(value: string) => void",     description: "Called when selection changes." },
            { name: "orientation",   type: `"vertical" | "horizontal"`,   default: `"vertical"`, description: "Layout direction." },
          ]}
        />
        <PropsTable
          title="RadioGroupItem props"
          rows={[
            { name: "value",       type: "string",  required: true, description: "Unique value for this option." },
            { name: "label",       type: "string",                  description: "Visible label." },
            { name: "description", type: "string",                  description: "Secondary descriptive text." },
            { name: "size",        type: `"sm" | "md" | "lg"`,      default: `"md"`, description: "Radio button and label size." },
            { name: "disabled",    type: "boolean",                 description: "Disables this item only." },
          ]}
        />
      </DocSection>

      {/* ── Slider ───────────────────────────────────────────────── */}
      <DocSection title="Slider" description="Continuous value picker with single thumb or two-thumb range. Built on Radix Slider.">
        <DemoBlock label="single value" vertical>
          <div className="w-full max-w-sm space-y-1">
            <div className="flex justify-between text-xs text-foreground/50">
              <span>Volume</span>
              <span>{sliderSingle[0]}%</span>
            </div>
            <Slider value={sliderSingle} onValueChange={setSliderSingle} max={100} step={1} />
          </div>
        </DemoBlock>
        <DemoBlock label="range (two thumbs)" vertical>
          <div className="w-full max-w-sm space-y-1">
            <div className="flex justify-between text-xs text-foreground/50">
              <span>Price range</span>
              <span>${sliderRange[0]} – ${sliderRange[1]}</span>
            </div>
            <Slider value={sliderRange} onValueChange={setSliderRange} max={100} step={5} />
          </div>
        </DemoBlock>
        <DemoBlock label="with value label + tick marks" vertical>
          <div className="w-full max-w-sm">
            <Slider defaultValue={[3]} max={5} step={1} showValue showTicks formatValue={(v) => `${v} stars`} />
          </div>
        </DemoBlock>
        <DemoBlock label="sizes" vertical>
          <div className="w-full max-w-sm space-y-4">
            <Slider defaultValue={[30]} size="sm" />
            <Slider defaultValue={[50]} size="md" />
            <Slider defaultValue={[70]} size="lg" />
          </div>
        </DemoBlock>
        <PropsTable
          title="Slider props"
          rows={[
            { name: "value",        type: "number[]",                description: "Controlled value (one or two elements for range)." },
            { name: "defaultValue", type: "number[]",                description: "Uncontrolled initial value." },
            { name: "onValueChange",type: "(value: number[]) => void", description: "Called on every thumb move." },
            { name: "min",          type: "number",  default: "0",   description: "Minimum value." },
            { name: "max",          type: "number",  default: "100", description: "Maximum value." },
            { name: "step",         type: "number",  default: "1",   description: "Snap interval." },
            { name: "size",         type: `"sm" | "md" | "lg"`,      default: `"md"`, description: "Track height." },
            { name: "showValue",    type: "boolean", default: "false", description: "Display the current value above the track." },
            { name: "showTicks",    type: "boolean", default: "false", description: "Show tick marks along the track." },
            { name: "formatValue",  type: "(v: number) => string",   description: "Custom formatter for the displayed value." },
            { name: "disabled",     type: "boolean",                 description: "Disables interaction." },
          ]}
        />
      </DocSection>

      {/* ── Toggle ───────────────────────────────────────────────── */}
      <DocSection title="Toggle & Toggle Group" description="Toolbar-style on/off buttons. ToggleGroup supports single or multiple active items.">
        <DemoBlock label="standalone toggle variants">
          <Toggle variant="default" aria-label="Bold">    <Bold      size={16} /></Toggle>
          <Toggle variant="outline" aria-label="Italic">  <Italic    size={16} /></Toggle>
          <Toggle variant="ghost"   aria-label="Underline"><Underline size={16} /></Toggle>
        </DemoBlock>
        <DemoBlock label="toggle group — single selection">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left"   aria-label="Align left">   <AlignLeft   size={16} /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"> <AlignCenter size={16} /></ToggleGroupItem>
            <ToggleGroupItem value="right"  aria-label="Align right">  <AlignRight  size={16} /></ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <DemoBlock label="toggle group — multi-selection (text formatting)">
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold"      aria-label="Bold">     <Bold      size={16} /></ToggleGroupItem>
            <ToggleGroupItem value="italic"    aria-label="Italic">   <Italic    size={16} /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><Underline size={16} /></ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <DemoBlock label="toggle group sizes">
          <ToggleGroup type="single" defaultValue="a" size="sm">
            <ToggleGroupItem value="a">Sm</ToggleGroupItem>
            <ToggleGroupItem value="b">Sm</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" defaultValue="a" size="md">
            <ToggleGroupItem value="a">Md</ToggleGroupItem>
            <ToggleGroupItem value="b">Md</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" defaultValue="a" size="lg">
            <ToggleGroupItem value="a">Lg</ToggleGroupItem>
            <ToggleGroupItem value="b">Lg</ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <PropsTable
          title="Toggle props"
          rows={[
            { name: "pressed",        type: "boolean",                    description: "Controlled pressed state." },
            { name: "defaultPressed", type: "boolean",                    description: "Uncontrolled initial state." },
            { name: "onPressedChange",type: "(pressed: boolean) => void", description: "Called when pressed state changes." },
            { name: "variant",        type: `"default" | "outline" | "ghost"`, default: `"default"`, description: "Visual style." },
            { name: "size",           type: `"sm" | "md" | "lg"`,         default: `"md"`, description: "Button dimensions." },
            { name: "disabled",       type: "boolean",                    description: "Disables interaction." },
          ]}
        />
        <PropsTable
          title="ToggleGroup props"
          rows={[
            { name: "type",           type: `"single" | "multiple"`, required: true, description: "Single allows one active item; multiple allows many." },
            { name: "value",          type: "string | string[]",      description: "Controlled active value(s)." },
            { name: "defaultValue",   type: "string | string[]",      description: "Uncontrolled initial value(s)." },
            { name: "onValueChange",  type: "(value) => void",        description: "Called when selection changes." },
            { name: "size",           type: `"sm" | "md" | "lg"`,    default: `"md"`, description: "Applied to all items in the group." },
          ]}
        />
      </DocSection>

      {/* ── Keyboard ─────────────────────────────────────────────── */}
      <DocSection title="Keyboard Interaction">
        <KeyboardTable rows={[
          { key: "Space",        description: "Toggle a Checkbox, Switch, or Toggle button." },
          { key: "↑ / ↓ or ← / →", description: "Move focus between RadioGroup items or ToggleGroup items." },
          { key: "Tab",          description: "Move focus to the next focusable element." },
          { key: "← / →",        description: "Adjust a Slider value by one step." },
          { key: "Home",         description: "Set a Slider to its minimum value." },
          { key: "End",          description: "Set a Slider to its maximum value." },
        ]} />
      </DocSection>

      {/* ── Accessibility ────────────────────────────────────────── */}
      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Checkbox uses a native <IC>&lt;input type="checkbox"&gt;</IC> — screenreaders announce its label, checked state, and any <IC>aria-describedby</IC> description automatically.</A11yPoint>
          <A11yPoint>Indeterminate checkbox sets <IC>aria-checked="mixed"</IC> so screen readers correctly announce the partial state.</A11yPoint>
          <A11yPoint>Switch uses <IC>role="switch"</IC> with <IC>aria-checked</IC> to convey the on/off state to assistive technologies.</A11yPoint>
          <A11yPoint>RadioGroup uses <IC>role="radiogroup"</IC> with each item as <IC>role="radio"</IC>. Arrow keys move selection; Tab moves focus out of the group.</A11yPoint>
          <A11yPoint>Slider sets <IC>role="slider"</IC> with <IC>aria-valuemin</IC>, <IC>aria-valuemax</IC>, <IC>aria-valuenow</IC>, and <IC>aria-valuetext</IC> (via <IC>formatValue</IC>) on each thumb.</A11yPoint>
          <A11yPoint>Toggle and ToggleGroup items use <IC>aria-pressed</IC> (single toggle) or <IC>aria-checked</IC> within a <IC>role="group"</IC> to communicate state.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
