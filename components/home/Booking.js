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

  return (
    <section
      id={id}
      className="pb-4xl bg-app-surface text-app-text"
      aria-labelledby={`${id}-heading`}
    >
      <div className={containerX}>
        {/* Single center block (no tight max-width) */}
        <div className="text-center">
          <h2
            id={`${id}-heading`}
            className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-app-text leading-tight text-balance"
          >
            {title}
          </h2>
          <p className="mt-sm text-app-muted">{subline}</p>

          {!!trustBullets?.length && (
            <p className="mt-md text-sm text-app-muted">
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
                className="text-sm underline underline-offset-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded text-app-text/90"
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
