import { CheckCircle } from "lucide-react";

export function PrinciplesSection() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Foundational Principles</h1>
        <p className="text-lg text-foreground/75">
          Core values that guide all design and product decisions at Opticule
        </p>
      </div>

      {/* Design Principles */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-3">Design Principles</h2>
          <p className="text-foreground/75">
            Guiding values for all UI and UX decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Clarity",
              description:
                "Every interface element should be immediately understandable. We prioritize clear communication over decorative flourishes.",
            },
            {
              title: "Efficiency",
              description:
                "Minimize cognitive load and physical effort. Reduce steps, anticipate needs, and streamline workflows.",
            },
            {
              title: "Trust",
              description:
                "Build confidence through consistency, reliability, and transparency. Handle sensitive data with care.",
            },
            {
              title: "Accessibility",
              description:
                "Design for everyone, regardless of ability. Meet WCAG 2.2 standards and go beyond when possible.",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              className="border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-foreground/75">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-3">Brand Values</h2>
          <p className="text-foreground/75">
            The personality and voice that defines Opticule
          </p>
        </div>

        <div className="border-l-4 border-foreground pl-6 py-4">
          <h3 className="text-2xl font-bold mb-3">
            Your trusted partner for eye care
          </h3>
          <p className="text-foreground/75">
            This tagline encapsulates our commitment to being reliable, caring,
            and expert-driven in everything we do.
          </p>
        </div>

        <div className="border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Voice & Tone</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-bold mb-3 text-sm">We are:</p>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>• Friendly yet professional</li>
                <li>• Reassuring without patronizing</li>
                <li>• Educational and helpful</li>
                <li>• Clear and actionable</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3 text-sm">We are not:</p>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>• Overly technical or jargon-heavy</li>
                <li>• Pushy or sales-driven</li>
                <li>• Cute or overly casual</li>
                <li>• Cold or impersonal</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-3 text-sm">Example phrases:</p>
              <ul className="space-y-2 text-sm text-foreground/75">
                <li>• "Get started"</li>
                <li>• "Protect your vision"</li>
                <li>• "Find the perfect pair"</li>
                <li>• "We're here to help"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Standards */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-3">Accessibility Standards</h2>
          <p className="text-foreground/75">
            WCAG 2.2 Level AA compliance and beyond
          </p>
        </div>

        <div className="bg-muted-light rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
          <p className="text-foreground/75 mb-4">
            Every component, pattern, and screen we design must be usable by
            everyone, regardless of visual, auditory, motor, or cognitive
            ability. Accessibility is not an afterthought—it's a foundational
            requirement.
          </p>
          <p className="text-sm text-foreground/75">
            <strong>Compliance Target:</strong> WCAG 2.2 Level AA (with Level
            AAA where feasible)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#CC33FF]" />
              <h3 className="font-bold">Color Contrast</h3>
            </div>
            <p className="text-sm text-foreground/75">
              Minimum 4.5:1 for text, 3:1 for UI components
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-white rounded border">
                <span className="text-black">Black on White</span>
                <span className="text-[#CC33FF] font-mono">21:1 ✓</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[#121212] rounded">
                <span className="text-[#F5F5F5]">Off-white on Dark Gray</span>
                <span className="text-[#CC33FF] font-mono">18.5:1 ✓</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white rounded border">
                <span className="text-[#808080]">Gray on White</span>
                <span className="text-[#CC33FF] font-mono">4.6:1 ✓</span>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#CC33FF]" />
              <h3 className="font-bold">Keyboard Navigation</h3>
            </div>
            <p className="text-sm text-foreground/75">
              All interactive elements must be keyboard accessible
            </p>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>
                •{" "}
                <kbd className="px-1.5 py-0.5 bg-muted-light rounded text-xs">
                  Tab
                </kbd>{" "}
                moves focus forward
              </li>
              <li>
                •{" "}
                <kbd className="px-1.5 py-0.5 bg-muted-light rounded text-xs">
                  Shift+Tab
                </kbd>{" "}
                moves focus backward
              </li>
              <li>
                •{" "}
                <kbd className="px-1.5 py-0.5 bg-muted-light rounded text-xs">
                  Enter
                </kbd>
                /
                <kbd className="px-1.5 py-0.5 bg-muted-light rounded text-xs">
                  Space
                </kbd>{" "}
                activates buttons
              </li>
              <li>
                •{" "}
                <kbd className="px-1.5 py-0.5 bg-muted-light rounded text-xs">
                  Esc
                </kbd>{" "}
                closes modals/dropdowns
              </li>
              <li>
                •{" "}
                <kbd className="px-1.5 py-0.5 bg-muted-light rounded text-xs">
                  Arrow keys
                </kbd>{" "}
                navigate menus
              </li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#CC33FF]" />
              <h3 className="font-bold">Screen Readers</h3>
            </div>
            <p className="text-sm text-foreground/75">
              Semantic HTML and ARIA labels for assistive technologies
            </p>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>• Use semantic HTML tags</li>
              <li>• Provide meaningful alt text for images</li>
              <li>• Label all form inputs properly</li>
              <li>• Use ARIA live regions for dynamic content</li>
              <li>• Test with NVDA, JAWS, and VoiceOver</li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#CC33FF]" />
              <h3 className="font-bold">Touch Targets</h3>
            </div>
            <p className="text-sm text-foreground/75">
              Minimum 44×44px for mobile interactions
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-11 h-11 border-2 border-[#CC33FF] rounded flex items-center justify-center">
                <span className="text-xs font-mono">44px</span>
              </div>
              <p className="text-xs text-foreground/75">
                Adequate spacing prevents accidental taps and supports users
                with motor impairments
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-sm">Focus Indicators</h4>
            <p className="text-xs text-foreground/75">
              Visible focus states with 2px outline, 4.5:1 contrast
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-sm">Text Resize</h4>
            <p className="text-xs text-foreground/75">
              Layouts must work at 200% zoom without horizontal scroll
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-sm">Error Messages</h4>
            <p className="text-xs text-foreground/75">
              Don't rely on color alone; use icons and text
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-sm">Animation</h4>
            <p className="text-xs text-foreground/75">
              Respect prefers-reduced-motion for users with vestibular disorders
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-sm">Forms</h4>
            <p className="text-xs text-foreground/75">
              Clear labels, helpful error messages, autocomplete attributes
            </p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h4 className="font-bold mb-2 text-sm">Language</h4>
            <p className="text-xs text-foreground/75">
              Set{" "}
              <code className="text-xs bg-muted-light px-1 rounded">lang</code>{" "}
              attribute for screen readers
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
