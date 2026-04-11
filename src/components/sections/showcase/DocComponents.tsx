/**
 * Shared documentation primitives used across all showcase pages.
 * Provides Carbon-Design-System-style component documentation structure.
 */

import React from "react";

// ─── Page Header ─────────────────────────────────────────────────────────────

interface StatusBadge {
  label: string;
  color: "green" | "orange" | "blue" | "purple" | "gray";
}

interface PageHeaderProps {
  title: string;
  description: string;
  badges?: StatusBadge[];
  importPath?: string;
}

const badgeColors: Record<StatusBadge["color"], string> = {
  green:  "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20",
  blue:   "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20",
  gray:   "bg-foreground/5 text-foreground/60 border border-border",
};

export function PageHeader({ title, description, badges, importPath }: PageHeaderProps) {
  return (
    <div className="space-y-4 mb-12 pb-8 border-b border-border">
      <div className="space-y-3">
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b.label} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColors[b.color]}`}>
                {b.label}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg text-foreground/60 max-w-3xl leading-relaxed">{description}</p>
      </div>
      {importPath && (
        <div className="flex items-center gap-3 pt-1">
          <span className="text-xs text-foreground/40 uppercase tracking-wider font-medium">Import</span>
          <code className="text-xs font-mono bg-foreground/5 border border-border rounded-md px-3 py-1.5 text-brand-orange">
            {importPath}
          </code>
        </div>
      )}
    </div>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────

export function DocSection({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description && <p className="text-sm text-foreground/60 mt-1">{description}</p>}
      </div>
      {children}
    </section>
  );
}

// ─── Demo Block ───────────────────────────────────────────────────────────────

export function DemoBlock({
  label,
  description,
  children,
  vertical,
  className = "",
}: {
  label: string;
  description?: string;
  children: React.ReactNode;
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div className="space-y-2">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/40">{label}</h3>
        {description && <p className="text-xs text-foreground/50 mt-0.5">{description}</p>}
      </div>
      <div className={`border border-border rounded-xl p-6 bg-bg-secondary/30 ${vertical ? "flex flex-col gap-4" : "flex flex-wrap gap-3 items-center"} ${className}`}>
        {children}
      </div>
    </div>
  );
}

// ─── Usage Block (When to use / not use) ─────────────────────────────────────

interface UsageItem {
  text: string;
}

interface UsageBlockProps {
  use: UsageItem[];
  avoid: UsageItem[];
}

export function UsageBlock({ use, avoid }: UsageBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg className="size-3 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
            </svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">When to use</span>
        </div>
        <ul className="space-y-2">
          {use.map((item, i) => (
            <li key={i} className="text-sm text-foreground/80 flex gap-2">
              <span className="text-green-500 mt-0.5 shrink-0">•</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="size-3 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l8 8M10 2l-8 8" />
            </svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-red-700 dark:text-red-400">When not to use</span>
        </div>
        <ul className="space-y-2">
          {avoid.map((item, i) => (
            <li key={i} className="text-sm text-foreground/80 flex gap-2">
              <span className="text-red-500 mt-0.5 shrink-0">•</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Props Table ──────────────────────────────────────────────────────────────

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  title?: string;
  rows: PropRow[];
}

export function PropsTable({ title, rows }: PropsTableProps) {
  return (
    <div className="space-y-3">
      {title && <h3 className="text-sm font-semibold text-foreground/70">{title}</h3>}
      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-foreground/5">
              <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50 w-[18%]">Prop</th>
              <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50 w-[22%]">Type</th>
              <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50 w-[15%]">Default</th>
              <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-foreground/[0.015]"}`}>
                <td className="px-4 py-3 align-top">
                  <code className="text-xs font-mono text-brand-orange">{row.name}</code>
                  {row.required && (
                    <span className="ml-1.5 text-[10px] text-red-500 font-medium">*</span>
                  )}
                </td>
                <td className="px-4 py-3 align-top">
                  <code className="text-xs font-mono text-brand-purple/90">{row.type}</code>
                </td>
                <td className="px-4 py-3 align-top">
                  {row.default ? (
                    <code className="text-xs font-mono text-foreground/50">{row.default}</code>
                  ) : (
                    <span className="text-xs text-foreground/30">—</span>
                  )}
                </td>
                <td className="px-4 py-3 align-top text-xs text-foreground/70 leading-relaxed">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Keyboard Navigation Table ────────────────────────────────────────────────

export interface KeyboardRow {
  key: string;
  description: string;
}

export function KeyboardTable({ rows }: { rows: KeyboardRow[] }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-foreground/5">
            <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50 w-48">Key</th>
            <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider text-foreground/50">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "" : "bg-foreground/[0.015]"}`}>
              <td className="px-4 py-3">
                <KbdList keys={row.key} />
              </td>
              <td className="px-4 py-3 text-xs text-foreground/70">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KbdList({ keys }: { keys: string }) {
  const parts = keys.split(" + ");
  return (
    <span className="flex items-center gap-1 flex-wrap">
      {parts.map((k, i) => (
        <React.Fragment key={i}>
          <kbd className="inline-flex items-center rounded border border-border bg-foreground/5 px-1.5 py-0.5 text-[11px] font-mono font-medium text-foreground/70 shadow-sm">
            {k}
          </kbd>
          {i < parts.length - 1 && <span className="text-foreground/30 text-xs">+</span>}
        </React.Fragment>
      ))}
    </span>
  );
}

// ─── Accessibility Box ────────────────────────────────────────────────────────

export function AccessibilitySection({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 space-y-4">
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
          <svg className="size-3.5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">Accessibility</span>
      </div>
      <div className="space-y-2 text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}

export function A11yPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <span className="text-blue-500 mt-0.5 shrink-0">•</span>
      <span>{children}</span>
    </div>
  );
}

// ─── Inline Code ─────────────────────────────────────────────────────────────

export function IC({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-[0.8em] font-mono bg-foreground/10 border border-border/60 rounded px-1 py-0.5 text-brand-orange">
      {children}
    </code>
  );
}

// ─── Code Block ──────────────────────────────────────────────────────────────

export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-foreground/5 border-b border-border">
        <span className="text-xs font-mono text-foreground/40">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto bg-foreground/5">
        <code className="text-xs font-mono text-foreground/80 leading-relaxed whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

// ─── Anatomy List ─────────────────────────────────────────────────────────────

export function AnatomyList({ items }: { items: { number: number; label: string; description: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item.number} className="flex gap-3 p-3 rounded-lg border border-border bg-bg-secondary/20">
          <span className="size-6 rounded-full bg-brand-orange/15 text-brand-orange text-xs font-bold flex items-center justify-center shrink-0">
            {item.number}
          </span>
          <div>
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-xs text-foreground/50 mt-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
