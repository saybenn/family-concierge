// components/ui/classnames.js
export const sectionLight =
  "py-3xl md:py-4xl bg-brand-paper text-brand-charcoal";
export const sectionDark = "py-3xl md:py-4xl bg-app-surface text-app-text";

export const containerX = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export const btnPrimary = [
  "inline-flex items-center gap-2 rounded-full",
  "bg-primary text-brand-cream",
  "px-lg py-sm text-sm font-semibold",
  "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)]",
  "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2",
].join(" ");

export const btnGhostOnDark = [
  "inline-flex items-center gap-2 rounded-full",
  "bg-white/10 text-white/95 ring-1 ring-white/25 hover:bg-white/14",
  "px-lg py-sm text-sm font-semibold",
  "focus:outline-none focus:ring-2 focus:ring-brand-primary",
].join(" ");

export const cardLight = [
  "rounded-[var(--radius-2xl)]",
  "bg-white/70 backdrop-blur-md ring-1 ring-white/50",
  "shadow-[var(--shadow-soft)]",
  "p-md",
].join(" ");

export const cardDark = [
  "rounded-[var(--radius-2xl)]",
  "bg-app-surface ring-1 ring-white/10",
  "p-md",
].join(" ");

export const h1XL =
  "font-display tracking-tight text-4xl md:text-5xl font-semibold leading-tight";
export const h2L =
  "font-display tracking-tight text-2xl md:text-3xl font-semibold";
export const bodyBase = "text-base md:text-lg";
export const metaDim = "text-sm md:text-base text-brand-charcoal/70";
export const metaDimDark = "text-sm md:text-base text-app-muted";
