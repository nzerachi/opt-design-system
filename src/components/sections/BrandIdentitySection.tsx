import Symbol from "../../assets/symbol";
import Wordmark from "../../assets/wordmark";
import { CheckCircle, XCircle } from "lucide-react";
import Draft from "../../assets/draft";

interface BrandIdentitySectionProps {
  activeSubSection: string;
}

export function BrandIdentitySection({
  activeSubSection,
}: BrandIdentitySectionProps) {
  if (activeSubSection === "logos") {
    return <LogosOverview />;
  }

  if (activeSubSection === "wordmark") {
    return <WordmarkVariations />;
  }

  if (activeSubSection === "symbol") {
    return <SymbolVariations />;
  }

  if (activeSubSection === "combined") {
    return <CombinedMarks />;
  }

  if (activeSubSection === "usage") {
    return <UsageGuidelines />;
  }

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Brand Identity</h1>
        <p className="text-lg text-foreground/75">
          Select a subsection from the sidebar to view detailed guidelines
        </p>
      </div>
    </div>
  );
}

function LogosOverview() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Draft</h1>
        <Draft />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4">Logo System</h1>
        <p className="text-lg text-foreground/75">
          Opticule's visual identity consists of two primary marks: the Wordmark
          and the Symbol
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Wordmark */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted/20 p-12 flex items-center justify-center min-h-[300px]">
            <Wordmark className="fill-muted-dark stroke-none w-50" />
          </div>
          <div className="p-6 border-t border-border space-y-3">
            <h3 className="text-xl font-bold">Wordmark Logo</h3>
            <p className="text-sm text-foreground/75">
              Primary logo for most applications. Use when brand name
              recognition is important.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-3">
              <div>
                <p className="text-foreground/75 mb-1">Format</p>
                <p className="font-mono">SVG, PNG</p>
              </div>
              <div>
                <p className="text-foreground/75 mb-1">Aspect Ratio</p>
                <p className="font-mono">135:35 (≈3.86:1)</p>
              </div>
              <div>
                <p className="text-foreground/75 mb-1">Min Width</p>
                <p className="font-mono">67px</p>
              </div>
              <div>
                <p className="text-foreground/75 mb-1">Primary Use</p>
                <p>Headers, footers, marketing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Symbol */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted/20 p-12 flex items-center justify-center min-h-[300px]">
            <Symbol className="fill-muted-dark stroke-none w-50" />
          </div>
          <div className="p-6 border-t border-border space-y-3">
            <h3 className="text-xl font-bold">Symbol Logo</h3>
            <p className="text-sm text-foreground/75">
              Secondary mark for compact spaces. Eye spiral represents vision
              and perception.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-3">
              <div>
                <p className="text-foreground/75 mb-1">Format</p>
                <p className="font-mono">SVG, PNG</p>
              </div>
              <div>
                <p className="text-foreground/75 mb-1">Aspect Ratio</p>
                <p className="font-mono">1:1 (Square)</p>
              </div>
              <div>
                <p className="text-foreground/75 mb-1">Min Size</p>
                <p className="font-mono">40px × 40px</p>
              </div>
              <div>
                <p className="text-foreground/75 mb-1">Primary Use</p>
                <p>App icons, favicons, avatars</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Space */}
      <div className="border border-border rounded-lg p-8">
        <h3 className="text-xl font-bold mb-6">Clear Space Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-bold mb-4 text-foreground/75">
              WORDMARK
            </p>
            <div className="relative inline-flex p-12">
              <div className="absolute inset-0 border-2 border-dashed  border-muted-dark rounded" />
              <Wordmark className="fill-muted-dark stroke-none w-25" />
            </div>
            <p className="text-sm text-foreground/75 mt-6">
              Minimum clear space = Logo height × 0.5
            </p>
          </div>
          <div>
            <p className="text-sm font-bold mb-4 text-foreground/75">SYMBOL</p>
            <div className="relative inline-flex p-8">
              <div className="absolute inset-0 border-2 border-dashed  border-muted-dark rounded" />
              <Symbol className="fill-muted-dark stroke-none w-14" />
            </div>
            <p className="text-sm text-foreground/75 mt-6">
              Minimum clear space = Symbol width × 0.25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WordmarkVariations() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Wordmark Variations</h1>
        <p className="text-lg text-foreground/75">
          All approved wordmark configurations for different backgrounds and
          contexts (neutral colors only)
        </p>
      </div>

      {/* Black on White */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Black on White Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#000000] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                High contrast for maximum visibility
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#000000] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Minimum size - maintains legibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White on Black */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">White on Black Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#FFFFFF] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                For dark interfaces and dark mode
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#FFFFFF] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Minimum size on dark backgrounds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gray on White */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Gray (#808080) on White Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#808080] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                Default brand gray - most common usage
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#808080] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Standard logo configuration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gray on Black */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Gray (#808080) on Black Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#808080] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                Subtle presence on dark backgrounds
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#808080] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Lower contrast alternative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black on Gray */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Black on Gray (#808080) Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#000000] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                Strong contrast on mid-tone background
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#000000] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Maintains legibility at small size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White on Gray */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          White on Gray (#808080) Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#FFFFFF] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                Bright contrast on mid-tone background
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#FFFFFF] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Good visibility at minimum size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black on Light-to-Gray Gradient */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Black on Light Gray to Gray Gradient
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#F5F5F5] to-[#808080] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#000000] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                45° gradient: #F5F5F5 → #808080
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#F5F5F5] to-[#808080] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#000000] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Works on gradient backgrounds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White on Gray-to-Dark Gray Gradient */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          White on Gray to Dark Gray Gradient
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#808080] to-[#121212] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#FFFFFF] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 52px)</p>
              <p className="text-xs text-foreground/75">
                45° gradient: #808080 → #121212
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#808080] to-[#121212] p-12 flex items-center justify-center min-h-[200px]">
              <Wordmark className="fill-[#FFFFFF] stroke-none w-17" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (68 × 18px)</p>
              <p className="text-xs text-foreground/75">
                Dark gradient compatibility
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SymbolVariations() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Symbol Variations</h1>
        <p className="text-lg text-foreground/75">
          All approved symbol configurations for different backgrounds and
          contexts (neutral colors only)
        </p>
      </div>

      {/* Black on White */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Black on White Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#000000] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                High contrast for maximum impact
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#000000] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">
                Minimum size - app icons, favicons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White on Black */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">White on Black Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#FFFFFF] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                For dark interfaces and dark mode
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#FFFFFF] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">Dark mode app icons</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gray on White */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Gray (#808080) on White Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#808080] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                Default brand gray - most common usage
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-white p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#808080] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">
                Standard symbol configuration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gray on Black */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Gray (#808080) on Black Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#808080] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                Subtle presence on dark backgrounds
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-black p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#808080] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">
                Lower contrast alternative
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black on Gray */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Black on Gray (#808080) Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#000000] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                Strong contrast on mid-tone background
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#000000] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">
                Clear at minimum size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White on Gray */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          White on Gray (#808080) Background
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#FFFFFF] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                Bright contrast on mid-tone background
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-[#808080] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#FFFFFF] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">
                Good visibility at minimum size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black on Light-to-Gray Gradient */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          Black on Light Gray to Gray Gradient
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#F5F5F5] to-[#808080] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#000000] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                45° gradient: #F5F5F5 → #808080
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#F5F5F5] to-[#808080] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#000000] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">
                Works on gradient backgrounds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White on Gray-to-Dark Gray Gradient */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          White on Gray to Dark Gray Gradient
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#808080] to-[#121212] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#FFFFFF] stroke-none w-50" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Large (200 × 200px)</p>
              <p className="text-xs text-foreground/75">
                45° gradient: #808080 → #121212
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-linear-to-br from-[#808080] to-[#121212] p-12 flex items-center justify-center h-[250px]">
              <Symbol className="fill-[#FFFFFF] stroke-none w-10" />
            </div>
            <div className="p-4 bg-muted-light border-t border-border">
              <p className="text-xs font-bold mb-1">Small (40 × 40px)</p>
              <p className="text-xs text-foreground/75">
                Dark gradient compatibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Uses */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Illustrative Symbol Uses</h2>
        <p className="text-foreground/75">
          Symbol as decorative element with various fill and stroke treatments
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="p-12 flex items-center justify-center min-h-[250px]">
              <div className="">
                <Symbol className="fill-none stroke-foreground stroke-0.5 w-50" />
              </div>
            </div>
            <div className="p-4 bg-background border-t border-border">
              <p className="text-xs font-bold mb-1">Stroke Only</p>
              <p className="text-xs text-foreground/75">
                No fill, 1px stroke - decorative use
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-background p-12 flex items-center justify-center min-h-[250px]">
              <div className="p-0.5">
                <Symbol className="fill-[#ADADAD] opacity-10 stroke-none w-50" />
              </div>
            </div>
            <div className="p-4 bg-background border-t border-border">
              <p className="text-xs font-bold mb-1">10% Fill</p>
              <p className="text-xs text-foreground/75">
                Subtle background pattern
              </p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="bg-background p-12 flex items-center justify-center min-h-[250px]">
              <div className="p-0.5">
                <Symbol className="fill-[#ADADAD] opacity-25 stroke-none w-50" />
              </div>
            </div>
            <div className="p-4 bg-background border-t border-border">
              <p className="text-xs font-bold mb-1">25% Fill</p>
              <p className="text-xs text-foreground/75">Background watermark</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CombinedMarks() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Combined Marks</h1>
        <p className="text-lg text-foreground/75">
          Symbol and wordmark used together for enhanced brand presence
        </p>
      </div>

      {/* Overlaid Compositions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Symbol with Wordmark Overlay</h2>
        <p className="text-foreground/75">
          Large symbol at 25% opacity with wordmark overlaid - creates visual
          depth and brand recognition
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* White Background */}
          <div className="border border-border rounded-lg overflow-hidden relative">
            <div className="bg-white p-12 flex items-center justify-center min-h-[350px] relative">
              <div className="absolute">
                <Symbol className="fill-[#808080] opacity-15 stroke-none w-100" />
              </div>
              <div className="relative z-10">
                <Wordmark className="fill-[#808080] stroke-none w-50" />
              </div>
            </div>
            <div className="p-4 bg-muted-light/25 backdrop-blur-lg border-t border-border/25 absolute bottom-0 z-20 w-full">
              <p className="text-[13px] font-bold">Light Background</p>
              <p className="text-[13px] text-black">
                Symbol at 25% opacity, gray wordmark overlay
              </p>
            </div>
          </div>

          {/* Dark Background */}
          <div className="border border-border rounded-lg overflow-hidden relative">
            <div className="bg-black p-12 flex items-center justify-center min-h-[350px] relative">
              <div className="absolute">
                <Symbol className="fill-[#808080] opacity-25 stroke-none w-100" />
              </div>
              <div className="relative z-10">
                <Wordmark className="fill-[#808080] stroke-none w-50" />
              </div>
            </div>
            <div className="p-4 bg-muted-light/25 backdrop-blur-lg border-t border-border/25 absolute bottom-0 z-20 w-full text-white">
              <p className="text-[13px] font-bold">Dark Background</p>
              <p className="text-[13px]">
                Symbol at 25% opacity, white wordmark overlay
              </p>
            </div>
          </div>

          {/* Gray Background - Dark Symbol */}
          <div className="border border-border rounded-lg overflow-hidden relative">
            <div className="bg-[#808080] p-12 flex items-center justify-center min-h-[350px] relative">
              <div className="absolute">
                <Symbol className="fill-[#000000] opacity-15 stroke-none w-100" />
              </div>
              <div className="relative z-10">
                <Wordmark className="fill-[#000000] stroke-none w-50" />
              </div>
            </div>
            <div className="p-4 bg-muted-light/25 backdrop-blur-lg border-t border-border/25 absolute bottom-0 z-20 w-full">
              <p className="text-[13px] font-bold">Gray Background - Dark</p>
              <p className="text-[13px] text-[#eeeeee]">
                Black symbol at 25%, black wordmark
              </p>
            </div>
          </div>

          {/* Gray Background - Light Symbol */}
          <div className="border border-border rounded-lg overflow-hidden relative">
            <div className="bg-[#808080] p-12 flex items-center justify-center min-h-[350px] relative">
              <div className="absolute">
                <Symbol className="fill-[#FFFFFF] opacity-15 stroke-none w-100" />
              </div>
              <div className="relative z-10">
                <Wordmark className="fill-[#FFFFFF] stroke-none w-50" />
              </div>
            </div>
            <div className="p-4 bg-muted-light/25 backdrop-blur-lg border-t border-border/25 absolute bottom-0 z-20 w-full">
              <p className="text-[13px] font-bold">Gray Background - Light</p>
              <p className="text-[13px] text-[#eeeeee]">
                White symbol at 25%, white wordmark
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">When to Use Combined Marks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Appropriate Uses</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Hero sections on landing pages</li>
              <li>• Marketing materials and posters</li>
              <li>• Large format print media</li>
              <li>• Presentation title slides</li>
              <li>• Brand identity showcases</li>
            </ul>
          </div>
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold">Avoid These Uses</span>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Small interface elements</li>
              <li>• Navigation headers</li>
              <li>• Email signatures</li>
              <li>• Social media profile images</li>
              <li>• Compact mobile screens</li>
            </ul>
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
        <h1 className="text-4xl font-bold mb-4">Logo Usage Guidelines</h1>
        <p className="text-lg text-foreground/75">
          Rules and best practices for maintaining brand integrity
        </p>
      </div>

      {/* DO */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Correct Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-brand-purple/50 rounded-lg p-6 bg-brand-purple/5">
            <div className="flex items-center gap-2 mb-4 text-brand-purple">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">Do</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span>•</span>
                <span>Maintain clear space around all logos</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Use approved color variations only</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Scale proportionally (lock aspect ratio)</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Use high-resolution vector files (SVG)</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Ensure sufficient contrast with background</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Respect minimum size requirements</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold">Don't</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span>•</span>
                <span>Stretch, compress, or distort the logo</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Rotate or tilt the logo</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Add effects (shadows, glows, bevels)</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Change colors outside approved palette</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Place on busy or low-contrast backgrounds</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Recreate or redraw the logo</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Examples of Incorrect Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Incorrect Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold text-sm">Don't Stretch</span>
            </div>
            <div className="bg-background/50 rounded p-4 flex items-center justify-center">
              <div className="w-[200px] h-[35px]">
                <Wordmark
                  className="fill-[#808080] stroke-none w-50 h-8"
                  preserveAspectRatio="none"
                />
              </div>
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold text-sm">Don't Rotate</span>
            </div>
            <div className="bg-background/50 rounded p-4 flex items-center justify-center">
              <div className="rotate-12">
                <Wordmark className="fill-[#808080] stroke-none w-25" />
              </div>
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold text-sm">Don't Add Effects</span>
            </div>
            <div className="bg-background/50 rounded p-4 flex items-center justify-center">
              <div className="drop-shadow-2xl blur-[2px]">
                <Wordmark className="fill-[#808080] stroke-none w-25" />
              </div>
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold text-sm">
                Don't Use on Busy Backgrounds
              </span>
            </div>
            <div className="bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange rounded p-4 flex items-center justify-center">
              <Wordmark className="fill-[#808080] stroke-none w-25" />
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold text-sm">Don't Change Colors</span>
            </div>
            <div className="bg-background/50 rounded p-4 flex items-center justify-center">
              <Wordmark className="fill-brand-folly stroke-none w-25" />
            </div>
          </div>

          <div className="border-2 border-destructive/50 rounded-lg p-6 bg-destructive/5">
            <div className="flex items-center gap-2 mb-4 text-destructive">
              <XCircle className="w-5 h-5" />
              <span className="font-bold text-sm">Don't Compress</span>
            </div>
            <div className="bg-background/50 rounded p-4 flex items-center justify-center">
              <div className="w-[100px] h-[52px]">
                <Wordmark
                  className="fill-[#808080] stroke-none w-25 h-15"
                  preserveAspectRatio="none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Selection Guide */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Logo Selection Guide</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted-light border-b border-border">
              <tr>
                <th className="text-left p-4 font-bold">Use Case</th>
                <th className="text-left p-4 font-bold">Logo</th>
                <th className="text-left p-4 font-bold">Variation</th>
                <th className="text-left p-4 font-bold">Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4">Website header (light)</td>
                <td className="p-4">Wordmark</td>
                <td className="p-4">Gray on white</td>
                <td className="p-4 font-mono">135 × 35px</td>
              </tr>
              <tr>
                <td className="p-4">Website header (dark)</td>
                <td className="p-4">Wordmark</td>
                <td className="p-4">White on black</td>
                <td className="p-4 font-mono">135 × 35px</td>
              </tr>
              <tr>
                <td className="p-4">Mobile app icon</td>
                <td className="p-4">Symbol</td>
                <td className="p-4">Any approved color</td>
                <td className="p-4 font-mono">512 × 512px+</td>
              </tr>
              <tr>
                <td className="p-4">Favicon</td>
                <td className="p-4">Symbol</td>
                <td className="p-4">Gray or black</td>
                <td className="p-4 font-mono">40 × 40px min</td>
              </tr>
              <tr>
                <td className="p-4">Hero section</td>
                <td className="p-4">Combined mark</td>
                <td className="p-4">Symbol 25% + wordmark</td>
                <td className="p-4 font-mono">Large format</td>
              </tr>
              <tr>
                <td className="p-4">Email signature</td>
                <td className="p-4">Wordmark</td>
                <td className="p-4">Gray on white</td>
                <td className="p-4 font-mono">87 × 22px</td>
              </tr>
              <tr>
                <td className="p-4">Social media profile</td>
                <td className="p-4">Symbol</td>
                <td className="p-4">Any approved color</td>
                <td className="p-4 font-mono">400 × 400px+</td>
              </tr>
              <tr>
                <td className="p-4">Print materials</td>
                <td className="p-4">Wordmark or Symbol</td>
                <td className="p-4">Black on white preferred</td>
                <td className="p-4 font-mono">Vector (SVG)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
