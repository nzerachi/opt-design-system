import { useState } from "react";
import {
  purple, folly, orange, neutral, violet, red, green, yellow, blue, teal, pink,
  gradient,
} from "../../tokens/primitive/colors";
import {
  fontFamilies, fontWeights, fontSizes, lineHeights, letterSpacings,
} from "../../tokens/primitive/typography";
import { spacing, spacingAliases, touchTargets, layoutDimensions } from "../../tokens/primitive/spacing";
import { shadowsLight, shadowsDark } from "../../tokens/primitive/shadows";
import { durations, easings, transitions } from "../../tokens/primitive/motion";
import { radii } from "../../tokens/primitive/radii";

// Icons
import {
  Eye, Search, Heart, Bell, Settings, Mail, Home, Star, User, ArrowRight,
  Check, X, Plus, Minus, Download, Upload, Share2, Edit, Trash2, Copy,
  ChevronRight, ChevronDown, Filter, RefreshCw, AlertCircle, Info, ZapIcon,
  Lock, Calendar, MapPin, Phone, Grid3x3,
} from "lucide-react";

interface FoundationsSectionProps {
  activeSubSection: string;
}

export function FoundationsSection({ activeSubSection }: FoundationsSectionProps) {
  switch (activeSubSection) {
    case "colors":     return <ColorSystem />;
    case "typography": return <TypographyScale />;
    case "spacing":    return <SpacingGrid />;
    case "shadows":    return <ShadowsElevation />;
    case "motion":     return <MotionAnimation />;
    case "iconography":return <Iconography />;
    case "imagery":    return <Imagery />;
    default:           return <ColorSystem />;
  }
}

// ---------------------------------------------------------------------------
// Swatch helpers
// ---------------------------------------------------------------------------

function ColorSwatch({ hex, name, shade }: { hex: string; name: string; shade?: string | number }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={copy}
      title={`Copy ${hex}`}
      className="group flex flex-col gap-1 text-left hover:scale-105 transition-transform"
    >
      <div
        className="w-full h-10 rounded-lg ring-1 ring-black/10 shadow-sm"
        style={{ backgroundColor: hex }}
      />
      <div className="text-xs leading-snug">
        <div className="font-medium text-foreground/80">{shade ?? name}</div>
        <div className="font-mono text-foreground/40">{copied ? "Copied!" : hex}</div>
      </div>
    </button>
  );
}

function ColorScale({ name, scale }: { name: string; scale: Record<string | number, string> }) {
  const entries = Object.entries(scale);
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold capitalize text-foreground/70">{name}</h3>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${entries.length}, minmax(0, 1fr))` }}>
        {entries.map(([shade, hex]) => (
          <ColorSwatch key={shade} hex={hex} name={name} shade={shade} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Color System
// ---------------------------------------------------------------------------

function ColorSystem() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-3">Color System</h1>
        <p className="text-lg text-foreground/60">
          All values are imported directly from <code className="text-brand-orange">src/tokens/primitive/colors.ts</code> — updating the token file instantly reflects here.
        </p>
      </div>

      {/* Brand colors */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Brand Palette</h2>
          <p className="text-sm text-foreground/50">The three primary Opticule brand colors and their full scales.</p>
        </div>
        <ColorScale name="Orange (#FF8000)" scale={orange} />
        <ColorScale name="Purple (#CC33FF)" scale={purple} />
        <ColorScale name="Folly (#FF004F)" scale={folly} />
      </section>

      {/* Brand gradient */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Brand Gradients</h2>
          <p className="text-sm text-foreground/50">Signature gradient — Purple → Folly → Orange.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Object.entries(gradient).map(([name, value]) => (
            <div key={name} className="space-y-2">
              <div
                className="h-16 rounded-xl shadow-sm ring-1 ring-black/10"
                style={{ background: value }}
              />
              <div className="text-xs">
                <div className="font-medium text-foreground/80">{name}</div>
                <div className="font-mono text-foreground/40 text-[10px] break-all">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neutral */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Neutral / Gray</h2>
          <p className="text-sm text-foreground/50">Foundation neutral scale — backgrounds, text, borders.</p>
        </div>
        <ColorScale name="Neutral" scale={neutral} />
      </section>

      {/* Semantic scales */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-1">Semantic Color Scales</h2>
          <p className="text-sm text-foreground/50">Supporting colors for status, feedback, and emphasis.</p>
        </div>
        <ColorScale name="Red (error/destructive)" scale={red} />
        <ColorScale name="Green (success)" scale={green} />
        <ColorScale name="Yellow (warning)" scale={yellow} />
        <ColorScale name="Blue (info)" scale={blue} />
        <ColorScale name="Teal (supplementary)" scale={teal} />
        <ColorScale name="Pink (supplementary)" scale={pink} />
        <ColorScale name="Violet (secondary accent)" scale={violet} />
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Typography Scale
// ---------------------------------------------------------------------------

function TypographyScale() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-3">Typography Scale</h1>
        <p className="text-lg text-foreground/60">
          All values from <code className="text-brand-orange">src/tokens/primitive/typography.ts</code> — Ubuntu as the primary brand font.
        </p>
      </div>

      {/* Font Families */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Font Families</h2>
        <div className="grid gap-4">
          {Object.entries(fontFamilies).map(([key, value]) => (
            <div key={key} className="border border-border rounded-xl p-5 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-brand-orange">{key}</span>
                <span className="text-xs text-foreground/40 truncate">{value}</span>
              </div>
              <p className="text-xl" style={{ fontFamily: value }}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-sm" style={{ fontFamily: value }}>
                0 1 2 3 4 5 6 7 8 9 &nbsp;•&nbsp; A B C D E F G &nbsp;•&nbsp; a b c d e f g
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Weights</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(fontWeights).map(([key, value]) => (
            <div key={key} className="border border-border rounded-xl p-4 flex items-center justify-between">
              <span className="text-2xl" style={{ fontWeight: value, fontFamily: fontFamilies.sans }}>
                Opticule DS
              </span>
              <div className="text-right text-xs">
                <div className="font-mono text-brand-orange">{key}</div>
                <div className="text-foreground/40">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Size Scale</h2>
        <div className="border border-border rounded-xl overflow-hidden">
          {Object.entries(fontSizes).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4 px-5 py-3 border-b border-border last:border-0 hover:bg-muted-light/20">
              <div className="w-12 text-xs font-mono text-brand-orange shrink-0">{key}</div>
              <div className="w-16 text-xs text-foreground/40 font-mono shrink-0">{value}</div>
              <div className="overflow-hidden">
                <span style={{ fontSize: value }} className="leading-tight block whitespace-nowrap">
                  Aa
                </span>
              </div>
              <div className="flex-1 text-xs text-foreground/40 truncate hidden sm:block">
                The quick brown fox
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Line Heights</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(lineHeights).map(([key, value]) => (
            <div key={key} className="border border-border rounded-xl p-4 space-y-1">
              <div className="flex justify-between text-xs mb-2">
                <span className="font-mono text-brand-orange">{key}</span>
                <span className="text-foreground/40">{value}</span>
              </div>
              <p className="text-sm" style={{ lineHeight: value }}>
                Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Letter Spacings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Letter Spacing</h2>
        <div className="border border-border rounded-xl overflow-hidden">
          {Object.entries(letterSpacings).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4 px-5 py-3 border-b border-border last:border-0 hover:bg-muted-light/20">
              <div className="w-20 text-xs font-mono text-brand-orange shrink-0">{key}</div>
              <div className="w-20 text-xs text-foreground/40 font-mono shrink-0">{value}</div>
              <div className="text-sm" style={{ letterSpacing: value }}>
                OPTICULE DESIGN SYSTEM
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Spacing & Grid
// ---------------------------------------------------------------------------

function SpacingGrid() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-3">Spacing &amp; Grid</h1>
        <p className="text-lg text-foreground/60">
          All values from <code className="text-brand-orange">src/tokens/primitive/spacing.ts</code> — 4px base unit.
        </p>
      </div>

      {/* Core scale */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Core Scale</h2>
        <p className="text-sm text-foreground/50">Every value is a multiple of 4px.</p>
        <div className="space-y-1">
          {Object.entries(spacing).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4 py-1.5">
              <div className="w-8 text-xs font-mono text-brand-orange shrink-0">{key}</div>
              <div className="w-16 text-xs text-foreground/40 font-mono shrink-0">{value}</div>
              <div
                className="h-4 bg-brand-orange/70 rounded shrink-0"
                style={{ width: value === "0px" ? "2px" : value === "1px" ? "1px" : value }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Named aliases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Named Aliases</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(spacingAliases).map(([key, value]) => (
            <div key={key} className="border border-border rounded-xl p-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-mono text-brand-orange">{key}</span>
                <span className="text-foreground/40">{value}</span>
              </div>
              <div className="h-2 bg-brand-orange/20 rounded overflow-hidden">
                <div className="h-full bg-brand-orange/70 rounded" style={{ width: value }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Touch targets */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Touch Targets</h2>
        <p className="text-sm text-foreground/50">WCAG minimum interactive area sizes.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(touchTargets).map(([key, value]) => (
            <div key={key} className="border border-border rounded-xl p-4 flex items-center gap-4">
              <div
                className="bg-brand-orange/15 border border-brand-orange/30 rounded-lg flex items-center justify-center text-xs text-brand-orange font-mono shrink-0"
                style={{ width: value, height: value, maxWidth: "64px", maxHeight: "64px" }}
              >
                {value}
              </div>
              <div className="text-xs">
                <div className="font-mono text-brand-orange mb-0.5">{key}</div>
                <div className="text-foreground/50">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Layout dimensions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Layout Dimensions</h2>
        <div className="border border-border rounded-xl overflow-hidden">
          {Object.entries(layoutDimensions).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4 px-5 py-3 border-b border-border last:border-0 hover:bg-muted-light/20 text-sm">
              <div className="w-52 font-mono text-brand-orange shrink-0">{key}</div>
              <div className="text-foreground/60">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radii */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Border Radius</h2>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {Object.entries(radii).map(([key, value]) => (
            <div key={key} className="border border-border rounded-xl p-4 space-y-3 text-center">
              <div
                className="w-16 h-16 bg-brand-orange/20 border-2 border-brand-orange/40 mx-auto"
                style={{ borderRadius: value }}
              />
              <div className="text-xs">
                <div className="font-mono text-brand-orange">{key}</div>
                <div className="text-foreground/40">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shadows & Elevation
// ---------------------------------------------------------------------------

function ShadowsElevation() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const shadows = mode === "light" ? shadowsLight : shadowsDark;

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Shadows &amp; Elevation</h1>
        <p className="text-lg text-foreground/60">
          All values from <code className="text-brand-orange">src/tokens/primitive/shadows.ts</code> — neutral and brand glow variants.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setMode("light")}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${mode === "light" ? "bg-foreground text-background" : "border border-border hover:bg-muted-light/30"}`}
        >
          Light mode shadows
        </button>
        <button
          onClick={() => setMode("dark")}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${mode === "dark" ? "bg-foreground text-background" : "border border-border hover:bg-muted-light/30"}`}
        >
          Dark mode shadows
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(shadows).map(([key, value]) => (
          <div key={key} className="border border-border rounded-xl p-5 space-y-4">
            <div
              className="w-full h-20 rounded-xl bg-background border border-border/50"
              style={{ boxShadow: value }}
            />
            <div className="text-xs space-y-0.5">
              <div className="font-mono text-brand-orange font-semibold">{key}</div>
              <div className="text-foreground/40 font-mono text-[10px] break-all leading-relaxed">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Motion & Animation
// ---------------------------------------------------------------------------

function MotionAnimation() {
  const [playing, setPlaying] = useState<string | null>(null);

  const playDemo = (key: string) => {
    setPlaying(key);
    setTimeout(() => setPlaying(null), 1200);
  };

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-3">Motion &amp; Animation</h1>
        <p className="text-lg text-foreground/60">
          All values from <code className="text-brand-orange">src/tokens/primitive/motion.ts</code> — durations, easings, and transition shorthands.
        </p>
      </div>

      {/* Durations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Durations</h2>
        <div className="space-y-2">
          {Object.entries(durations).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <div className="w-20 text-xs font-mono text-brand-orange shrink-0">{key}</div>
              <div className="w-16 text-xs text-foreground/40 font-mono shrink-0">{value}ms</div>
              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-orange rounded-full transition-none"
                  style={{
                    width: playing === key ? "100%" : "0%",
                    transition: playing === key ? `width ${value}ms linear` : "none",
                  }}
                />
              </div>
              <button
                onClick={() => playDemo(key)}
                className="text-xs text-brand-orange hover:text-brand-orange/70 font-mono border border-brand-orange/30 rounded px-2 py-0.5 hover:bg-brand-orange/10 transition-colors"
              >
                {playing === key ? "▶" : "play"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Easings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Easing Functions</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(easings).map(([key, value]) => (
            <div key={key} className="border border-border rounded-xl p-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-mono text-brand-orange">{key}</span>
              </div>
              <div className="font-mono text-[10px] text-foreground/40">{value}</div>
              <div className="h-10 flex items-center">
                <div
                  className="w-4 h-4 rounded-full bg-brand-orange cursor-pointer"
                  style={{ transition: `transform 400ms ${value}` }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(180px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(0px)")}
                />
              </div>
              <p className="text-[10px] text-foreground/30">Hover the dot to preview</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transition shorthands */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Transition Shorthands</h2>
        <div className="border border-border rounded-xl overflow-hidden">
          {Object.entries(transitions).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4 px-5 py-3 border-b border-border last:border-0 hover:bg-muted-light/20 text-sm">
              <div className="w-24 font-mono text-brand-orange shrink-0">{key}</div>
              <div className="text-foreground/50 font-mono text-xs">{value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Iconography
// ---------------------------------------------------------------------------

const ALL_ICONS = [
  { name: "Eye", icon: Eye }, { name: "Search", icon: Search }, { name: "Heart", icon: Heart },
  { name: "Bell", icon: Bell }, { name: "Settings", icon: Settings }, { name: "Mail", icon: Mail },
  { name: "Home", icon: Home }, { name: "Star", icon: Star }, { name: "User", icon: User },
  { name: "ArrowRight", icon: ArrowRight }, { name: "Check", icon: Check }, { name: "X", icon: X },
  { name: "Plus", icon: Plus }, { name: "Minus", icon: Minus }, { name: "Download", icon: Download },
  { name: "Upload", icon: Upload }, { name: "Share2", icon: Share2 }, { name: "Edit", icon: Edit },
  { name: "Trash2", icon: Trash2 }, { name: "Copy", icon: Copy }, { name: "ChevronRight", icon: ChevronRight },
  { name: "ChevronDown", icon: ChevronDown }, { name: "Filter", icon: Filter }, { name: "RefreshCw", icon: RefreshCw },
  { name: "AlertCircle", icon: AlertCircle }, { name: "Info", icon: Info }, { name: "ZapIcon", icon: ZapIcon },
  { name: "Lock", icon: Lock }, { name: "Calendar", icon: Calendar }, { name: "MapPin", icon: MapPin },
  { name: "Phone", icon: Phone }, { name: "Grid3x3", icon: Grid3x3 },
];

function Iconography() {
  const [size, setSize] = useState(20);
  const [query, setQuery] = useState("");
  const filtered = ALL_ICONS.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Iconography</h1>
        <p className="text-lg text-foreground/60">
          Opticule DS uses <span className="text-brand-orange font-medium">Lucide React</span> — a consistent, open-source icon set with 1400+ icons. Always render at multiples of 4px.
        </p>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="search"
          placeholder="Filter icons…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-border rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-brand-orange/30 w-52"
        />
        <div className="flex items-center gap-2">
          <span className="text-xs text-foreground/50">Size:</span>
          {[16, 20, 24, 32].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-2 py-0.5 rounded text-xs font-mono transition-colors ${size === s ? "bg-brand-orange text-white" : "border border-border hover:bg-muted-light/30"}`}
            >
              {s}px
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))" }}>
        {filtered.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => navigator.clipboard.writeText(`<${name} size={${size}} />`)}
            className="flex flex-col items-center gap-2 p-3 border border-border rounded-xl hover:bg-muted-light/30 hover:border-brand-orange/30 transition-all group"
            title={`Copy <${name} />`}
          >
            <Icon size={size} className="text-foreground/70 group-hover:text-brand-orange transition-colors" />
            <span className="text-[10px] text-foreground/40 font-mono text-center leading-snug">{name}</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-foreground/30">Click any icon to copy its JSX import. Full library at lucide.dev</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Imagery
// ---------------------------------------------------------------------------

import Mmesoo from "/Mmesoo.png";
import LightFlow from "/LightFlow.png";
import EyeGraphics from "/EyeGraphics.png";
import Eye_illustration from "/Eye_illustration.svg";

function Imagery() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-3">Imagery</h1>
        <p className="text-lg text-foreground/60">
          Photography, illustration, and graphic principles for the Opticule visual language.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Brand Photography</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="overflow-hidden rounded-xl aspect-video bg-muted-light/20">
              <img src={Mmesoo} alt="Mmesoo" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-foreground/50">Mmesoo — warm, human-centered photography</p>
          </div>
          <div className="space-y-2">
            <div className="overflow-hidden rounded-xl aspect-video bg-muted-light/20">
              <img src={LightFlow} alt="LightFlow" className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-foreground/50">LightFlow — abstract, motion-forward visuals</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Brand Illustrations</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="overflow-hidden rounded-xl p-8 bg-muted-light/10 border border-border flex items-center justify-center">
              <img src={EyeGraphics} alt="Eye Graphics" className="max-h-40 object-contain" />
            </div>
            <p className="text-xs text-foreground/50">EyeGraphics — structured geometric illustration</p>
          </div>
          <div className="space-y-2">
            <div className="overflow-hidden rounded-xl p-8 bg-muted-light/10 border border-border flex items-center justify-center">
              <img src={Eye_illustration} alt="Eye Illustration" className="max-h-40 object-contain" />
            </div>
            <p className="text-xs text-foreground/50">Eye illustration — brand symbol expanded</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { rule: "Use brand colors as overlays", detail: "Tint photography with orange, purple, or folly at 20–40% opacity for brand cohesion." },
            { rule: "Maintain high contrast", detail: "Text overlaid on imagery must meet WCAG AA (4.5:1 for body, 3:1 for large text)." },
            { rule: "Consistent aspect ratios", detail: "Use 16:9 for hero banners, 4:3 for content cards, 1:1 for avatars and thumbnails." },
            { rule: "No stock photo clichés", detail: "Avoid overly staged corporate imagery. Prefer authentic, context-driven visuals." },
          ].map(({ rule, detail }) => (
            <div key={rule} className="border border-border rounded-xl p-4 space-y-1">
              <p className="text-sm font-semibold text-brand-orange">{rule}</p>
              <p className="text-xs text-foreground/60">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
