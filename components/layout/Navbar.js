// components/layout/Navbar.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import BrandLogo from "../ui/BrandLogo";

const NAV_LINKS = [
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
];

const base =
  "sticky top-0 z-50 border-b transition-colors md:supports-[backdrop-filter]:backdrop-blur";

// Light-first, dark overrides
const atTop = [
  // LIGHT: soft light bar so it reads as “light mode” immediately
  "bg-brand-paper/92 text-brand-charcoal",
  "border-black/10 shadow-sm",

  // add a touch more opacity if needed on very dark heroes:
  // "bg-brand-paper/96",

  // DARK: keep the subtle translucent dark you had
  "dark:bg-app-surface/90 dark:text-app-text dark:border-white/10",

  // keep blur desktop-only (prevents iOS mud)
  // (blur is already in `base` via md:supports-[backdrop-filter]:backdrop-blur)
].join(" ");

const scrolledCls =
  // Off-hero: solid surfaces for reliable contrast
  "bg-brand-paper/80 text-brand-charcoal border-black/5 " +
  "dark:bg-app-surface/90 dark:text-app-text dark:border-white/10";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:rounded-md focus:bg-brand-charcoal focus:text-brand-cream focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <header
        role="banner"
        className={[
          "fixed top-0 inset-x-0 z-50 w-full overflow-x-clip transition-shadow",
          scrolled ? "shadow-[var(--shadow-soft)]" : "",
        ].join(" ")}
      >
        <div className={[base, scrolled ? scrolledCls : atTop].join(" ")}>
          <nav
            aria-label="Primary"
            className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          >
            <Link
              href="/"
              className="font-display text-xl md:text-2xl font-semibold tracking-tight"
            >
              <BrandLogo />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm md:text-base hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href="#book"
                className="ml-2"
                data-cta="book"
                data-location="navbar"
              >
                Book Now
              </Button>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <span className="relative block w-5 h-4">
                <span
                  className={[
                    "absolute inset-x-0 top-0 h-0.5 transition-transform bg-current",
                    open ? "translate-y-1.5 rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 transition-opacity bg-current",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute inset-x-0 bottom-0 h-0.5 transition-transform bg-current",
                    open ? "-translate-y-1.5 -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </nav>

          {open && (
            <div id="mobile-menu" className="md:hidden">
              <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-4">
                <div className="flex flex-col gap-3">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="w-full rounded-lg px-3 py-2 text-base hover:bg-brand-cream/60 dark:hover:bg-app-surface/80"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    href="#book"
                    data-cta="book"
                    data-location="navbar-mobile"
                  >
                    Book Now
                  </Button>
                  <Link
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE || ""}`}
                    className="text-center text-sm underline opacity-80"
                  >
                    Or call us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="h-16" />
      <div id="main" />
    </>
  );
}
