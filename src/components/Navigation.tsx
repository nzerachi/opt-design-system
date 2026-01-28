import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { PrimaryButton } from "./Button";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import Wordmark from "../assets/wordmark";

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationProps {
  items?: NavItem[];
  showCTA?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
}

export function Navigation({
  items = [
    { label: "Eye Test", href: "#eye-test" },
    { label: "Shop", href: "#shop" },
    { label: "Help", href: "#help" },
    { label: "My Vision", href: "#my-vision" },
  ],
  showCTA = true,
  ctaText = "Get a Pair Now",
  onCTAClick,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-background border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="Opticule Home">
              <Wordmark className="fill-muted-dark stroke-none w-35 mt-0.5" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="p-2 rounded-lg hover:bg-muted-light transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-muted-light transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="p-2 rounded-lg hover:bg-muted-light transition-colors relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-brand-folly text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                4
              </span>
            </button>
            <ThemeToggle />
            {showCTA && (
              <PrimaryButton onClick={onCTAClick}>{ctaText}</PrimaryButton>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted-light transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-brand-purple transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  className="p-2 rounded-lg hover:bg-muted-light transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-muted-light transition-colors"
                  aria-label="Account"
                >
                  <User className="w-5 h-5" />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-muted-light transition-colors relative"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-brand-folly text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    4
                  </span>
                </button>
              </div>
              {showCTA && (
                <PrimaryButton onClick={onCTAClick} className="w-full">
                  {ctaText}
                </PrimaryButton>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
