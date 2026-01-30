import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Eye,
  AlertCircle,
  Info,
  CheckCircle2,
  XCircle,
  Menu,
  Heart,
  Bell,
  Settings,
  Mail,
  Phone,
  Plus,
  Minus,
  Edit,
  Trash2,
  Download,
  Upload,
  Share2,
  Filter,
  RefreshCw,
  MoreVertical,
  MoreHorizontal,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Home,
  Calendar,
  Clock,
  MapPin,
  Star,
  Bookmark,
  Send,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Copy,
  Check,
  Save,
  LogOut,
  LogIn,
  HelpCircle,
  Grid3x3,
} from "lucide-react";
import Wordmark from "../../assets/wordmark";
import Symbol from "../../assets/symbol";

interface ComponentsSectionProps {
  activeSubSection: string;
}

export function ComponentsSection({
  activeSubSection,
}: ComponentsSectionProps) {
  if (activeSubSection === "buttons") {
    return <ButtonsSection />;
  }

  if (activeSubSection === "inputs") {
    return <InputsSection />;
  }

  if (activeSubSection === "navigation") {
    return <NavigationSection />;
  }

  if (activeSubSection === "cards") {
    return <CardsSection />;
  }

  if (activeSubSection === "feedback") {
    return <FeedbackSection />;
  }

  if (activeSubSection === "dashboard") {
    return <DashboardSection />;
  }

  return null;
}

function ButtonsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Buttons & CTAs</h1>
        <p className="text-lg text-foreground/75">
          Interactive elements for user actions across all platforms
        </p>
      </div>

      {/* Anatomy */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Button Anatomy</h2>
        <div className="border border-border rounded-lg p-16 bg-card flex justify-center">
          <div className="w-80">
            <div className="relative inline-flex group">
              {/* --- THE BUTTON --- */}
              {/* z-10 ensures text sits above the padding highlights */}
              <button className="relative z-10 px-8 py-4 bg-foreground text-background rounded-lg font-medium text-lg leading-none shadow-xl">
                Button Label
              </button>

              {/* --- SPECIFICATIONS OVERLAY --- */}

              {/* 1. Horizontal Padding (32px) */}
              {/* Visualizes the LEFT padding area */}
              <div className="absolute top-0 z-10 left-0 h-full w-8 hatch-brand-orange border-r border-dashed border-brand-orange pointer-events-none">
                {/* Dimension Line (Top) */}
                <div className="absolute -bottom-7 left-0 w-full flex flex-col items-center">
                  <div className="relative w-full flex items-end justify-between">
                    <div className="h-2 w-px bg-brand-orange"></div>
                    <div className="h-px w-full bg-brand-orange"></div>
                    <div className="h-2 w-px bg-brand-orange"></div>
                  </div>
                  <span className="text-xs font-mono text-brand-orange font-bold mt-1">
                    32px
                  </span>
                </div>
              </div>
              {/* (Optional) Right padding highlight for symmetry */}
              <div className="absolute top-0 right-0 h-full w-8 bg-brand-orange/10 border-r border-brand-orange/30 pointer-events-none" />

              {/* 2. Vertical Padding (16px) */}
              {/* Visualizes the TOP padding area */}
              <div className="absolute top-0 left-0 z-10 w-full h-4 hatch-brand-folly border-b border-dashed border-brand-folly pointer-events-none">
                {/* Dimension Line (Left) */}
                <div className="absolute -left-10 top-0 h-full flex flex-row items-center justify-end pr-2">
                  <span className="text-xs font-mono text-brand-folly font-bold mr-2">
                    16px
                  </span>
                  <div className="relative h-full flex flex-col items-start justify-between">
                    <div className="w-2 h-px bg-brand-folly"></div>
                    <div className="w-px h-full bg-brand-folly"></div>
                    <div className="w-2 h-px bg-brand-folly"></div>
                  </div>
                </div>
              </div>
              {/* (Optional) Bottom padding highlight for symmetry */}
              <div className="absolute bottom-0 left-0 w-full h-4 bg-brand-folly/10 border-b border-brand-folly/30 pointer-events-none" />

              {/* 3. Border Radius (8px) */}
              {/* Visualizes Bottom-Right Corner */}
              <div className="absolute bottom-0 right-0 pointer-events-none">
                {/* The corner stroke */}
                <div className="absolute bottom-0 right-0 w-5 h-5 rounded-br-lg border-b-2 border-r-2 border-brand-purple z-20"></div>
                {/* The label with a diagonal connector */}
                <div className="absolute top-full left-full flex flex-col items-start">
                  <div className="w-px h-4 bg-brand-purple rotate-[-45deg] origin-top-left ml-0.5"></div>
                  <div className="translate-x-2 -translate-y-1 text-xs font-mono text-brand-purple font-bold whitespace-nowrap">
                    8px Radius
                  </div>
                </div>
              </div>

              {/* 4. Font Specs */}
              {/* Aligned to the center right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-8 pointer-events-none">
                {/* Dotted connector line */}
                <div className="absolute left-1 top-1/2 w-7 border-t border-dashed border-muted-dark/50"></div>

                {/* Spec Card */}
                <div className="flex flex-col bg-muted-light/25 backdrop-blur border border-border rounded p-2 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-foreground"></span>
                    <span className="text-xs font-bold text-foreground">
                      Ubuntu
                    </span>
                  </div>
                  <div className="text-xs font-mono text-foreground/75 space-y-0.5">
                    <div className="flex justify-between gap-1">
                      <span>Weight:</span> <span>500(Medium)</span>
                    </div>
                    <div className="flex justify-between gap-1">
                      <span>Size:</span> <span>18px(lg)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Buttons */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Primary Buttons</h2>
          <p className="text-foreground/75">
            High-emphasis actions, limited to 1-2 per screen
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light px-6 py-3 border-b border-border">
            <h3 className="font-bold">States</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-[0.5fr_2fr_2fr] items-center gap-6">
              <div className="w-10 text-sm text-foreground/75">Normal</div>
              <button className="px-6 py-3 w-max justify-self-center bg-foreground text-background rounded-lg font-medium transition-all">
                Get a Pair Now
              </button>
              <code className="text-xs bg-muted-light px-2 py-1 rounded">
                bg-foreground text-background
              </code>
            </div>
            <div className="grid grid-cols-[0.5fr_2fr_2fr] items-center gap-6">
              <div className="w-10 text-sm text-foreground/75">Hover</div>
              <button className="px-6 py-3 w-max justify-self-center bg-foreground/90 text-background rounded-lg font-medium">
                Get a Pair Now
              </button>
              <code className="text-xs bg-muted-light px-2 py-1 rounded">
                opacity: 0.9
              </code>
            </div>
            <div className="grid grid-cols-[0.5fr_2fr_2fr] items-center gap-6">
              <div className="w-10 text-sm text-foreground/75">Active</div>
              <button className="px-6 py-3 w-max justify-self-center bg-foreground/80 text-background rounded-lg font-medium">
                Get a Pair Now
              </button>
              <code className="text-xs bg-muted-light px-2 py-1 rounded">
                opacity: 0.8
              </code>
            </div>
            <div className="grid grid-cols-[0.5fr_2fr_2fr] items-center gap-6">
              <div className="w-10 text-sm text-foreground/75">Disabled</div>
              <button
                disabled
                className="px-6 py-3 w-max justify-self-center bg-foreground/50 text-background/70 rounded-lg font-medium cursor-not-allowed"
              >
                Get a Pair Now
              </button>
              <code className="text-xs bg-muted-light px-2 py-1 rounded">
                opacity: 0.5, cursor: not-allowed
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Secondary Buttons</h2>
          <p className="text-foreground/75">
            Medium-emphasis actions, supporting primary CTAs
          </p>
        </div>
        <div className="border border-border rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-[0.5fr_2fr_2fr] items-center gap-6">
            <div className="w-10 text-sm text-foreground/75">Normal</div>
            <button className="px-6 justify-self-center py-3 bg-transparent border-2 border-foreground text-foreground rounded-lg font-medium">
              Browse Frames
            </button>
            <code className="text-xs bg-muted-light px-2 py-1 rounded">
              border-2 border-foreground
            </code>
          </div>
          <div className="grid grid-cols-[0.5fr_2fr_2fr] items-center gap-6">
            <div className="w-10 text-sm text-foreground/75">Hover</div>
            <button className="px-6 justify-self-center py-3 bg-foreground text-background border-2 border-foreground rounded-lg font-medium">
              Browse Frames
            </button>
            <code className="text-xs bg-muted-light px-2 py-1 rounded">
              bg-foreground on hover
            </code>
          </div>
        </div>
      </section>

      {/* Gradient CTA */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Gradient CTA (Premium)</h2>
          <p className="text-foreground/75">
            Use very sparingly for highest-priority actions
          </p>
        </div>
        <div className="border border-border rounded-lg p-6 space-y-4">
          <button className="px-8 py-4 bg-gradient-to-r from-brand-purple via-brand-folly to-brand-orange text-white rounded-lg font-bold text-lg">
            Start Your Eye Test
          </button>
          <p className="text-sm text-foreground/75">
            ⚠️ Maximum 1 per page - reserved for primary conversion actions
          </p>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Sizes</h2>
        <div className="border border-border rounded-lg p-6 space-y-6">
          <div className="flex items-end gap-4">
            <div className="space-y-2">
              <button className="px-4 py-2 text-sm bg-foreground text-background rounded-lg font-medium">
                Small
              </button>
              <p className="text-xs text-foreground/75">px-4 py-2 text-sm</p>
            </div>
            <div className="space-y-2">
              <button className="px-6 py-3 text-base bg-foreground text-background rounded-lg font-medium">
                Medium
              </button>
              <p className="text-xs text-foreground/75">
                px-6 py-3 text-base (Default)
              </p>
            </div>
            <div className="space-y-2">
              <button className="px-8 py-4 text-lg bg-foreground text-background rounded-lg font-medium">
                Large
              </button>
              <p className="text-xs text-foreground/75">px-8 py-4 text-lg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Icon Buttons</h2>

        {/* Ghost Icon Buttons */}
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-sm text-foreground/75">
            Ghost Style (Transparent Background)
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors relative"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-orange text-white text-xs rounded-full flex items-center justify-center font-bold">
                4
              </span>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="User Profile"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors relative"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand-folly rounded-full"></span>
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Favorites"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Mail"
            >
              <Mail className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Phone"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Home"
            >
              <Home className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filled Icon Buttons */}
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-sm text-foreground/75">
            Filled Style (Solid Background)
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Add"
            >
              <Plus className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Remove"
            >
              <Minus className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Edit"
            >
              <Edit className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-brand-folly text-white hover:opacity-90 rounded-lg transition-opacity"
              title="Delete"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-brand-orange text-white hover:opacity-90 rounded-lg transition-opacity"
              title="Download"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Upload"
            >
              <Upload className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Filter"
            >
              <Filter className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Refresh"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-brand-purple text-white hover:opacity-90 rounded-lg transition-opacity"
              title="Save"
            >
              <Save className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Icon Buttons */}
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-sm text-foreground/75">
            Action Buttons
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Chevron Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Chevron Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Chevron Down"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Chevron Up"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="More Vertical"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="More Horizontal"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Arrow Right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Arrow Left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-transparent hover:bg-muted-light rounded-lg transition-colors"
              title="Check"
            >
              <Check className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Icon Buttons with Labels */}
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-sm text-foreground/75">
            Icon Buttons with Labels
          </h3>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Schedule</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <Clock className="w-4 h-4" />
              <span className="text-sm">History</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Location</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <Star className="w-4 h-4" />
              <span className="text-sm">Favorite</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <Bookmark className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <Send className="w-4 h-4" />
              <span className="text-sm">Send</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Open</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-muted-light rounded-lg transition-colors">
              <Copy className="w-4 h-4" />
              <span className="text-sm">Copy</span>
            </button>
          </div>
        </div>

        {/* Circular Icon Buttons */}
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-sm text-foreground/75">
            Circular Icon Buttons
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              className="w-12 h-12 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-full transition-opacity"
              title="Log In"
            >
              <LogIn className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-brand-folly text-white hover:opacity-90 rounded-full transition-opacity"
              title="Log Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-brand-orange text-white hover:opacity-90 rounded-full transition-opacity"
              title="Help"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-brand-purple text-white hover:opacity-90 rounded-full transition-opacity"
              title="Grid View"
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background rounded-full transition-all"
              title="Eye"
            >
              <Symbol className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background rounded-full transition-all"
              title="User"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background rounded-full transition-all"
              title="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Size Variations */}
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-sm text-foreground/75">
            Size Variations
          </h3>
          <div className="flex items-end gap-4">
            <button
              className="w-8 h-8 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Small"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Medium"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="Large"
            >
              <Search className="w-6 h-6" />
            </button>
            <button
              className="w-14 h-14 flex items-center justify-center bg-foreground text-background hover:opacity-90 rounded-lg transition-opacity"
              title="X-Large"
            >
              <Search className="w-7 h-7" />
            </button>
          </div>
          <div className="text-xs text-foreground/75 space-y-1">
            <p>• Small: 32×32px (icon 16px)</p>
            <p>• Medium: 40×40px (icon 20px) - Default</p>
            <p>• Large: 48×48px (icon 24px)</p>
            <p>• X-Large: 56×56px (icon 28px)</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function InputsSection() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Forms & Inputs</h1>
        <p className="text-lg text-foreground/75">
          Comprehensive input fields, form elements, and validation patterns
        </p>
      </div>

      {/* All Text Input Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Text Input Types</h2>
        <div className="border border-border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Text</label>
              <input
                type="text"
                placeholder="Enter text"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">URL</label>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Search</label>
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Number & Range Inputs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Number & Range Inputs</h2>
        <div className="border border-border rounded-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Number</label>
              <input
                type="number"
                placeholder="0"
                min="0"
                max="100"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Number (with step)
              </label>
              <input
                type="number"
                placeholder="0.00"
                step="0.25"
                min="0"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Range Slider</label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              className="w-full h-2 bg-muted-light rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-orange [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-orange [&::-moz-range-thumb]:border-0"
            />
            <p className="text-xs text-foreground/75">
              Adjust the slider (0-100)
            </p>
          </div>
        </div>
      </section>

      {/* Date & Time Inputs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Date & Time Inputs</h2>
        <div className="border border-border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Time</label>
              <input
                type="time"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Date & Time</label>
              <input
                type="datetime-local"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Month</label>
              <input
                type="month"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Week</label>
              <input
                type="week"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Input Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Other Input Types</h2>
        <div className="border border-border rounded-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Color Picker</label>
              <div className="relative">
                <input
                  type="color"
                  defaultValue="#FF8000"
                  className="
                  h-12 w-full cursor-pointer appearance-none 
                  bg-input-background border border-border rounded-lg 
                  p-1 
                  focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground 
                  transition-all 
                  [&::-webkit-color-swatch-wrapper]:p-0 
                  [&::-webkit-color-swatch]:border-0 
                  [&::-webkit-color-swatch]:rounded-md 
                  [&::-moz-color-swatch]:border-0 
                  [&::-moz-color-swatch]:rounded-md
                "
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">File Upload</label>
              <input
                type="file"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-foreground file:text-background file:cursor-pointer hover:file:opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Checkboxes & Radios with #FF8000 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Checkboxes (Orange Accent)</h2>
        <div className="border border-border rounded-lg p-8 space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded" />
            <span>I agree to the Terms and Conditions</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
            <span>Send me updates about new products (Checked - Orange)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
            <span>Enable notifications</span>
          </label>
          <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
            <input type="checkbox" className="w-5 h-5 rounded" disabled />
            <span>This option is disabled</span>
          </label>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Radio Buttons (Orange Accent)</h2>
        <div className="border border-border rounded-lg p-8 space-y-4">
          <p className="font-medium mb-4">Lens Material</p>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="lens-material"
              className="w-5 h-5"
              defaultChecked
            />
            <div>
              <p className="font-medium">
                Standard Plastic (Selected - Orange)
              </p>
              <p className="text-sm text-foreground/75">
                Lightweight and affordable
              </p>
            </div>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="lens-material" className="w-5 h-5" />
            <div>
              <p className="font-medium">Polycarbonate</p>
              <p className="text-sm text-foreground/75">
                Impact-resistant and thin
              </p>
            </div>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="radio" name="lens-material" className="w-5 h-5" />
            <div>
              <p className="font-medium">High-Index</p>
              <p className="text-sm text-foreground/75">
                Ultra-thin for strong prescriptions
              </p>
            </div>
          </label>
        </div>
      </section>

      {/* Textarea & Select */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Textarea & Select</h2>
        <div className="border border-border rounded-lg p-8 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your vision needs..."
              className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all resize-y"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Prescription Type
            </label>
            <select className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all">
              <option>Select an option</option>
              <option>Single Vision</option>
              <option>Bifocal</option>
              <option>Progressive</option>
              <option>Reading Only</option>
            </select>
          </div>
        </div>
      </section>

      {/* Complete Forms */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Complete Form Examples</h2>

        {/* Contact Form */}
        <div className="border border-border rounded-lg p-8">
          <h3 className="font-bold text-lg mb-6">Contact Form</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Last Name *</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Message *</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Registration Form */}
        <div className="border border-border rounded-lg p-8">
          <h3 className="font-bold text-lg mb-6">Registration Form</h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Username *</label>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email *</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Password *</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" required />
                <span className="text-sm">
                  I agree to the Terms and Conditions *
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-sm">Send me promotional emails</span>
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Create Account
            </button>
          </form>
        </div>

        {/* Appointment Booking Form */}
        <div className="border border-border rounded-lg p-8">
          <h3 className="font-bold text-lg mb-6">Appointment Booking</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Service Type *
              </label>
              <select
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
                required
              >
                <option value="">Select service</option>
                <option>Comprehensive Eye Exam</option>
                <option>Contact Lens Fitting</option>
                <option>Frame Selection</option>
                <option>Follow-up Appointment</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Additional Notes
              </label>
              <textarea
                rows={3}
                placeholder="Any specific concerns or requests?"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all resize-none"
              />
            </div>
            <div className="space-y-2">
              <p className="font-medium text-sm mb-3">Appointment Reminder</p>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="reminder"
                  className="w-5 h-5"
                  defaultChecked
                />
                <span className="text-sm">Email reminder</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="reminder" className="w-5 h-5" />
                <span className="text-sm">SMS reminder</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="reminder" className="w-5 h-5" />
                <span className="text-sm">Both email and SMS</span>
              </label>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function NavigationSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Navigation</h1>
        <p className="text-lg text-foreground/75">
          Comprehensive navigation patterns for websites and applications
        </p>
      </div>

      {/* Header Navigation with Wordmark */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Header Navigation</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-background border-b border-border p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-8">
                <Wordmark className="fill-[#808080] stroke-none stroke-2 w-17 mt-0.5" />
                <nav className="hidden md:flex items-center gap-6 text-sm">
                  <a
                    href="#"
                    className="text-foreground/75 hover:text-foreground transition-colors"
                  >
                    Eye Test
                  </a>
                  <a
                    href="#"
                    className="text-foreground/75 hover:text-foreground transition-colors"
                  >
                    Shop
                  </a>
                  <a
                    href="#"
                    className="text-foreground/75 hover:text-foreground transition-colors"
                  >
                    Help
                  </a>
                  <a
                    href="#"
                    className="text-foreground/75 hover:text-foreground transition-colors"
                  >
                    My Vision
                  </a>
                </nav>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center hover:bg-muted-light rounded-lg transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center hover:bg-muted-light rounded-lg relative transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-orange text-white text-xs rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center hover:bg-muted-light rounded-lg transition-colors">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Navigation with Functional Hamburger */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">
          Mobile Navigation (Functional Hamburger)
        </h2>
        <div className="border border-border rounded-lg overflow-hidden max-w-sm">
          <div className="bg-background border-b border-border p-4">
            <div className="flex items-center justify-between">
              <Wordmark className="fill-[#808080] stroke-none stroke-2 w-17 mt-0.5" />
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 flex items-center justify-center hover:bg-muted-light rounded-lg relative transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-brand-orange text-white text-xs rounded-full flex items-center justify-center font-bold">
                    4
                  </span>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="w-9 h-9 flex flex-col items-center justify-center hover:bg-muted-light rounded-lg transition-colors group relative"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <span
                    className={`w-4 h-0.5 bg-foreground transition-all duration-300 absolute ${mobileMenuOpen ? "rotate-45" : "-translate-y-1"}`}
                  />
                  <span
                    className={`w-4 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                  />
                  <span
                    className={`w-4 h-0.5 bg-foreground transition-all duration-300 absolute ${mobileMenuOpen ? "-rotate-45" : "translate-y-1"}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`bg-background border-b border-border transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="p-4 space-y-3">
              <a
                href="#"
                className="block py-2 px-3 text-sm hover:bg-muted-light rounded transition-colors"
              >
                Eye Test
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-sm hover:bg-muted-light rounded transition-colors"
              >
                Shop
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-sm hover:bg-muted-light rounded transition-colors"
              >
                Help
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-sm hover:bg-muted-light rounded transition-colors"
              >
                My Vision
              </a>
              <div className="pt-3 border-t border-border">
                <a
                  href="#"
                  className="block py-2 px-3 text-sm hover:bg-muted-light rounded transition-colors"
                >
                  Account
                </a>
                <a
                  href="#"
                  className="block py-2 px-3 text-sm hover:bg-muted-light rounded transition-colors"
                >
                  Settings
                </a>
              </div>
            </nav>
          </div>
        </div>
        <p className="text-sm text-foreground/75">
          Click the hamburger menu to see the animation (three lines → X)
        </p>
      </section>

      {/* Sidebar Navigation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Sidebar Navigation</h2>
        <div
          className="border border-border rounded-lg overflow-hidden flex"
          style={{ height: "400px" }}
        >
          <aside className="w-64 bg-muted/20 border-r border-border p-4 overflow-y-auto">
            <div className="mb-6">
              <Wordmark className="fill-[#808080] stroke-none stroke-2 w-20 mt-2" />
            </div>
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 bg-foreground text-background rounded-lg font-medium"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 hover:bg-muted-light rounded-lg transition-colors"
              >
                <Symbol className="w-4 h-4" />
                <span className="text-sm">Eye Tests</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 hover:bg-muted-light rounded-lg transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Orders</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 hover:bg-muted-light rounded-lg transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="text-sm">Profile</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 hover:bg-muted-light rounded-lg transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm">Settings</span>
              </a>
            </nav>
          </aside>
          <div className="flex-1 p-6 bg-background">
            <h3 className="font-bold mb-2">Main Content Area</h3>
            <p className="text-sm text-foreground/75">Content goes here...</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Breadcrumbs</h2>
        <div className="border border-border rounded-lg p-6">
          <nav className="flex items-center gap-2 text-sm">
            <a
              href="#"
              className="text-foreground/75 hover:text-foreground transition-colors"
            >
              Products
            </a>
            <ChevronRight className="w-4 h-4 text-foreground/75" />
            <a
              href="#"
              className="text-foreground/75 hover:text-foreground transition-colors"
            >
              Eyeglasses
            </a>
            <ChevronRight className="w-4 h-4 text-foreground/75" />
            <span className="font-medium">Classic Round Frames</span>
          </nav>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tabs Navigation</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="border-b border-border">
            <nav className="flex gap-6">
              <button className="pb-3 px-1 border-b-2 border-foreground font-medium text-sm">
                Overview
              </button>
              <button className="pb-3 px-1 border-b-2 border-transparent text-foreground/75 hover:text-foreground text-sm transition-colors">
                Reviews
              </button>
              <button className="pb-3 px-1 border-b-2 border-transparent text-foreground/75 hover:text-foreground text-sm transition-colors">
                Shipping
              </button>
            </nav>
          </div>
          <div className="pt-6">
            <p className="text-sm text-foreground/75">
              Tab content appears here...
            </p>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Pagination</h2>
        <div className="border border-border rounded-lg p-6">
          <nav className="flex items-center justify-center gap-2">
            <button
              className="w-9 h-9 flex items-center justify-center border border-border rounded hover:bg-muted-light transition-colors"
              disabled
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center bg-foreground text-background rounded font-medium text-sm">
              1
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-border rounded hover:bg-muted-light transition-colors text-sm">
              2
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-border rounded hover:bg-muted-light transition-colors text-sm">
              3
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-border rounded hover:bg-muted-light transition-colors text-sm">
              4
            </button>
            <span className="px-2 text-sm text-foreground/75">...</span>
            <button className="w-9 h-9 flex items-center justify-center border border-border rounded hover:bg-muted-light transition-colors text-sm">
              12
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-border rounded hover:bg-muted-light transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </section>

      {/* Footer */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Footer</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-muted-light p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div>
                <p className="font-bold mb-4">Products</p>
                <ul className="space-y-2 text-sm text-foreground/75">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Eyeglasses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Sunglasses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Blue Light Glasses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Contact Lenses
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-4">Customer Care</p>
                <ul className="space-y-2 text-sm text-foreground/75">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Track Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block">
                <p className="font-bold mb-4">Company</p>
                <ul className="space-y-2 text-sm text-foreground/75">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-4">Stay Updated</p>
                <p className="text-sm text-foreground/75 mb-3">
                  Get the latest offers and eye care tips
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                  <button className="px-4 py-2 bg-foreground text-background rounded text-sm font-medium hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border text-sm text-foreground/75 flex justify-between">
              <p>© 2026 Opticule. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CardsSection() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Cards</h1>
        <p className="text-lg text-foreground/75">
          Container components for grouping related content
        </p>
      </div>

      {/* Product Card */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Product Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted-light flex items-center justify-center">
              <Symbol className="w-16 h-16 text-foreground/75" />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Classic Round Frames</h3>
              <p className="text-sm text-foreground/75 mb-3">
                Timeless style for every face shape
              </p>
              <div className="flex items-center justify-between">
                <p className="font-bold">$89</p>
                <button className="text-sm font-medium hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted-light flex items-center justify-center">
              <Symbol className="w-16 h-16 text-foreground/75" />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Aviator Sunglasses</h3>
              <p className="text-sm text-foreground/75 mb-3">
                Classic protection with modern flair
              </p>
              <div className="flex items-center justify-between">
                <p className="font-bold">$129</p>
                <button className="text-sm font-medium hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-muted-light flex items-center justify-center">
              <Symbol className="w-16 h-16 text-foreground/75" />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Blue Light Blockers</h3>
              <p className="text-sm text-foreground/75 mb-3">
                Reduce eye strain from screens
              </p>
              <div className="flex items-center justify-between">
                <p className="font-bold">$69</p>
                <button className="text-sm font-medium hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Card */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Feature Card</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "Comprehensive Tests",
              description: "Complete eye exams with cutting-edge technology",
            },
            {
              title: "Expert Optometrists",
              description: "Trusted care from licensed professionals",
            },
            {
              title: "Quality Lenses",
              description: "High-performance lenses for all prescriptions",
            },
            {
              title: "Express Care",
              description: "Walk-ins welcome with short wait times",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="border border-border rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-muted-light flex items-center justify-center mx-auto mb-4">
                <Symbol className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/75">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FeedbackSection() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">Feedback Elements</h1>
        <p className="text-lg text-foreground/75">
          Alerts, toasts, modals, and status indicators
        </p>
      </div>

      {/* Alerts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Alerts</h2>
        <div className="space-y-4">
          <div className="border-2 border-foreground/30 bg-foreground/10 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1">Information</h4>
                <p className="text-sm text-foreground/75">
                  Your prescription is ready for review
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-brand-purple/30 bg-brand-purple/10 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1 text-brand-purple">Success</h4>
                <p className="text-sm text-foreground/75">
                  Your order has been placed successfully
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-brand-orange/30 bg-brand-orange/10 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1 text-brand-orange">Warning</h4>
                <p className="text-sm text-foreground/75">
                  Your cart will expire in 15 minutes
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-brand-folly/30 bg-brand-folly/10 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-brand-folly shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1 text-brand-folly">Error</h4>
                <p className="text-sm text-foreground/75">
                  Payment failed. Please check your card details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Badges</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="px-3 py-1 bg-foreground text-background rounded-full text-sm font-medium">
              New
            </span>
            <span className="px-3 py-1 bg-brand-folly text-white rounded-full text-sm font-medium">
              Sale
            </span>
            <span className="px-3 py-1 bg-brand-orange text-white rounded-full text-sm font-medium">
              Popular
            </span>
            <span className="px-3 py-1 bg-muted-light text-foreground rounded-full text-sm font-medium">
              Out of Stock
            </span>
            <span className="px-3 py-1 bg-brand-folly text-white rounded-full text-sm font-medium">
              In Stock
            </span>
          </div>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Loading States</h2>

        <div className="border border-border rounded-lg p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-foreground/75">Loading...</span>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-muted-light rounded animate-pulse w-full" />
            <div className="h-4 bg-muted-light rounded animate-pulse w-5/6" />
            <div className="h-4 bg-muted-light rounded animate-pulse w-4/6" />
          </div>
        </div>

        <div className="border border-border justify-items-center rounded-lg p-6">
          <Symbol className="w-16 h-16 fill-[#808080] stroke-none animate-pulse" />
        </div>

        <div className="border border-border justify-items-center rounded-lg p-6">
          <img
            alt="wordmark loading"
            className="w-full h-auto"
            src="src/assets/wordmark_loading.svg"
          />
        </div>
      </section>
    </div>
  );
}

function DashboardSection() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 2. Helper to get days in a month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 3. Helper to get which day of the week the month starts on (0=Sun, 1=Mon, etc.)
  // We adjust it so 0=Mon, 6=Sun to match your "Mon...Sun" header
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  // 4. Navigation Handlers
  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  // 5. Calculate data for the render
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getFirstDayOfMonth(year, month);

  // Format the month title (e.g., "February 2026")
  const monthName = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Real-time "Today" check
  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === month && today.getFullYear() === year;
  const currentDay = today.getDate();

  // (Optional) Fake appointment logic for demo purposes
  // This just randomly assigns appointments based on the day number to keep the UI looking active
  const hasAppointment = (day: number) => [5, 12, 18, 23, 27].includes(day);

  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Dashboard Components</h1>
        <p className="text-lg text-foreground/75">
          Essential components for building admin dashboards and analytics
          interfaces
        </p>
      </div>

      {/* Stat Cards / KPI Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">KPI / Stat Cards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                <User className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-xs px-2 py-1 bg-brand-folly/10 text-brand-folly rounded-full font-medium">
                +12%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">2,847</p>
            <p className="text-sm text-foreground/75">Total Patients</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-brand-purple" />
              </div>
              <span className="text-xs px-2 py-1 bg-brand-folly/10 text-brand-folly rounded-full font-medium">
                +8%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">156</p>
            <p className="text-sm text-foreground/75">Appointments Today</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-folly/10 flex items-center justify-center">
                <Symbol className="w-5 h-5 text-brand-folly" />
              </div>
              <span className="text-xs px-2 py-1 bg-brand-folly/10 text-brand-folly rounded-full font-medium">
                -3%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">892</p>
            <p className="text-sm text-foreground/75">Eye Tests This Month</p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-folly/10 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-brand-folly" />
              </div>
              <span className="text-xs px-2 py-1 bg-brand-folly/10 text-brand-folly rounded-full font-medium">
                +24%
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">$48,392</p>
            <p className="text-sm text-foreground/75">Monthly Revenue</p>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Data Table</h2>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[827px]">
              <thead className="bg-muted-light border-b border-border">
                <tr>
                  <th className="text-left p-4 text-sm font-medium">
                    Patient Name
                  </th>
                  <th className="text-left p-4 text-sm font-medium">Date</th>
                  <th className="text-left p-4 text-sm font-medium">Service</th>
                  <th className="text-left p-4 text-sm font-medium">Status</th>
                  <th className="text-left p-4 text-sm font-medium">Amount</th>
                  <th className="text-right p-4 text-sm font-medium">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                        <span className="text-sm font-medium">JD</span>
                      </div>
                      <span className="text-sm font-medium">John Doe</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground/75">
                    Jan 22, 2026
                  </td>
                  <td className="p-4 text-sm">Comprehensive Eye Exam</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium">$150</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <Symbol className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center">
                        <span className="text-sm font-medium">SA</span>
                      </div>
                      <span className="text-sm font-medium">
                        Sarah Anderson
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground/75">
                    Jan 23, 2026
                  </td>
                  <td className="p-4 text-sm">Contact Lens Fitting</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-medium">
                      Pending
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium">$200</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <Symbol className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-folly/10 flex items-center justify-center">
                        <span className="text-sm font-medium">MB</span>
                      </div>
                      <span className="text-sm font-medium">Michael Brown</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-foreground/75">
                    Jan 23, 2026
                  </td>
                  <td className="p-4 text-sm">Frame Selection</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-brand-folly/10 text-brand-folly rounded-full text-xs font-medium">
                      Cancelled
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium">$89</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <Symbol className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Activity Feed / Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Activity Feed / Timeline</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="w-px h-full bg-border mt-2" />
              </div>
              <div className="pb-6">
                <p className="font-medium mb-1">New Appointment Scheduled</p>
                <p className="text-sm text-foreground/75 mb-2">
                  Sarah Johnson booked a comprehensive eye exam for Jan 25, 2026
                  at 2:00 PM
                </p>
                <p className="text-xs text-foreground/75">2 hours ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-folly/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-folly" />
                </div>
                <div className="w-px h-full bg-border mt-2" />
              </div>
              <div className="pb-6">
                <p className="font-medium mb-1">Prescription Updated</p>
                <p className="text-sm text-foreground/75 mb-2">
                  Michael Brown's prescription has been updated and sent to the
                  lab
                </p>
                <p className="text-xs text-foreground/75">5 hours ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-purple" />
                </div>
              </div>
              <div>
                <p className="font-medium mb-1">Reminder Sent</p>
                <p className="text-sm text-foreground/75 mb-2">
                  Appointment reminder sent to 25 patients for tomorrow's
                  appointments
                </p>
                <p className="text-xs text-foreground/75">
                  Yesterday at 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Panel */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Quick Actions Panel</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center gap-3 p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                <Plus className="w-6 h-6 text-brand-orange" />
              </div>
              <span className="text-sm font-medium">New Appointment</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                <User className="w-6 h-6 text-brand-purple" />
              </div>
              <span className="text-sm font-medium">Add Patient</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-folly/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-brand-folly" />
              </div>
              <span className="text-sm font-medium">Eye Test</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-folly/10 flex items-center justify-center">
                <Download className="w-6 h-6 text-brand-folly" />
              </div>
              <span className="text-sm font-medium">Export Report</span>
            </button>
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Progress Indicators & Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium mb-1">Monthly Revenue Goal</p>
                <p className="text-2xl font-bold">
                  $48,392{" "}
                  <span className="text-sm text-foreground/75 font-normal">
                    / $50,000
                  </span>
                </p>
              </div>
              <span className="text-sm font-medium text-brand-orange">97%</span>
            </div>
            <div className="w-full h-2 bg-muted-light rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-orange rounded-full"
                style={{ width: "97%" }}
              />
            </div>
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium mb-1">Appointments This Week</p>
                <p className="text-2xl font-bold">
                  128{" "}
                  <span className="text-sm text-foreground/75 font-normal">
                    / 150
                  </span>
                </p>
              </div>
              <span className="text-sm font-medium text-brand-purple">85%</span>
            </div>
            <div className="w-full h-2 bg-muted-light rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-purple rounded-full"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Widget */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Calendar Widget</h2>
        <div className="border border-border max-w-110 rounded-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold">{monthName}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={prevMonth}
                className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextMonth}
                className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-foreground/75 p-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before the 1st of the month */}
            {[...Array(startDay)].map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {/* Actual Days */}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const isToday = isCurrentMonth && day === currentDay;
              const appointment = hasAppointment(day);

              return (
                <button
                  key={day}
                  className={`aspect-square p-2 text-sm rounded transition-colors relative ${
                    isToday
                      ? "bg-foreground text-background font-bold"
                      : "hover:bg-muted"
                  }`}
                >
                  {day}
                  {appointment && !isToday && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* User List with Status */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">User List with Status</h2>
        <div className="border border-border rounded-lg divide-y divide-border">
          <div className="p-4 flex items-center justify-between hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <span className="font-medium">DR</span>
              </div>
              <div>
                <p className="font-medium">Dr. Rachel Smith</p>
                <p className="text-sm text-foreground/75">Optometrist</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-brand-folly/10 text-brand-folly rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-brand-folly rounded-full" />
                Available
              </span>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                <span className="font-medium">JM</span>
              </div>
              <div>
                <p className="font-medium">Dr. James Miller</p>
                <p className="text-sm text-foreground/75">Ophthalmologist</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-brand-orange rounded-full" />
                Busy
              </span>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between hover:bg-muted/20 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-folly/10 flex items-center justify-center">
                <span className="font-medium">EW</span>
              </div>
              <div>
                <p className="font-medium">Emily White</p>
                <p className="text-sm text-foreground/75">Optician</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 px-3 py-1 bg-muted-light text-foreground/75 rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-muted-dark rounded-full" />
                Offline
              </span>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-muted-light rounded transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Center */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Notification Center</h2>
        <div className="border border-border rounded-lg">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-bold">Notifications</h3>
            <button className="text-sm text-brand-orange hover:underline">
              Mark all as read
            </button>
          </div>
          <div className="divide-y divide-border">
            <div className="p-4 hover:bg-muted/20 transition-colors cursor-pointer bg-brand-orange/5">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                <div className="flex-1">
                  <p className="font-medium mb-1">New appointment request</p>
                  <p className="text-sm text-foreground/75 mb-2">
                    John Smith requested an appointment for Jan 24
                  </p>
                  <p className="text-xs text-foreground/75">10 minutes ago</p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-muted/20 transition-colors cursor-pointer">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-transparent mt-1.5 shrink-0" />
                <div className="flex-1">
                  <p className="font-medium mb-1 opacity-70">
                    Prescription ready for pickup
                  </p>
                  <p className="text-sm text-foreground/75 mb-2">
                    Sarah Johnson's prescription is ready
                  </p>
                  <p className="text-xs text-foreground/75">2 hours ago</p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-muted/20 transition-colors cursor-pointer">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-transparent mt-1.5 shrink-0" />
                <div className="flex-1">
                  <p className="font-medium mb-1 opacity-70">Inventory alert</p>
                  <p className="text-sm text-foreground/75 mb-2">
                    Contact lens solution stock is running low
                  </p>
                  <p className="text-xs text-foreground/75">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Search & Filters</h2>
        <div className="border border-border rounded-lg p-6 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="search"
                placeholder="Search patients, appointments, or records..."
                className="w-full px-4 pr-8 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all"
              />
            <button className="absolute top-2 right-2 px-2 py-2 border border-border rounded-lg hover:bg-muted-light transition-colors flex items-center">
              <Filter className="w-4 h-4" />
            </button>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-foreground/75">Quick Filters:</span>
            <button className="px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted-light focus:bg-foreground focus:text-background transition-colors">
              Today
            </button>
            <button className="px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted-light focus:bg-foreground focus:text-background transition-colors">
              This Week
            </button>
            <button className="px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted-light focus:bg-foreground focus:text-background transition-colors">
              This Month
            </button>
            <button className="px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted-light focus:bg-foreground focus:text-background transition-colors">
              Completed
            </button>
            <button className="px-3 py-1.5 border border-border rounded-lg text-sm hover:bg-muted-light focus:bg-foreground focus:text-background transition-colors">
              Pending
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
