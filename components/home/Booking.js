// components/home/BookingCTA.js
import CTAButton from "@/components/CTAButton";
import { sectionDark, containerX } from "@/components/ui/classnames";
import { site } from "@/lib/siteConfig";

/**
 * Props:
 * - title?="Ready to buy back your time?"
 * - subline?="We reply within 24 hours."
 * - ctaLabel?="Book Now"
 * - ctaHref?=site.booking.calendlyEventUrl
 * - phone?=site.phone
 * - trustBullets?=["Licensed & insured","Background-checked","Discreet service"]
 * - id?="book"
 * - utmCampaign?="footer-cta"
 */
export default function BookingCTA({
  title = "Ready to buy back your time?",
  subline = "We reply within 24 hours.",
  ctaLabel = "Book Now",
  ctaHref = site?.booking?.calendlyEventUrl || "#book",
  phone = site?.phone || "",
  trustBullets = [
    "Licensed & insured",
    "Background-checked",
    "Discreet service",
  ],
  id = "book",
  utmCampaign = "footer-cta",
}) {
  if (!ctaHref) return null;

  const withUTM = (() => {
    try {
      const url = new URL(ctaHref, "https://example.com");
      if (!url.searchParams.get("utm_campaign")) {
        url.searchParams.set("utm_campaign", utmCampaign);
      }
      return url.pathname + url.search + url.hash;
    } catch {
      return ctaHref.includes("?")
        ? ctaHref
        : `${ctaHref}?utm_campaign=${encodeURIComponent(utmCampaign)}`;
    }
  })();

  // components/home/BookingCTA.js

  return (
    <section
      id={id}
      className="py-3xl md:py-4xl bg-brand-paper text-brand-charcoal dark:bg-app-surface dark:text-app-text"
      aria-labelledby={`${id}-heading`}
    >
      <div className={containerX}>
        <div className="text-center">
          <h2
            id={`${id}-heading`}
            className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-balance
                       text-brand-charcoal dark:text-app-text"
          >
            {title}
          </h2>

          <p className="mt-sm text-brand-charcoal/70 dark:text-app-muted">
            {subline}
          </p>

          {!!trustBullets?.length && (
            <p className="mt-md text-sm text-brand-charcoal/60 dark:text-app-muted">
              {trustBullets.join(" • ")}
            </p>
          )}

          <div className="mt-lg flex flex-col items-center gap-sm">
            <CTAButton
              href={withUTM}
              data-module="booking-cta"
              data-cta="book"
              data-location="footer-cta"
            >
              {ctaLabel}
            </CTAButton>

            {phone && (
              <a
                href={`tel:${phone}`}
                className="text-sm underline underline-offset-4 hover:opacity-90 focus:outline-none
                           focus:ring-2 focus:ring-primary/40 rounded text-brand-charcoal dark:text-app-text"
                data-cta="call"
                data-location="footer-cta"
              >
                Or call us
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
