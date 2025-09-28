// components/layout/Navbar.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

const NAV_LINKS = [
  { href: "#packages", label: "Packages" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-aware background + shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when hash changes (user navigates)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:rounded-md focus:bg-brand-charcoal focus:text-brand-cream focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      {/* FIX: clamp horizontal overflow at the header level */}
      <header
        role="banner"
        className={[
          "fixed top-0 inset-x-0 z-50 w-full overflow-x-clip transition-shadow",
          scrolled ? "shadow-soft" : "",
        ].join(" ")}
      >
        <div
          className={[
            "backdrop-blur transition-colors border-b",
            scrolled
              ? "bg-brand-paper/95 text-brand-charcoal dark:bg-app-bg/90 dark:text-app-text border-line-faint"
              : "bg-brand-ink/50 text-brand-charcoal dark:text-app-text border-transparent",
          ].join(" ")}
        >
          <nav
            aria-label="Primary"
            className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          >
            {/* Brand */}
            <Link
              href="/"
              className="font-display text-xl md:text-2xl font-semibold tracking-tight"
            >
              Unique Butler Service
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm md:text-base hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
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

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-line-subtle px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {/* Hamburger / Close */}
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

          {/* Mobile panel (renders only when open → no width when closed) */}
          {open && (
            <div id="mobile-menu" className="md:hidden">
              <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-4">
                <div className="flex flex-col gap-3">
                  {NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="w-full rounded-lg px-3 py-2 text-base bg-transparent hover:bg-brand-cream/60 dark:hover:bg-app-bg/60"
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

      {/* Spacer to prevent content jumping under fixed header */}
      <div className="h-16" />
      <div id="main" />
    </>
  );
}
