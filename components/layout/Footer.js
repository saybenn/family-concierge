// components/layout/Footer.js
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { site } from "@/lib/siteConfig";
import { sectionDark, containerX } from "@/components/ui/classnames";

// Safer phone href (strip everything except digits and +)
const telHref = site?.phone ? site.phone.replace(/[^\d+]/g, "") : "";

// NOTE: computing the year at module scope avoids re-renders; if you’re worried
// about midnight SSR/CSR mismatch, pass `year` as a prop from the page.
const CURRENT_YEAR = new Date().getFullYear();

/**
 * Footer with integrated trust + CTA row
 * - UI/UX: trust bullets + action, then three columns (Brand, Explore, Contact)
 * - DEV: tokenized colors/spacing; accessible nav lists; analytics hooks
 * - MKT: credibility near the “money” button; UTM on CTA; phone fallback
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
    <footer className={sectionDark} role="contentinfo">
      <div className={containerX}>
        {/* TRUST + CTA ROW */}
        <div className="flex flex-col gap-sm md:flex-row md:items-center md:justify-between rounded-[var(--radius-2xl)] ring-1 ring-white/10 bg-app-surface px-md py-md">
          <ul
            className="flex flex-wrap items-center gap-4 text-sm text-app-muted"
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

          {showBookCta && (
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
          )}
        </div>

        {/* MAIN GRID */}
        <div className="mt-lg grid gap-lg md:grid-cols-3">
          {/* BRAND / BLURB */}
          <div>
            <h3 className="font-display text-xl font-semibold text-app-text">
              {site.brand}
            </h3>
            <p className="mt-sm text-app-muted">
              Calm, capable help for busy households. Background-checked,
              insured, discretion-first.
            </p>

            {/* Mobile CTA fallback (if you prefer it visible here too) */}
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
            <h4 className="font-semibold text-app-text">Explore</h4>
            <ul className="mt-sm space-y-2">
              <li>
                <Link href="#packages" className="hover:opacity-80">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:opacity-80">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:opacity-80">
                  Experiences
                </Link>
              </li>
            </ul>
          </nav>

          {/* CONTACT */}
          <div className="md:justify-self-end">
            <h4 className="font-semibold text-app-text">Contact</h4>
            <ul className="mt-sm space-y-2">
              {site?.phone && (
                <li>
                  <a
                    href={`tel:${telHref}`}
                    className="hover:opacity-80"
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
                    className="hover:opacity-80"
                    data-cta="email"
                    data-location="footer"
                  >
                    {site.email}
                  </a>
                </li>
              )}
              <li className="text-app-muted">
                Serving: {site?.serviceArea?.join(", ") || "—"}
              </li>
            </ul>
          </div>
        </div>

        {/* LEGAL / UTILS */}
        <div className="mt-lg flex flex-col items-start gap-3 border-t border-white/10 pt-sm text-sm text-app-muted md:flex-row md:items-center md:justify-between">
          <div>
            © {CURRENT_YEAR} {site.brand}. All rights reserved.
          </div>
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link href="/privacy" className="hover:opacity-90">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:opacity-90">
                Terms
              </Link>
            </li>
            <li>
              <a href="#top" className="hover:opacity-90">
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
