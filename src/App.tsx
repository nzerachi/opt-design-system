import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  Book,
  Palette,
  Layout,
  Eye,
  Grid3x3,
  GitBranch,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PrinciplesSection } from "./components/sections/PrinciplesSection";
import { BrandIdentitySection } from "./components/sections/BrandIdentitySection";
import { FoundationsSection } from "./components/sections/FoundationsSection";
import { ComponentsSection } from "./components/sections/ComponentsSection";
import { PatternsSection } from "./components/sections/PatternsSection";
import { GovernanceSection } from "./components/sections/GovernanceSection";
import Wordmark from "./assets/wordmark";

export default function App() {
  const [activeSection, setActiveSection] = useState("principles");
  const [activeSubSection, setActiveSubSection] = useState<string>("logos");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Scroll to top when section changes
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, [activeSection, activeSubSection]);

  const sections = [
    {
      id: "principles",
      label: "Foundational Principles",
      icon: Book,
      subSections: [],
    },
    {
      id: "identity",
      label: "Brand Identity",
      icon: Eye,
      subSections: [
        { id: "logos", label: "Logo System" },
        { id: "wordmark", label: "Wordmark Variations" },
        { id: "symbol", label: "Symbol Variations" },
        { id: "combined", label: "Combined Marks" },
        { id: "usage", label: "Usage Guidelines" },
      ],
    },
    {
      id: "foundations",
      label: "Design Foundations",
      icon: Palette,
      subSections: [
        { id: "colors", label: "Color System" },
        { id: "typography", label: "Typography" },
        { id: "iconography", label: "Iconography" },
        { id: "imagery", label: "Imagery" },
        { id: "spacing", label: "Spacing & Grid" },
      ],
    },
    {
      id: "components",
      label: "Component Library",
      icon: Layout,
      subSections: [
        { id: "buttons", label: "Buttons & CTAs" },
        { id: "inputs", label: "Forms & Inputs" },
        { id: "navigation", label: "Navigation" },
        { id: "cards", label: "Cards" },
        { id: "feedback", label: "Feedback Elements" },
        { id: "dashboard", label: "Dashboard Components" },
      ],
    },
    {
      id: "patterns",
      label: "Pattern Library",
      icon: Grid3x3,
      subSections: [
        { id: "layout-patterns", label: "Layout Patterns" },
        { id: "functional-patterns", label: "Functional Patterns" },
      ],
    },
    {
      id: "governance",
      label: "Documentation",
      icon: GitBranch,
      subSections: [
        { id: "code-implementation", label: "Code Implementation" },
        { id: "usage-guidelines", label: "Usage Guidelines" },
        { id: "contribution", label: "Contribution Model" },
      ],
    },
  ];

  // 1. Create a flat list of all navigable pages
  const allRoutes = sections.reduce((acc: any[], section) => {
    // If section has sub-sections, add each one as a separate page
    if (section.subSections && section.subSections.length > 0) {
      section.subSections.forEach((sub) => {
        acc.push({
          sectionId: section.id,
          subId: sub.id,
          label: sub.label,
          parentLabel: section.label,
        });
      });
    } else {
      // If no sub-sections (like Principles), add the section itself
      acc.push({
        sectionId: section.id,
        subId: null,
        label: section.label,
        parentLabel: null,
      });
    }
    return acc;
  }, []);

  // 2. Find the index of the current page
  const currentIndex = allRoutes.findIndex((route) => {
    if (route.sectionId !== activeSection) return false;
    // If the route has a subId, it must match the activeSubSection
    if (route.subId) return route.subId === activeSubSection;
    return true;
  });

  const prevPage = currentIndex > 0 ? allRoutes[currentIndex - 1] : null;
  const nextPage =
    currentIndex < allRoutes.length - 1 ? allRoutes[currentIndex + 1] : null;

  // 3. Helper to handle navigation
  const handleNavigate = (route: any) => {
    setActiveSection(route.sectionId);
    if (route.subId) {
      setActiveSubSection(route.subId);
    }
    // The useEffect will handle scrolling automatically
  };

  return (
    <div className="h-screen bg-background relative">
      {/* Mobile Menu Backdrop Overlay */}
      {/* Shows only when mobile menu is open, clicking it closes menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md2:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/25 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-2">
                <Wordmark className="fill-foreground/75 stroke-none w-20" />
              </div>

              <div>
                <h1 className="text-md font-medium text-foreground/75">
                  Design System
                </h1>
              </div>
            </div>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 -ml-2 rounded-md hover:bg-muted md2:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside
          className={`
            /* Base Styles (Both) */
            fixed md2:sticky top-14 md2:top-15 bottom-0 left-0 z-40 
            flex flex-col border-r border-border bg-linear-to-br from-background/50 via-background/50 to-muted-light/50 backdrop-blur-md
            transition-transform duration-300 ease-in-out
            overflow-y-auto pt-[1rem] pr-4 pb-10
            
            /* Mobile Styles (Drawer) */
            w-[85vw] max-w-[300px] 
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            
            /* Desktop Styles (Sidebar) */
            md2:translate-x-0 md2:w-[calc(340px+4vw)] md2:top-[3.5rem] md2:h-[calc(100vh-3.5rem)] md2:z-0
          `}
        >
          <nav className="p-4 space-y-2">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => {
                    setActiveSection(section.id);
                    if (section.subSections && section.subSections.length > 0) {
                      setActiveSubSection(section.subSections[0].id);
                    }
                    // Note: We close the mobile menu via the useEffect on activeSection change
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all text-sm ${
                    activeSection === section.id
                      ? "bg-foreground text-background font-medium"
                      : "text-foreground hover:bg-foreground/15 hover:text-foreground"
                  }`}
                >
                  <section.icon className="w-4 h-4 shrink-0" />
                  <span>{section.label}</span>
                </button>
                {activeSection === section.id &&
                  section.subSections &&
                  section.subSections.length > 0 && (
                    <div className="ml-7 mt-1 space-y-2">
                      {section.subSections.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            setActiveSubSection(sub.id);
                            setIsMobileMenuOpen(false); // Close menu on sublink click
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-all ${
                            activeSubSection === sub.id
                              ? "bg-foreground/15 font-medium text-foreground"
                              : "hover:outline outline-muted-light hover:text-foreground/75"
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          ref={mainContentRef}
          className="w-full pt-[8rem] overflow-y-auto h-screen"
        >
          <div className="max-w-6xl px-8 mx-auto">
            {activeSection === "principles" && <PrinciplesSection />}
            {activeSection === "identity" && (
              <BrandIdentitySection activeSubSection={activeSubSection} />
            )}
            {activeSection === "foundations" && (
              <FoundationsSection activeSubSection={activeSubSection} />
            )}
            {activeSection === "components" && (
              <ComponentsSection activeSubSection={activeSubSection} />
            )}
            {activeSection === "patterns" && (
              <PatternsSection activeSubSection={activeSubSection} />
            )}
            {activeSection === "governance" && (
              <GovernanceSection activeSubSection={activeSubSection} />
            )}
          </div>

          <div className="mt-20 py-10 px-2 md:px-8 border-t border-border flex justify-between items-center">
            {/* Previous Button */}
            {prevPage ? (
              <button
                onClick={() => handleNavigate(prevPage)}
                className="group flex flex-row items-center px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors text-left border border-transparent hover:border-border max-w-[45%]"
              >
                <ChevronLeft className="w-10 h-14 shrink-0 -ml-4" />
                <div>
                  <span className="text-sm text-foreground font-medium tracking-wider flex items-center group-hover:text-foreground underline">
                    Previous
                  </span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground/50 leading-4 mb-0.5">
                      {prevPage.label}
                    </span>
                    {prevPage.parentLabel && (
                      <span className="text-xs text-foreground ">
                        in {prevPage.parentLabel}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ) : (
              <div /> /* Empty div to keep Next button on the right if Prev is missing */
            )}

            {/* Next Button */}
            {nextPage ? (
              <button
                onClick={() => handleNavigate(nextPage)}
                className="group flex flex-row items-end px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors text-right border border-transparent hover:border-border max-w-[45%]"
              >
                <div>
                  <span className="text-sm text-foreground justify-end font-medium tracking-wider flex items-center group-hover:text-foreground underline">
                    Next
                  </span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground/50 leading-4 mb-0.5">
                      {nextPage.label}
                    </span>
                    {nextPage.parentLabel && (
                      <span className="text-xs text-foreground">
                        in {nextPage.parentLabel}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-10 h-14 shrink-0 -mr-4" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
