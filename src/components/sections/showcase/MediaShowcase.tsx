import { Image } from "../../media/Image";
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

// Demo placeholder image URLs (UI-safe solid-color placeholders)
const SAMPLE = "https://images.unsplash.com/photo-1561211919-1947ba6b61a5?w=600&q=80";
const PORTRAIT = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80";
const BROKEN = "/this-image-does-not-exist.jpg";

export function MediaShowcase() {
  return (
    <div className="space-y-16">
      <PageHeader
        title="Media & Image"
        description="A lazy-loading image component with skeleton shimmer while loading, graceful error fallback, aspect ratio control, and object-fit variants. Built on the native <img> element with IntersectionObserver-based lazy loading."
        badges={[
          { label: "Stable", color: "green" },
          { label: "Lazy-loaded", color: "blue" },
          { label: "v1.0.0", color: "gray" },
        ]}
        importPath={`import { Image } from "@opticule/ds"`}
      />

      <DocSection title="Anatomy">
        <AnatomyList items={[
          { number: 1, label: "Wrapper div", description: "Establishes position: relative overflow: hidden context. Applies rounded and aspectRatio styles." },
          { number: 2, label: "Shimmer skeleton", description: "Animating placeholder shown while the image is loading. Hidden from assistive technology via aria-hidden." },
          { number: 3, label: "img element", description: "Native <img> with loading='lazy' and decoding='async'. Fades in from opacity-0 once loaded." },
          { number: 4, label: "Error state", description: "Shown when the src fails to load and no fallbackSrc is provided. Displays a broken-image icon." },
        ]} />
      </DocSection>

      <DocSection title="Usage guidelines">
        <UsageBlock
          use={[
            { text: "Always provide a descriptive alt text that conveys the content and function of the image." },
            { text: "Use aspectRatio to prevent layout shift while images are loading." },
            { text: "Set fallbackSrc to a placeholder image for graceful degradation on error." },
            { text: "Use fit='contain' for logos and diagrams that must not be cropped." },
            { text: "Use fit='cover' for photos and hero images that should fill their container." },
          ]}
          avoid={[
            { text: "Don't use empty alt text ('') for informational images — only for purely decorative ones." },
            { text: "Don't skip aspectRatio on images with unknown dimensions — it causes cumulative layout shift." },
            { text: "Don't use images for text content — use actual text elements for screen reader support." },
          ]}
        />
      </DocSection>

      <DocSection title="Aspect Ratios">
        <DemoBlock label="common aspect ratios with fit='cover'" vertical>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {[
              { ratio: "16/9", label: "16:9 — Video" },
              { ratio: "4/3", label: "4:3 — Photo" },
              { ratio: "1/1", label: "1:1 — Square" },
              { ratio: "3/2", label: "3:2 — Film" },
              { ratio: "21/9", label: "21:9 — Cinema" },
              { ratio: "9/16", label: "9:16 — Portrait" },
            ].map(({ ratio, label }) => (
              <div key={ratio} className="space-y-1.5">
                <Image
                  src={SAMPLE}
                  alt={`Sample landscape photo in ${label} format`}
                  aspectRatio={ratio}
                  rounded="lg"
                  fit="cover"
                />
                <p className="text-xs text-foreground/50 font-mono text-center">{label}</p>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Rounded Variants">
        <DemoBlock label="border radius options">
          {(["none", "sm", "md", "lg", "xl"] as const).map((r) => (
            <div key={r} className="space-y-1.5">
              <Image
                src={PORTRAIT}
                alt="Portrait photo"
                aspectRatio="1/1"
                rounded={r}
                className="w-20 h-20"
              />
              <p className="text-xs text-foreground/50 font-mono text-center">{r}</p>
            </div>
          ))}
          <div className="space-y-1.5">
            <Image
              src={PORTRAIT}
              alt="Portrait photo — circular crop"
              aspectRatio="1/1"
              rounded="full"
              className="w-20 h-20"
            />
            <p className="text-xs text-foreground/50 font-mono text-center">full</p>
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Object Fit Variants">
        <DemoBlock label="fit options — same image, same container" vertical>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {(["cover", "contain", "fill", "none", "scale-down"] as const).map((f) => (
              <div key={f} className="space-y-1.5">
                <div className="w-full h-28 border border-border rounded-lg overflow-hidden bg-muted-light/20">
                  <Image
                    src={PORTRAIT}
                    alt={`Portrait with object-fit ${f}`}
                    fit={f}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-foreground/50 font-mono text-center">{f}</p>
              </div>
            ))}
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Error State & Fallback">
        <DemoBlock label="broken src — no fallback vs with fallback">
          <div className="space-y-1.5">
            <Image
              src={BROKEN}
              alt="Image that failed to load — shows broken icon"
              aspectRatio="4/3"
              rounded="lg"
              className="w-40"
            />
            <p className="text-xs text-foreground/50 text-center">No fallback</p>
          </div>
          <div className="space-y-1.5">
            <Image
              src={BROKEN}
              fallbackSrc="https://placehold.co/400x300/1a1a1a/666?text=Not+Found"
              alt="Image with fallback placeholder"
              aspectRatio="4/3"
              rounded="lg"
              className="w-40"
            />
            <p className="text-xs text-foreground/50 text-center">With fallbackSrc</p>
          </div>
        </DemoBlock>
      </DocSection>

      <DocSection title="Code Examples">
        <CodeBlock
          language="tsx"
          code={`import { Image } from "@opticule/ds";

// Basic responsive photo
<Image
  src="/team-photo.jpg"
  alt="The Opticule design team at the 2026 offsite"
  aspectRatio="16/9"
  rounded="xl"
/>

// Square avatar with circle crop
<Image
  src="/avatar.jpg"
  alt="Nze Rachi, Design Lead"
  aspectRatio="1/1"
  rounded="full"
  className="w-12 h-12"
/>

// Logo (contain so it's never cropped)
<Image
  src="/logo.svg"
  alt="Acme Inc. logo"
  fit="contain"
  aspectRatio="3/1"
  className="w-32"
/>

// With error fallback
<Image
  src={product.imageUrl}
  fallbackSrc="/placeholder-product.jpg"
  alt={product.name}
  aspectRatio="4/3"
  rounded="lg"
/>`}
        />
      </DocSection>

      <DocSection title="API Reference">
        <PropsTable
          title="Image props"
          rows={[
            { name: "src", type: "string", description: "Image source URL." },
            { name: "alt", type: "string", required: true, description: "Descriptive alt text. Use empty string only for decorative images." },
            { name: "aspectRatio", type: "string", description: "CSS aspect-ratio value e.g. '16/9', '1/1', '4/3'. Prevents layout shift." },
            { name: "fit", type: `"cover" | "contain" | "fill" | "none" | "scale-down"`, default: `"cover"`, description: "CSS object-fit value." },
            { name: "rounded", type: `"none" | "sm" | "md" | "lg" | "xl" | "full"`, default: `"none"`, description: "Border radius of the image wrapper." },
            { name: "fallbackSrc", type: "string", description: "Alternate src shown when the primary src fails to load." },
            { name: "className", type: "string", description: "Applied to the wrapper element." },
          ]}
        />
      </DocSection>

      <DocSection title="Accessibility">
        <AccessibilitySection>
          <A11yPoint>Always provide a meaningful <IC>alt</IC> attribute — describe what is shown, not 'image of' or 'photo of'. For decorative images, use <IC>alt=""</IC>.</A11yPoint>
          <A11yPoint>The shimmer skeleton uses <IC>aria-hidden</IC> so screen readers skip it and wait to announce the image once it's loaded.</A11yPoint>
          <A11yPoint>The error state includes <IC>aria-label="Image failed to load"</IC> so screen readers surface the failure state meaningfully.</A11yPoint>
          <A11yPoint>Images with <IC>loading="lazy"</IC> load only when they enter the viewport — this reduces bandwidth for users on slow connections.</A11yPoint>
        </AccessibilitySection>
      </DocSection>
    </div>
  );
}
