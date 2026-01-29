import { Code, FileText, GitBranch, CheckCircle } from "lucide-react";

interface GovernanceSectionProps {
  activeSubSection: string;
}

export function GovernanceSection({
  activeSubSection,
}: GovernanceSectionProps) {
  if (activeSubSection === "code-implementation") {
    return <CodeImplementation />;
  }

  if (activeSubSection === "usage-guidelines") {
    return <UsageGuidelines />;
  }

  if (activeSubSection === "contribution") {
    return <ContributionModel />;
  }

  return null;
}

function CodeImplementation() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Code Implementation</h1>
        <p className="text-lg text-foreground/75">
          Technical guidelines for implementing the design system in code
        </p>
      </div>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">React + TypeScript</h3>
            <p className="text-sm text-foreground/75">
              Component library built with React 18+ and TypeScript for type
              safety
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Tailwind CSS v4</h3>
            <p className="text-sm text-foreground/75">
              Utility-first CSS framework with custom design tokens
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Lucide React Icons</h3>
            <p className="text-sm text-foreground/75">
              Consistent icon library with 1000+ icons
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Installation</h2>
        <div className="border border-border rounded-lg p-6 bg-muted-light">
          <h3 className="font-bold mb-4">Install Dependencies</h3>
          <div className="bg-background rounded p-4 font-mono text-sm mb-4">
            <code className="text-brand-folly">npm install</code>{" "}
            tailwindcss@latest react lucide-react
          </div>
          <h3 className="font-bold mb-4 mt-6">Import Global Styles</h3>
          <div className="bg-background rounded p-4 font-mono text-sm">
            <code className="text-blue-600">import</code>{" "}
            <code className="text-yellow-600">'./styles/globals.css'</code>;
          </div>
        </div>
      </section>

      {/* Design Tokens */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Design Tokens</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light p-4 border-b border-border">
            <p className="text-sm font-mono">/styles/globals.css</p>
          </div>
          <div className="p-6 bg-background">
            <pre className="text-sm overflow-x-auto">
              <code>{`:root {
  /* Brand Colors */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-dark-gray: #121212;
  --color-gray: #808080;
  --color-light-gray: #F5F5F5;
  
  /* Accent Colors */
  --color-accent-orange: #FF8000;
  --color-accent-folly: #FF004F;
  --color-accent-purple: #CC33FF;
  
  /* Semantic Tokens */
  --color-background: var(--color-white);
  --color-foreground: var(--color-black);
  --color-muted: var(--color-light-gray);
  --color-border: rgba(0, 0, 0, 0.1);
  
  /* Typography */
  --font-family: 'Ubuntu', sans-serif;
  
  /* Spacing (8pt grid) */
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  
  /* Border Radius */
  --radius: 8px;
}

.dark {
  --color-background: var(--color-dark-gray);
  --color-foreground: var(--color-light-gray);
  --color-muted: #1F1F1F;
  --color-border: rgba(255, 255, 255, 0.1);
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Component Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Component Example</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light p-4 border-b border-border">
            <p className="text-sm font-mono">Button.tsx</p>
          </div>
          <div className="p-6 bg-background">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-all';
  
  const variants = {
    primary: 'bg-foreground text-background hover:opacity-90',
    secondary: 'border-2 border-foreground hover:bg-foreground hover:text-background',
    gradient: 'bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Accessibility Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">Semantic HTML</h3>
            <pre className="text-xs bg-muted-light p-3 rounded overflow-x-auto">
              <code>{`<nav>
  <ul>
    <li><a href="#">Link</a></li>
  </ul>
</nav>

<button type="button">
  Click me
</button>

<main>
  <article>Content</article>
</main>`}</code>
            </pre>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">ARIA Labels</h3>
            <pre className="text-xs bg-muted-light p-3 rounded overflow-x-auto">
              <code>{`<button aria-label="Close">
  <X className="w-4 h-4" />
</button>

<div role="alert">
  Error message
</div>

<input 
  aria-describedby="help"
  aria-invalid={hasError}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

function UsageGuidelines() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Usage Guidelines</h1>
        <p className="text-lg text-foreground/75">
          Best practices for using the design system effectively
        </p>
      </div>

      {/* When to Use */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Component Selection</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-sm text-sm">
            <thead className="bg-muted-light border-b border-border">
              <tr>
                <th className="text-left p-4 font-bold">Component</th>
                <th className="text-left p-4 font-bold">When to Use</th>
                <th className="text-left p-4 font-bold">When NOT to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 font-medium">Primary Button</td>
                <td className="p-4 text-foreground/75">
                  Main action on a page (max 1-2)
                </td>
                <td className="p-4 text-foreground/75">
                  Multiple actions, navigation links
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Gradient Button</td>
                <td className="p-4 text-foreground/75">
                  Highest priority conversion action
                </td>
                <td className="p-4 text-foreground/75">
                  Anywhere else - use very sparingly
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Card</td>
                <td className="p-4 text-foreground/75">
                  Grouping related content
                </td>
                <td className="p-4 text-foreground/75">
                  Long-form text, full pages
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Alert</td>
                <td className="p-4 text-foreground/75">
                  Important feedback or warnings
                </td>
                <td className="p-4 text-foreground/75">
                  General information, permanent content
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Modal</td>
                <td className="p-4 text-foreground/75">
                  Critical decisions, focused tasks
                </td>
                <td className="p-4 text-foreground/75">
                  Primary content, navigation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Color Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Color Usage Rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Do</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Use neutrals (90-95% of UI)</li>
              <li>• Reserve accents for CTAs and alerts</li>
              <li>• Test all color combinations for contrast</li>
              <li>• Use gradient max once per page</li>
              <li>• Follow semantic meaning (red=error, magenta=success)</li>
            </ul>
          </div>
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <CheckCircle className="w-5 h-5 rotate-45" />
              <span className="font-bold">Don't</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Don't overuse accent colors</li>
              <li>• Don't rely on color alone for meaning</li>
              <li>• Don't use gradient in logos/icons</li>
              <li>• Don't create new colors without approval</li>
              <li>• Don't use low-contrast combinations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Spacing Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Spacing Guidelines</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-bold mb-2">Component Padding</h4>
              <p className="text-sm text-foreground/75">
                Use 16px (1rem) or 24px (1.5rem) for internal spacing
              </p>
              <div className="mt-2 p-4 bg-muted-light hatch-brand-orange rounded border-2 border-brand-orange">
                <div className="bg-background p-4 rounded border-2 border-brand-orange">Content</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Section Spacing</h4>
              <p className="text-sm text-foreground/75">
                Use 48px (3rem) or 64px (4rem) between major sections
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Element Gaps</h4>
              <p className="text-sm text-foreground/75">
                Use 8px (0.5rem) to 16px (1rem) between related elements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Common Mistakes to Avoid</h2>
        <div className="space-y-4">
          {[
            {
              mistake: "Using too many font sizes",
              solution: "Stick to the type scale. Maximum 4-5 sizes per page.",
            },
            {
              mistake: "Inconsistent button styling",
              solution:
                "Use the defined button variants. Don't create custom styles.",
            },
            {
              mistake: "Cramped layouts on mobile",
              solution:
                "Increase padding/spacing on small screens. Touch targets 44px minimum.",
            },
            {
              mistake: "Missing focus states",
              solution:
                "Ensure all interactive elements have visible focus indicators.",
            },
            {
              mistake: "Gradient overuse",
              solution:
                "Limit gradient to 1 element max per screen. It loses impact when overused.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-border rounded-lg p-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-destructive/20 text-destructive flex items-center justify-center shrink-0 text-xs font-bold">
                  !
                </div>
                <div className="flex-1">
                  <p className="font-bold mb-1">{item.mistake}</p>
                  <p className="text-sm text-foreground/75">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContributionModel() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Contribution Model</h1>
        <p className="text-lg text-foreground/75">
          How to propose changes, add components, and extend the design system
        </p>
      </div>

      {/* Process Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Contribution Process</h2>
        <div className="border border-border rounded-lg p-8">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Identify the Need</h3>
                <p className="text-sm text-foreground/75">
                  Document the use case. Why is this new component or pattern
                  needed? What problem does it solve?
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Check Existing Solutions</h3>
                <p className="text-sm text-foreground/75">
                  Review the current design system. Can an existing component be
                  adapted? Avoid duplication.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Propose the Change</h3>
                <p className="text-sm text-foreground/75">
                  Create a proposal with mockups, use cases, and accessibility
                  considerations. Share with the design team.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Review & Iterate</h3>
                <p className="text-sm text-foreground/75">
                  Gather feedback from designers, developers, and stakeholders.
                  Refine based on input.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Implement & Document</h3>
                <p className="text-sm text-foreground/75">
                  Build the component, write tests, create documentation, and
                  update this design system guide.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-2">Publish & Communicate</h3>
                <p className="text-sm text-foreground/75">
                  Release the new component. Announce to the team with examples
                  and migration guides if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Roles & Responsibilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <GitBranch className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Design System Team</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>• Maintain core components</li>
              <li>• Review proposals</li>
              <li>• Update documentation</li>
              <li>• Ensure consistency</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <FileText className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Product Designers</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>• Use existing components</li>
              <li>• Propose new patterns</li>
              <li>• Provide feedback</li>
              <li>• Ensure accessibility</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <Code className="w-8 h-8 mb-3" />
            <h3 className="font-bold mb-2">Engineers</h3>
            <ul className="space-y-1 text-sm text-foreground/75">
              <li>• Implement components</li>
              <li>• Report bugs</li>
              <li>• Suggest improvements</li>
              <li>• Write tests</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Version Control */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Version Control</h2>
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-bold mb-4">Semantic Versioning</h3>
          <p className="text-sm text-foreground/75 mb-4">
            The design system follows semantic versioning:{" "}
            <code className="bg-muted-light px-2 py-1 rounded">
              MAJOR.MINOR.PATCH
            </code>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="font-bold mb-2">MAJOR (1.x.x)</p>
              <p className="text-sm text-foreground/75">
                Breaking changes that require code updates
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">MINOR (x.1.x)</p>
              <p className="text-sm text-foreground/75">
                New features, backwards compatible
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">PATCH (x.x.1)</p>
              <p className="text-sm text-foreground/75">
                Bug fixes, small improvements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Getting Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">Questions?</h3>
            <p className="text-sm text-foreground/75 mb-4">
              If you have questions about using the design system, reach out to:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• #design-system Slack channel</li>
              <li>• design-system@opticule.com</li>
              <li>• Weekly office hours (Fridays 2pm)</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold mb-3">Found a Bug?</h3>
            <p className="text-sm text-foreground/75 mb-4">
              Report issues through our tracking system:
            </p>
            <ul className="space-y-2 text-sm">
              <li>• GitHub Issues (design-system repo)</li>
              <li>• Include: component, browser, screenshot</li>
              <li>• Tag with severity label</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
