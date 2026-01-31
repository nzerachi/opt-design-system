import {
  CheckCircle,
  XCircle,
  Eye,
  User,
  Search,
  ShoppingCart,
  Heart,
  Star,
  Bell,
  Settings,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  Package,
  CreditCard,
  Home,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Download,
  Upload,
  Share2,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  Filter,
  RefreshCw,
  Zap,
  Shield,
  Lock,
  Unlock,
  Image as ImageIcon,
  Video,
  File,
  Folder,
} from "lucide-react";
import Symbol from "../../assets/symbol";

interface FoundationsSectionProps {
  activeSubSection: string;
}

export function FoundationsSection({
  activeSubSection,
}: FoundationsSectionProps) {
  if (activeSubSection === "colors") {
    return <ColorSystem />;
  }

  if (activeSubSection === "typography") {
    return <Typography />;
  }

  if (activeSubSection === "iconography") {
    return <Iconography />;
  }

  if (activeSubSection === "imagery") {
    return <Imagery />;
  }

  if (activeSubSection === "spacing") {
    return <SpacingGrid />;
  }

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold">Design Foundations</h1>
      <p className="text-lg text-foreground/75">
        Select a subsection to view details
      </p>
    </div>
  );
}

function ColorSystem() {
  const brandColors = [
    {
      name: "White",
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      class: "bg-white border border-border",
      textClass: "text-black",
      usage: "Backgrounds, light mode",
    },
    {
      name: "Black",
      hex: "#000000",
      rgb: "0, 0, 0",
      class: "bg-black",
      textClass: "text-white",
      usage: "Text, dark mode backgrounds",
    },
    {
      name: "Gray",
      hex: "#808080",
      rgb: "128, 128, 128",
      class: "bg-[#808080]",
      textClass: "text-white",
      usage: "Logo, secondary text, borders",
    },
    {
      name: "Dark Gray",
      hex: "#121212",
      rgb: "18, 18, 18",
      class: "bg-[#121212]",
      textClass: "text-white",
      usage: "Dark mode backgrounds",
    },
    {
      name: "Light Gray",
      hex: "#F5F5F5",
      rgb: "245, 245, 245",
      class: "bg-[#F5F5F5]",
      textClass: "text-black",
      usage: "Subtle backgrounds, dividers",
    },
  ];

  const accentColors = [
    {
      name: "Orange",
      hex: "#FF8000",
      rgb: "255, 128, 0",
      class: "bg-brand-orange",
      usage: "CTAs, highlights",
    },
    {
      name: "Folly",
      hex: "#FF004F",
      rgb: "255, 0, 119",
      class: "bg-brand-folly",
      usage: "Alerts, emphasis",
    },
    {
      name: "Neon Purple",
      hex: "#CC33FF",
      rgb: "255, 0, 247",
      class: "bg-brand-purple",
      usage: "Special features, success states",
    },
  ];

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Color System</h1>
        <p className="text-lg text-foreground/75">
          Brand colors, accents, and usage guidelines
        </p>
      </div>

      {/* Brand Colors */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Brand Colors (90-95% Usage)
          </h2>
          <p className="text-foreground/75">
            Primary neutrals for interface foundation
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {brandColors.map((color) => (
            <div key={color.name} className="space-y-3">
              <div
                className={`${color.class} aspect-square rounded-lg shadow-sm flex items-center justify-center`}
              >
                <span className={`text-xs font-mono ${color.textClass}`}>
                  {color.hex}
                </span>
              </div>
              <div>
                <h3 className="font-bold mb-1">{color.name}</h3>
                <p className="text-xs text-foreground/75 mb-1">{color.hex}</p>
                <p className="text-xs text-foreground/75 mb-2">
                  RGB: {color.rgb}
                </p>
                <p className="text-xs text-foreground/75 italic">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accent Colors */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Accent Colors (5-10% Usage)
          </h2>
          <p className="text-foreground/75">
            Use sparingly for emphasis and calls-to-action
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {accentColors.map((color) => (
            <div key={color.name} className="space-y-3">
              <div
                className={`${color.class} aspect-square rounded-lg shadow-lg flex items-center justify-center`}
              >
                <span className="text-xs font-mono text-white">
                  {color.hex}
                </span>
              </div>
              <div>
                <h3 className="font-bold mb-1">{color.name}</h3>
                <p className="text-xs text-foreground/75 mb-1">{color.hex}</p>
                <p className="text-xs text-foreground/75 mb-2">
                  RGB: {color.rgb}
                </p>
                <p className="text-xs text-foreground/75 italic">
                  {color.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-orange/10 border-2 border-brand-orange/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-brand-orange mb-2">
                Accent Color Guidelines
              </h3>
              <p className="text-sm text-foreground/75">
                Accent colors should occupy no more than 5-10% of any interface.
                They are designed to draw attention, so overuse diminishes their
                impact and creates visual noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Gradient (Premium Accent)</h2>
          <p className="text-foreground/75">
            Maximum 1 per screen - reserved for highest-priority actions
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange p-12">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Premium Gradient</h3>
              <p className="text-white/90">
                Use for primary conversion actions only
              </p>
            </div>
          </div>
          <div className="bg-muted-light p-6 space-y-3">
            <div>
              <p className="text-sm text-foreground/75 mb-2">CSS</p>
              <code className="text-xs bg-background px-3 py-2 rounded block font-mono">
                background: linear-gradient(30deg, #CC33FF, #FF004F, #FF8000);
              </code>
            </div>
            <div>
              <p className="text-sm text-foreground/75 mb-2">Tailwind</p>
              <code className="text-xs bg-background px-3 py-2 rounded block font-mono">
                className="bg-gradient-to-r from-brand-purple via-brand-folly
                to-brand-orange"
              </code>
            </div>
          </div>
        </div>
        <div className="bg-destructive/10 border-2 border-destructive/30 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <X className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-destructive mb-2">
                Critical Warning
              </h3>
              <p className="text-sm text-foreground/75">
                The gradient is a powerful tool but must be used with extreme
                restraint. Maximum 1 per page. Overuse will cheapen the brand
                and create visual clutter. Reserve for primary conversion
                buttons only (e.g., "Start Eye Test", "Buy Now", "Sign Up").
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contrast Ratios */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Accessibility: Color Contrast
          </h2>
          <p className="text-foreground/75">
            All color combinations meet WCAG 2.2 Level AA standards
          </p>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <span className="text-black font-medium">
                Black on White
              </span>
              <span className="text-sm font-mono text-brand-purple">
                21:1 ✓ AAA
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#414141] rounded-lg">
              <span className="text-[#e6e6e6] font-medium">
                Light Gray on Dark Gray
              </span>
              <span className="text-sm font-mono text-brand-purple">
                8.2:1 ✓ AAA
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <span className="text-[#414141] font-medium">
                Dark Gray on White
              </span>
              <span className="text-sm font-mono text-brand-purple">
                10.2:1 ✓ AAA
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-black rounded-lg">
              <span className="text-brand-orange font-medium">
                Orange on Black
              </span>
              <span className="text-sm font-mono text-brand-purple">
                8.34:1 ✓ AAA
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <span className="text-brand-orange font-medium">
                Orange on White
              </span>
              <span className="text-sm font-mono text-brand-folly">
                2.52:1 × AA
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-gray-200">
              <span className="text-brand-purple font-medium">
                Neon Purple on Black
              </span>
              <span className="text-sm font-mono text-brand-purple">
                5.5:1 ✓ AA
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <span className="text-brand-purple font-medium">
                Neon Purple on White
              </span>
              <span className="text-sm font-mono text-brand-folly">
                3.8:1 × AA
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-gray-200">
              <span className="text-brand-folly font-medium">
                Folly on Black
              </span>
              <span className="text-sm font-mono text-brand-purple">
                5.36:1 ✓ AA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Color Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Do</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Use neutrals for 90-95% of the interface</li>
              <li>• Reserve accents for CTAs and important UI elements</li>
              <li>• Test all combinations for accessibility</li>
              <li>• Use gradient maximum once per page</li>
              <li>
                • Maintain consistent color meaning (e.g., magenta for errors)
              </li>
            </ul>
          </div>
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold">Don't</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Don't overuse accent colors</li>
              <li>• Don't rely on color alone to convey information</li>
              <li>• Don't use gradient in logos or icons</li>
              <li>• Don't create new colors without design system approval</li>
              <li>• Don't use low-contrast combinations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Typography() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Typography</h1>
        <p className="text-lg text-foreground/75">
          Font family, scale, and hierarchy specifications
        </p>
      </div>

      {/* Font Family */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Font Family: Ubuntu</h2>
          <p className="text-foreground/75">
            Modern, approachable, and highly legible sans-serif typeface
          </p>
        </div>
        <div className="border border-border rounded-lg p-8 bg-card">
          <div className="text-6xl mb-6" style={{ fontFamily: "Ubuntu" }}>
            Ubuntu
          </div>
          <p className="text-foreground/75 mb-4">
            Ubuntu is an open-source font designed for clarity and readability
            across digital interfaces. Its friendly, rounded letterforms convey
            approachability while maintaining professionalism.
          </p>
          <div className="flex gap-3 text-sm flex-wrap">
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              Google Fonts
            </div>
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              Open Source
            </div>
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              Variable Weights
            </div>
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              Excellent Legibility
            </div>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Font Weights</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          <div className="border border-border rounded-lg p-6 bg-card">
            <div
              className="text-5xl mb-3"
              style={{ fontFamily: "Ubuntu", fontWeight: 300 }}
            >
              Aa
            </div>
            <p className="font-bold mb-1">Light</p>
            <p className="text-sm text-foreground/75 font-mono mb-2">300</p>
            <p className="text-xs text-foreground/75">
              Use sparingly for large headings
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <div
              className="text-5xl mb-3"
              style={{ fontFamily: "Ubuntu", fontWeight: 400 }}
            >
              Aa
            </div>
            <p className="font-bold mb-1">Regular</p>
            <p className="text-sm text-foreground/75 font-mono mb-2">400</p>
            <p className="text-xs text-foreground/75">Body text, paragraphs</p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <div
              className="text-5xl mb-3"
              style={{ fontFamily: "Ubuntu", fontWeight: 500 }}
            >
              Aa
            </div>
            <p className="font-bold mb-1">Medium</p>
            <p className="text-sm text-foreground/75 font-mono mb-2">500</p>
            <p className="text-xs text-foreground/75">
              Subtle emphasis, labels
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 bg-card">
            <div
              className="text-5xl mb-3"
              style={{ fontFamily: "Ubuntu", fontWeight: 700 }}
            >
              Aa
            </div>
            <p className="font-bold mb-1">Bold</p>
            <p className="text-sm text-foreground/75 font-mono mb-2">700</p>
            <p className="text-xs text-foreground/75">
              Headings, buttons, emphasis
            </p>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Type Scale & Hierarchy</h2>
          <p className="text-foreground/75">
            Consistent sizing system for all text elements
          </p>
        </div>
        <div className="border border-border rounded-lg divide-y divide-border bg-card">
          <div className="p-6 flex items-baseline gap-8">
            <div className="w-6 sm:w-12 md:w-24 text-sm text-foreground/75 shrink-0">H1</div>
            <div className="flex-1">
              <h1 className="mb-2">Page Heading</h1>
              <div className="flex gap-6 text-sm text-foreground/75 flex-wrap">
                <span className="font-mono">40px / 2.5rem</span>
                <span className="font-mono">Bold 700</span>
                <span className="font-mono">Line height: 1.2</span>
              </div>
            </div>
          </div>
          <div className="p-6 flex items-baseline gap-8">
            <div className="w-6 sm:w-12 md:w-24 text-sm text-foreground/75 shrink-0">H2</div>
            <div className="flex-1">
              <h2 className="mb-2">Section Heading</h2>
              <div className="flex gap-6 text-sm text-foreground/75 flex-wrap">
                <span className="font-mono">32px / 2rem</span>
                <span className="font-mono">Bold 700</span>
                <span className="font-mono">Line height: 1.3</span>
              </div>
            </div>
          </div>
          <div className="p-6 flex items-baseline gap-8">
            <div className="w-6 sm:w-12 md:w-24 text-sm text-foreground/75 shrink-0">H3</div>
            <div className="flex-1">
              <h3 className="mb-2">Subsection Heading</h3>
              <div className="flex gap-6 text-sm text-foreground/75 flex-wrap">
                <span className="font-mono">24px / 1.5rem</span>
                <span className="font-mono">Bold 700</span>
                <span className="font-mono">Line height: 1.4</span>
              </div>
            </div>
          </div>
          <div className="p-6 flex items-baseline gap-8">
            <div className="w-6 sm:w-12 md:w-24 text-sm text-foreground/75 shrink-0">H4</div>
            <div className="flex-1">
              <h4 className="mb-2">Card Heading</h4>
              <div className="flex gap-6 text-sm text-foreground/75 flex-wrap">
                <span className="font-mono">20px / 1.25rem</span>
                <span className="font-mono">Medium 500</span>
                <span className="font-mono">Line height: 1.5</span>
              </div>
            </div>
          </div>
          <div className="p-6 flex items-baseline gap-8">
            <div className="w-6 sm:w-12 md:w-24 text-sm text-foreground/75 shrink-0">Body</div>
            <div className="flex-1">
              <p className="mb-2">
                This is body text used for paragraphs and longer content. It
                maintains comfortable readability with appropriate line height.
              </p>
              <div className="flex gap-6 text-sm text-foreground/75 flex-wrap">
                <span className="font-mono">16px / 1rem</span>
                <span className="font-mono">Regular 400</span>
                <span className="font-mono">Line height: 1.6</span>
              </div>
            </div>
          </div>
          <div className="p-6 flex items-baseline gap-8">
            <div className="w-6 sm:w-12 md:w-24 text-sm text-foreground/75 shrink-0">
              Small
            </div>
            <div className="flex-1">
              <p className="text-sm mb-2">
                Small text for captions, labels, and secondary information
              </p>
              <div className="flex gap-6 text-sm text-foreground/75 flex-wrap">
                <span className="font-mono">14px / 0.875rem</span>
                <span className="font-mono">Regular 400</span>
                <span className="font-mono">Line height: 1.5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Italics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Italic Variants</h2>
        <div className="border border-border rounded-lg p-8 bg-card space-y-5">
          <p
            className="text-2xl italic"
            style={{ fontFamily: "Ubuntu", fontWeight: 300 }}
          >
            Ubuntu Italic Light 300
          </p>
          <p
            className="text-2xl italic font-normal"
            style={{ fontFamily: "Ubuntu" }}
          >
            Ubuntu Italic Regular 400
          </p>
          <p
            className="text-2xl italic font-medium"
            style={{ fontFamily: "Ubuntu" }}
          >
            Ubuntu Italic Medium 500
          </p>
          <p
            className="text-2xl italic font-bold"
            style={{ fontFamily: "Ubuntu" }}
          >
            Ubuntu Italic Bold 700
          </p>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Typography Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Do</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Use Bold (700) for all headings</li>
              <li>• Maintain consistent line heights</li>
              <li>• Use semantic HTML tags (h1, h2, p)</li>
              <li>• Keep line length 60-80 characters</li>
              <li>• Use Regular (400) for body text</li>
            </ul>
          </div>
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold">Don't</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Don't use font sizes below 14px</li>
              <li>• Don't mix too many weights</li>
              <li>• Don't manually adjust letter-spacing</li>
              <li>• Don't use ALL CAPS extensively</li>
              <li>• Don't override default line heights</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function Iconography() {
  const iconCategories = [
    {
      category: "Navigation & Actions",
      icons: [
        { icon: Menu, name: "Menu" },
        { icon: X, name: "Close" },
        { icon: ChevronRight, name: "Chevron Right" },
        { icon: ChevronDown, name: "Chevron Down" },
        { icon: Home, name: "Home" },
        { icon: Search, name: "Search" },
        { icon: Settings, name: "Settings" },
        { icon: ExternalLink, name: "External Link" },
      ],
    },
    {
      category: "E-commerce & Shopping",
      icons: [
        { icon: ShoppingCart, name: "Cart" },
        { icon: Package, name: "Package" },
        { icon: CreditCard, name: "Payment" },
        { icon: Heart, name: "Favorite" },
        { icon: Star, name: "Rating" },
        { icon: TrendingUp, name: "Trending" },
        { icon: Filter, name: "Filter" },
        { icon: Download, name: "Download" },
      ],
    },
    {
      category: "User & Communication",
      icons: [
        { icon: User, name: "User" },
        { icon: Mail, name: "Email" },
        { icon: Phone, name: "Phone" },
        { icon: Bell, name: "Notifications" },
        { icon: Share2, name: "Share" },
        { icon: Calendar, name: "Calendar" },
        { icon: Clock, name: "Time" },
        { icon: MapPin, name: "Location" },
      ],
    },
    {
      category: "Actions & Editing",
      icons: [
        { icon: Plus, name: "Add" },
        { icon: Minus, name: "Remove" },
        { icon: Edit, name: "Edit" },
        { icon: Trash2, name: "Delete" },
        { icon: Copy, name: "Copy" },
        { icon: Check, name: "Confirm" },
        { icon: RefreshCw, name: "Refresh" },
        { icon: Upload, name: "Upload" },
      ],
    },
    {
      category: "Feedback & Status",
      icons: [
        { icon: AlertCircle, name: "Alert" },
        { icon: Info, name: "Information" },
        { icon: HelpCircle, name: "Help" },
        { icon: CheckCircle, name: "Success" },
        { icon: XCircle, name: "Error" },
        { icon: Shield, name: "Security" },
        { icon: Lock, name: "Locked" },
        { icon: Unlock, name: "Unlocked" },
      ],
    },
    {
      category: "Media & Files",
      icons: [
        { icon: ImageIcon, name: "Image" },
        { icon: Video, name: "Video" },
        { icon: File, name: "File" },
        { icon: Folder, name: "Folder" },
        { icon: Eye, name: "View" },
        { icon: Zap, name: "Quick Action" },
        { icon: Download, name: "Download" },
        { icon: Upload, name: "Upload" },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Iconography</h1>
        <p className="text-lg text-foreground/75">
          Comprehensive icon system and usage guidelines
        </p>
      </div>

      {/* Icon Library */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Icon Library: Lucide React
          </h2>
          <p className="text-foreground/75">
            We use <strong>Lucide React</strong> as our primary icon library for
            its clean, consistent design, excellent React integration, and
            comprehensive icon set.
          </p>
        </div>
        <div className="border border-border rounded-lg p-8 bg-card">
          <div className="flex gap-4 text-sm flex-wrap mb-6">
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              1000+ Icons
            </div>
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              Consistent 24×24px grid
            </div>
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              MIT License
            </div>
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              Fully customizable
            </div>
            <div className="px-3 py-1.5 bg-muted-light rounded-md">
              Tree-shakeable
            </div>
          </div>
          <div className="bg-muted-light rounded-lg p-4">
            <code className="text-sm">npm install lucide-react</code>
          </div>
        </div>
      </section>

      {/* Icon Sizes */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Icon Sizes</h2>
          <p className="text-foreground/75">
            Standard sizes for consistent scaling
          </p>
        </div>
        <div className="border border-border rounded-lg p-8">
          <div className="flex items-end gap-8">
            <div className="text-center">
              <Eye className="w-4 h-4 mx-auto mb-2" />
              <p className="text-xs font-mono">16px</p>
              <p className="text-xs text-foreground/75">Small</p>
            </div>
            <div className="text-center">
              <Eye className="w-5 h-5 mx-auto mb-2" />
              <p className="text-xs font-mono">20px</p>
              <p className="text-xs text-foreground/75">Default</p>
            </div>
            <div className="text-center">
              <Eye className="w-6 h-6 mx-auto mb-2" />
              <p className="text-xs font-mono">24px</p>
              <p className="text-xs text-foreground/75">Medium</p>
            </div>
            <div className="text-center">
              <Eye className="w-8 h-8 mx-auto mb-2" />
              <p className="text-xs font-mono">32px</p>
              <p className="text-xs text-foreground/75">Large</p>
            </div>
            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-2" />
              <p className="text-xs font-mono">48px</p>
              <p className="text-xs text-foreground/75">X-Large</p>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Categories */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Icon Library by Category</h2>
          <p className="text-foreground/75">
            Curated collection of commonly used icons
          </p>
        </div>
        {iconCategories.map((group) => (
          <div key={group.category} className="space-y-4">
            <h3 className="text-xl font-bold">{group.category}</h3>
            <div className="flex flex-wrap gap-4">
              {group.icons.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="border border-border rounded-lg p-4 hover:bg-muted-light transition-colors text-center"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Symbol as Icon */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Opticule Symbol as Icon</h2>
          <p className="text-foreground/75">
            Our eye symbol can be used as a decorative icon element in various
            configurations
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="mx-auto mb-3 flex justify-center">
              <Symbol className="fill-[#808080] stroke-none w-15" />
            </div>
            <p className="text-sm font-bold mb-1">Filled</p>
            <p className="text-xs text-foreground/75">Primary usage</p>
          </div>
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="opacity-50 mx-auto mb-3 flex justify-center">
              <Symbol className="fill-[#808080] stroke-none w-15" />
            </div>
            <p className="text-sm font-bold mb-1">50% Opacity</p>
            <p className="text-xs text-foreground/75">Subtle accent</p>
          </div>
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="opacity-25 mx-auto mb-3 flex justify-center">
              <Symbol className="fill-[#808080] stroke-none w-15" />
            </div>
            <p className="text-sm font-bold mb-1">25% Opacity</p>
            <p className="text-xs text-foreground/75">Background element</p>
          </div>
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="opacity-10 mx-auto mb-3 flex justify-center">
              <Symbol className="fill-[#808080] stroke-none w-15" />
            </div>
            <p className="text-sm font-bold mb-1">10% Opacity</p>
            <p className="text-xs text-foreground/75">Watermark</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="mx-auto mb-3 flex justify-center">
              <Symbol className="fill-none stroke-[#808080] stroke-2 w-15" />
            </div>
            <p className="text-sm font-bold mb-1">Outlined</p>
            <p className="text-xs text-foreground/75">Primary usage</p>
          </div>
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="opacity-50 mx-auto mb-3 flex justify-center">
              <Symbol className="fill-none stroke-[#808080] stroke-2 w-15" />
            </div>
            <p className="text-sm font-bold mb-1">50% Opacity</p>
            <p className="text-xs text-foreground/75">Subtle accent</p>
          </div>
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="opacity-25 mx-auto mb-3 flex justify-center">
              <Symbol className="fill-none stroke-[#808080] stroke-2 w-15" />
            </div>
            <p className="text-sm font-bold mb-1">25% Opacity</p>
            <p className="text-xs text-foreground/75">Background element</p>
          </div>
          <div className="border border-border rounded-lg p-6 text-center bg-card">
            <div className="opacity-10 mx-auto mb-3 flex justify-center">
              <Symbol className="fill-none stroke-[#808080] stroke-2 w-15" />
            </div>
            <p className="text-sm font-bold mb-1">10% Opacity</p>
            <p className="text-xs text-foreground/75">Watermark</p>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Icon Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Do</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Use consistent sizes throughout the interface</li>
              <li>• Maintain 24×24px base grid alignment</li>
              <li>• Use stroke width of 2px for consistency</li>
              <li>• Pair icons with labels for clarity</li>
              <li>
                • Ensure icons have proper touch targets (44×44px minimum)
              </li>
            </ul>
          </div>
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold">Don't</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Don't mix icon libraries</li>
              <li>• Don't use icons smaller than 16px</li>
              <li>• Don't rotate or distort icons</li>
              <li>• Don't use icons as the sole means of communication</li>
              <li>• Don't create custom icons without designer approval</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Implementation</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light px-6 py-3 border-b border-border">
            <p className="text-sm font-mono">React/TypeScript</p>
          </div>
          <div className="p-6 bg-background">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Eye, User, ShoppingCart } from 'lucide-react';

// Basic usage
<Eye className="w-5 h-5" />

// With color
<Eye className="w-5 h-5 text-brand-purple" />

// In a button
<button className="flex items-center gap-2">
  <ShoppingCart className="w-5 h-5" />
  <span>Add to Cart</span>
</button>

// Different sizes
<User className="w-4 h-4" />  // 16px
<User className="w-5 h-5" />  // 20px (default)
<User className="w-6 h-6" />  // 24px`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

function Imagery() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Imagery</h1>
        <p className="text-lg text-foreground/75">
          Photography style, brand graphics, and visual guidelines
        </p>
      </div>

      {/* Brand Graphics */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Brand Graphics</h2>
          <p className="text-foreground/75">
            Signature visual elements for marketing and UI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col justify-end border border-border rounded-lg overflow-hidden">
            <div className="flex items-center justify-center px-6">
              <img
                src="/LightFlow.png"
                alt="Light Flow Effect"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-background border-t">
              <h3 className="font-bold mb-1">Light Flow</h3>
              <p className="text-sm text-foreground/75">
                Abstract light rays.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end border border-border rounded-lg overflow-hidden">
            <div className="flex items-center justify-center px-6">
              <img
                src="/EyeGraphics.png"
                alt="Eye Graphics"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-background border-t">
              <h3 className="font-bold mb-1">Eye Graphics</h3>
              <p className="text-sm text-foreground/75">
                Technical eye diagram.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end border border-border rounded-lg overflow-hidden">
            <div className="flex items-center justify-center px-6">
              <img
                src="/Mmesoo.png"
                alt="Macro Eye"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-background border-t">
              <h3 className="font-bold mb-1">Model shot</h3>
              <p className="text-sm text-foreground/75">
                Our model on glasses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Library */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Photography Library</h2>
          <p className="text-foreground/75">
            Curated collection of brand-appropriate photography
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1652295346763-18875ed8872a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBjYXJlJTIwb3B0b21ldHJ5fGVufDF8fHx8MTc2OTE5OTIzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Eye Care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Eye Care</h3>
              <p className="text-xs text-foreground/75">
                Professional optometry setting
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1758206524001-56b1b1ec72cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNpb24lMjB0ZXN0JTIwZXllJTIwY2hhcnR8ZW58MXx8fHwxNzY5MTk5MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vision Test"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Vision Test</h3>
              <p className="text-xs text-foreground/75">
                Eye charts and examinations
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1766998224439-9f048ed4d687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZnJhbWVzJTIwbW9kZXJufGVufDF8fHx8MTc2OTE1ODk4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Eyeglasses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Eyeglasses</h3>
              <p className="text-xs text-foreground/75">
                Modern frames collection
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1758573467030-52481ea92007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cmlzdCUyMGV4YW1pbmF0aW9ufGVufDF8fHx8MTc2OTE5OTIzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Optometrist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Optometrist</h3>
              <p className="text-xs text-foreground/75">
                Professional examination
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1679237686712-a71949f4b5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBoZWFsdGglMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2OTE5OTIzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Eye Health"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Eye Health</h3>
              <p className="text-xs text-foreground/75">Close-up eye detail</p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1763581202239-eaf934753c55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3ZWFyaW5nJTIwZ2xhc3Nlc3xlbnwxfHx8fDE3NjkxOTI1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wearing Glasses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Wearing Glasses</h3>
              <p className="text-xs text-foreground/75">
                Lifestyle photography
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1765376260887-e4b5b3029862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjkxOTkyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Optical Store"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Optical Store</h3>
              <p className="text-xs text-foreground/75">
                Retail interior design
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="aspect-square bg-muted-light">
              <img
                src="https://images.unsplash.com/photo-1766310549795-dd0fc75d499f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTE2NjQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold mb-1">Professional</h3>
              <p className="text-xs text-foreground/75">
                Eye care professional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Brand Images */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Branded Imagery Assets</h2>
          <p className="text-foreground/75">
            High-impact visuals for campaigns and marketing
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="border border-border w-full rounded-lg overflow-hidden">
            <div className="bg-muted-light w-full flex items-center justify-center p-6">
              <img
                src="/Eye_illustration.svg"
                alt="Eye Detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Eye Detail</h3>
              <p className="text-sm text-foreground/75">
                Artistic close-up for impactful hero sections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Photography Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Do</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Use natural, authentic photography</li>
              <li>• Show diverse faces and ages</li>
              <li>• Maintain consistent lighting and tone</li>
              <li>• Focus on eyes and facial expressions</li>
              <li>• Use high-resolution images (min 1920px wide)</li>
              <li>• Showcase modern, approachable settings</li>
              <li>• Emphasize clarity and professionalism</li>
            </ul>
          </div>
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold">Don't</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Don't use overly posed or stock-looking photos</li>
              <li>• Don't apply heavy filters or effects</li>
              <li>• Don't use low-resolution images</li>
              <li>• Don't show competitors' products</li>
              <li>• Don't use images that feel clinical or cold</li>
              <li>• Don't use dated or outdated imagery</li>
              <li>• Don't over-saturate or manipulate colors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Image Usage Contexts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Image Usage by Context</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-xl text-sm">
              <thead className="bg-muted-light border-b border-border">
                <tr>
                  <th className="text-left p-4">Context</th>
                  <th className="text-left p-4">Image Type</th>
                  <th className="text-left p-4">Aspect Ratio</th>
                  <th className="text-left p-4">Min Resolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4">Hero Section</td>
                  <td className="p-4">Lifestyle, brand graphics</td>
                  <td className="p-4">16:9 or 21:9</td>
                  <td className="p-4">2560 × 1440px</td>
                </tr>
                <tr>
                  <td className="p-4">Product Cards</td>
                  <td className="p-4">Eyewear product shots</td>
                  <td className="p-4">1:1 (square)</td>
                  <td className="p-4">800 × 800px</td>
                </tr>
                <tr>
                  <td className="p-4">Blog Headers</td>
                  <td className="p-4">Professional, educational</td>
                  <td className="p-4">16:9</td>
                  <td className="p-4">1920 × 1080px</td>
                </tr>
                <tr>
                  <td className="p-4">Testimonials</td>
                  <td className="p-4">Portrait photography</td>
                  <td className="p-4">1:1</td>
                  <td className="p-4">400 × 400px</td>
                </tr>
                <tr>
                  <td className="p-4">Background Graphics</td>
                  <td className="p-4">Abstract, light flow</td>
                  <td className="p-4">Any</td>
                  <td className="p-4">1920 × 1080px</td>
                </tr>
                <tr>
                  <td className="p-4">Social Media</td>
                  <td className="p-4">Lifestyle, promotional</td>
                  <td className="p-4">1:1 or 4:5</td>
                  <td className="p-4">1080 × 1080px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function SpacingGrid() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Spacing & Grid</h1>
        <p className="text-lg text-foreground/75">
          8-point grid system and spacing scale
        </p>
      </div>

      {/* 8pt Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">8-Point Grid System</h2>
          <p className="text-foreground/75">
            All spacing should be multiples of 8px for consistency
          </p>
        </div>
        <div className="border border-border rounded-lg p-8">
          <div className="space-y-6">
            {[8, 16, 24, 32, 48, 64].map((size) => (
              <div key={size} className="flex items-center gap-6">
                <div className="w-24 text-sm font-mono">{size}px</div>
                <div
                  className="h-8 bg-brand-purple"
                  style={{ width: `${size}px` }}
                />
                <div className="text-sm text-foreground/75">{size / 16}rem</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing Scale */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Spacing Scale</h2>
          <p className="text-foreground/75">Predefined spacing values</p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-sm text-sm">
            <thead className="bg-muted-light border-b border-border">
              <tr>
                <th className="text-left p-4">Token</th>
                <th className="text-left p-4">Pixels</th>
                <th className="text-left p-4">Rem</th>
                <th className="text-left p-4">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 font-mono">spacing-1</td>
                <td className="p-4">4px</td>
                <td className="p-4">0.25rem</td>
                <td className="p-4 text-foreground/75">
                  Tight spacing, badges
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono">spacing-2</td>
                <td className="p-4">8px</td>
                <td className="p-4">0.5rem</td>
                <td className="p-4 text-foreground/75">Element gaps</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">spacing-3</td>
                <td className="p-4">12px</td>
                <td className="p-4">0.75rem</td>
                <td className="p-4 text-foreground/75">Small padding</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">spacing-4</td>
                <td className="p-4">16px</td>
                <td className="p-4">1rem</td>
                <td className="p-4 text-foreground/75">Default padding</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">spacing-6</td>
                <td className="p-4">24px</td>
                <td className="p-4">1.5rem</td>
                <td className="p-4 text-foreground/75">Card padding</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">spacing-8</td>
                <td className="p-4">32px</td>
                <td className="p-4">2rem</td>
                <td className="p-4 text-foreground/75">Section spacing</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">spacing-12</td>
                <td className="p-4">48px</td>
                <td className="p-4">3rem</td>
                <td className="p-4 text-foreground/75">Large sections</td>
              </tr>
              <tr>
                <td className="p-4 font-mono">spacing-16</td>
                <td className="p-4">64px</td>
                <td className="p-4">4rem</td>
                <td className="p-4 text-foreground/75">Page sections</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Layout Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Layout Grid</h2>
          <p className="text-foreground/75">12-column responsive grid system</p>
        </div>
        <div className="border border-border rounded-lg p-8 bg-card">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-brand-purple/20 h-12 flex items-center justify-center text-xs font-mono"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/75 mt-4">
            Gap: 16px (1rem) | Max width: 1280px | Padding: 24px (1.5rem)
          </p>
        </div>
      </section>
    </div>
  );
}
