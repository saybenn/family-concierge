// components/layout/Footer.js
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { site } from "@/lib/siteConfig";
import { containerX } from "@/components/ui/classnames"; // keep your container helper

// Safer phone href (strip everything except digits and +)
const telHref = site?.phone ? site.phone.replace(/[^\d+]/g, "") : "";

// Compute once (no re-render churn)
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer: theme-safe (light default, dark overrides), accessible contrast,
 * consistent borders, and optional CTA row.
 */
export default function Footer({
  trustBullets = [
    "Licensed & Insured",
    "Background-Checked Helpers",
    "Discreet & Confidential",
  ],
  showBookCta = true,
}) {
  return (
    <footer
      role="contentinfo"
      className="
        
        border-t border-black/10 dark:border-white/10
        bg-brand-paper text-brand-charcoal
        dark:bg-app-surface dark:text-app-text
      "
    >
      <div className={containerX}>
        {/* TRUST + CTA ROW */}
        <div
          className="
            mt-lg flex flex-col gap-sm md:flex-row md:items-center md:justify-between
            rounded-[var(--radius-2xl)]
            bg-white/70 ring-1 ring-black/10 backdrop-blur
            dark:bg-app-surface dark:ring-white/10
            px-md py-md
          "
        >
          <ul
            className="flex flex-wrap items-center gap-4 text-sm text-brand-charcoal/70 dark:text-app-muted"
            aria-label="Trust and safety"
          >
            {trustBullets.map((t, i) => (
              <li key={i} className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* {showBookCta && (
            <div className="mt-sm md:mt-0">
              <CTAButton
                href={
                  site?.booking?.calendlyEventUrl
                    ? `${site.booking.calendlyEventUrl}?utm_campaign=footer-cta`
                    : "#book"
                }
                data-module="footer"
                data-cta="book"
                data-location="footer-trust"
              >
                Book Now
              </CTAButton>
            </div>
          )} */}
        </div>

        {/* MAIN GRID */}
        <div className="mt-lg grid gap-lg md:grid-cols-3">
          {/* BRAND / BLURB */}
          <div>
            <h3 className="font-display text-xl font-semibold">{site.brand}</h3>
            <p className="mt-sm text-brand-charcoal/70 dark:text-app-muted">
              Calm, capable help for busy households. Background-checked,
              insured, discretion-first.
            </p>

            {/* Mobile CTA fallback */}
            {!showBookCta && (
              <div className="mt-md">
                <CTAButton
                  href={
                    site?.booking?.calendlyEventUrl
                      ? `${site.booking.calendlyEventUrl}?utm_campaign=footer-cta`
                      : "#book"
                  }
                  data-module="footer"
                  data-cta="book"
                  data-location="footer-brand"
                >
                  Book Now
                </CTAButton>
              </div>
            )}
          </div>

          {/* EXPLORE */}
          <nav aria-label="Explore" className="md:justify-self-center">
            <h4 className="font-semibold">Explore</h4>
            <ul className="mt-sm space-y-2">
              <li>
                <Link
                  href="#packages"
                  className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                >
                  Experiences
                </Link>
              </li>
            </ul>
          </nav>

          {/* CONTACT */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-sm space-y-2">
              {site?.phone && (
                <li>
                  <a
                    href={`tel:${telHref}`}
                    className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                    data-cta="call"
                    data-location="footer"
                  >
                    {site.phone}
                  </a>
                </li>
              )}
              {site?.email && (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
                    data-cta="email"
                    data-location="footer"
                  >
                    {site.email}
                  </a>
                </li>
              )}
              <li className="text-brand-charcoal/70 dark:text-app-muted">
                Serving: {site?.serviceArea?.join(", ") || "—"}
              </li>
            </ul>
          </div>
        </div>

        {/* LEGAL / UTILS */}
        <div
          className="
            mt-lg flex flex-col items-start gap-3
            border-t border-black/10 dark:border-white/10
            pt-sm text-sm text-brand-charcoal/70 dark:text-app-muted
            md:flex-row md:items-center md:justify-between
          "
        >
          <div>
            © {CURRENT_YEAR} {site.brand}. All rights reserved.
          </div>
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link
                href="/privacy"
                className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
              >
                Terms
              </Link>
            </li>
            <li>
              <a
                href="#top"
                className="hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
              >
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
