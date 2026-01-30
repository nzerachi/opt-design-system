import Symbol from "@/assets/symbol";
import { Eye, Search, ShoppingCart } from "lucide-react";

interface PatternsSectionProps {
  activeSubSection: string;
}

export function PatternsSection({ activeSubSection }: PatternsSectionProps) {
  if (activeSubSection === "layout-patterns") {
    return <LayoutPatterns />;
  }

  if (activeSubSection === "functional-patterns") {
    return <FunctionalPatterns />;
  }

  return null;
}

function LayoutPatterns() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Layout Patterns</h1>
        <p className="text-lg text-foreground/75">
          Common layout structures for consistent page architecture
        </p>
      </div>

      {/* Hero Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Hero Section</h2>
          <p className="text-foreground/75">
            Large, attention-grabbing header for landing pages
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-linear-to-br from-muted/50 to-muted/20 p-16 text-center">
            <h1 className="md:text-5xl text-[44px] leading-12 font-bold mb-4">See the World <br className="block md:hidden"/> Clearly</h1>
            <p className="text-sm text-foreground/75 max-w-2xl mx-auto mb-8">
              Browse our curated and certified exclusive frames
            </p>
            <button className="px-8 py-4 bg-foreground hover:bg-background hover:text-foreground hover:outline-2 focus:bg-background focus:text-foreground focus:outline-2 text-background rounded-lg font-bold">
              Get a Pair Now
            </button>
          </div>
        </div>
      </section>

      {/* Card Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Card Grid</h2>
          <p className="text-foreground/75">
            Responsive grid for product listings or features
          </p>
        </div>
        <div className="border border-border rounded-lg p-8">
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-muted-light flex items-center justify-center mx-auto mb-3">
                  <Symbol className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-sm mb-1">Feature {i}</h3>
                <p className="text-xs text-foreground/75">Description here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Two-Column Layout</h2>
          <p className="text-foreground/75">Image + text content split</p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="bg-muted-light aspect-square flex items-center justify-center">
              <Symbol className="w-24 h-24 text-foreground/75" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">About Our Lenses</h3>
              <p className="text-foreground/75 mb-6">
                ...with approximately <strong>576 megapixels</strong>, your eyes
                are so
                <em className="text-brand-folly not-italic"> powerful </em> that
                <em className="text-brand-folly not-italic">
                  {" "}
                  millions of photoreceptors{" "}
                </em>
                send visual data to your brain.
              </p>
              <button className="px-6 py-3 bg-foreground text-background rounded-lg font-medium self-start">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Layout */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Dashboard Layout</h2>
          <p className="text-foreground/75">
            Sidebar + content area for applications
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="flex h-[400px]">
            <div className="w-48 bg-muted-light border-r border-border p-4">
              <div className="space-y-2">
                <div className="h-8 bg-foreground/10 rounded" />
                <div className="h-8 bg-muted-light rounded" />
                <div className="h-8 bg-muted-light rounded" />
                <div className="h-8 bg-muted-light rounded" />
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="h-8 bg-muted-light rounded w-48 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="h-24 bg-muted/50 rounded" />
                <div className="h-24 bg-muted/50 rounded" />
                <div className="h-24 bg-muted/50 rounded" />
              </div>
              <div className="h-48 bg-muted-light rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Footer Section</h2>
          <p className="text-foreground/75">
            Multi-column footer with links and newsletter
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light p-8">
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div>
                <div className="h-4 bg-foreground/20 rounded max-w-20 mb-3" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted-dark/25 rounded max-w-24" />
                  <div className="h-3 bg-muted-dark/25 rounded max-w-28" />
                  <div className="h-3 bg-muted-dark/25 rounded max-w-20" />
                </div>
              </div>
              <div>
                <div className="h-4 bg-foreground/20 rounded max-w-24 mb-3" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted-dark/25 rounded max-w-20" />
                  <div className="h-3 bg-muted-dark/25 rounded max-w-24" />
                  <div className="h-3 bg-muted-dark/25 rounded max-w-28" />
                </div>
              </div>
              <div>
                <div className="h-4 bg-foreground/20 rounded max-w-20 mb-3" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted-dark/25 rounded max-w-16" />
                  <div className="h-3 bg-muted-dark/25 rounded max-w-20" />
                  <div className="h-3 bg-muted-dark/25 rounded max-w-24" />
                </div>
              </div>
              <div>
                <div className="h-4 bg-foreground/20 rounded max-w-28 mb-3" />
                <div className="flex gap-2">
                  <div className="h-8 bg-muted-dark/25 rounded flex-1" />
                  <div className="h-8 bg-foreground/20 rounded max-w-20" />
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <div className="h-3 bg-muted-dark/25 rounded max-w-64" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FunctionalPatterns() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Functional Patterns</h1>
        <p className="text-lg text-foreground/75">
          Reusable solutions for common user interactions and flows
        </p>
      </div>

      {/* Search Pattern */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Search Pattern</h2>
          <p className="text-foreground/75">
            Search input with suggestions dropdown
          </p>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/75" />
              <input
                type="search"
                placeholder="Search frames, lenses, accessories..."
                className="w-full pl-10 pr-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
            </div>
            <div className="mt-2 border border-border rounded-lg bg-background p-4 shadow-lg">
              <p className="text-xs text-foreground/75 mb-2">
                Popular Searches
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 hover:bg-muted-light rounded cursor-pointer">
                  <Search className="w-4 h-4 text-foreground/75" />
                  <span className="text-sm">Blue light glasses</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-muted-light rounded cursor-pointer">
                  <Search className="w-4 h-4 text-foreground/75" />
                  <span className="text-sm">Aviator sunglasses</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-muted-light rounded cursor-pointer">
                  <Search className="w-4 h-4 text-foreground/75" />
                  <span className="text-sm">Progressive lenses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Validation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Form Validation Pattern</h2>
          <p className="text-foreground/75">
            Inline validation with error and success states
          </p>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value="user@example.com"
                className="w-full px-4 py-3 bg-input-background border-2 border-brand-folly rounded-lg"
                readOnly
              />
              <p className="text-xs text-brand-folly flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Valid email address
              </p>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                value="123"
                className="w-full px-4 py-3 bg-input-background border-2 border-brand-folly rounded-lg"
                readOnly
              />
              <p className="text-xs text-brand-folly flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Please enter a valid phone number
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Cart Summary Pattern</h2>
          <p className="text-foreground/75">
            Shopping cart with item list and totals
          </p>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="max-w-md">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Cart (2 items)
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-muted-light rounded flex items-center justify-center shrink-0">
                  <Eye className="w-8 h-8 text-foreground/75" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Classic Round Frames</h4>
                  <p className="text-xs text-foreground/75">Black, Medium</p>
                  <p className="text-sm font-bold mt-1">$89.00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-muted-light rounded flex items-center justify-center shrink-0">
                  <Eye className="w-8 h-8 text-foreground/75" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Blue Light Blockers</h4>
                  <p className="text-xs text-foreground/75">Clear, Large</p>
                  <p className="text-sm font-bold mt-1">$69.00</p>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-foreground/75">Subtotal</span>
                <span>$158.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground/75">Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-border">
                <span>Total</span>
                <span>$168.00</span>
              </div>
            </div>
            <button className="w-full mt-6 px-6 py-3 bg-foreground text-background rounded-lg font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Pagination Pattern</h2>
          <p className="text-foreground/75">
            Navigate through multiple pages of content
          </p>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="flex items-center justify-center gap-2">
            <button
              className="px-3 py-2 border border-border rounded hover:bg-muted"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-2 bg-foreground text-background rounded font-medium">
              1
            </button>
            <button className="px-3 py-2 border border-border rounded hover:bg-muted">
              2
            </button>
            <button className="px-3 py-2 border border-border rounded hover:bg-muted">
              3
            </button>
            <span className="px-2">...</span>
            <button className="px-3 py-2 border border-border rounded hover:bg-muted">
              10
            </button>
            <button className="px-3 py-2 border border-border rounded hover:bg-muted">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Authentication Flow */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Authentication Pattern</h2>
          <p className="text-foreground/75">
            Login/signup form with social options
          </p>
        </div>
        <div className="border border-border rounded-lg p-6">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Sign In</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg"
                />
              </div>
            </div>
            <button className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium mb-4">
              Sign In
            </button>
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-foreground/75">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
                Google
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
                Apple
              </button>
            </div>
            <p className="text-center text-sm text-foreground/75 mt-6">
              Don't have an account?{" "}
              <a href="#" className="font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
