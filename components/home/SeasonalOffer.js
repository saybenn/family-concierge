// components/home/SeasonalOffer.js
import { useEffect, useMemo, useState } from "react";
import CTAButton from "@/components/CTAButton";
import { sectionDark, containerX } from "@/components/ui/classnames";

/**
 * Props:
 * - title, ctaLabel, ctaHref (required)
 * - startAt?, endAt? (ISO) — optional scheduling
 * - code?, finePrint?, id?="seasonal"
 * - showCountdownThresholdHrs?=72
 * - utmCampaign?="seasonal-offer"
 */
export default function SeasonalOffer({
  title,
  ctaLabel,
  ctaHref,
  startAt,
  endAt,
  code,
  finePrint,
  id = "seasonal",
  showCountdownThresholdHrs = 72,
  utmCampaign = "seasonal-offer",
}) {
  // Time logic runs client-side to avoid hydration mismatches
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(t);
  }, []);

  const startMs = startAt ? Date.parse(startAt) : null;
  const endMs = endAt ? Date.parse(endAt) : null;

  const isActive = useMemo(() => {
    if (!mounted) return true; // render once; correct after mount
    if (startMs && now < startMs) return false;
    if (endMs && now > endMs) return false;
    return true;
  }, [mounted, now, startMs, endMs]);

  const msLeft = endMs ? Math.max(0, endMs - now) : null;
  const showCountdown =
    mounted &&
    msLeft !== null &&
    msLeft <= showCountdownThresholdHrs * 3600 * 1000 &&
    msLeft > 0;

  const { dd, hh } = useMemo(() => {
    if (!msLeft) return { dd: null, hh: null };
    const days = Math.floor(msLeft / 86400000);
    const hours = Math.floor((msLeft % 86400000) / 3600000);
    return { dd: days, hh: hours };
  }, [msLeft]);

  const withUTM = useMemo(() => {
    try {
      const url = new URL(ctaHref, "https://example.com"); // base for relative
      if (!url.searchParams.get("utm_campaign")) {
        url.searchParams.set("utm_campaign", utmCampaign);
      }
      return url.pathname + url.search + url.hash;
    } catch {
      return ctaHref.includes("?")
        ? ctaHref
        : `${ctaHref}?utm_campaign=${encodeURIComponent(utmCampaign)}`;
    }
  }, [ctaHref, utmCampaign]);

  if (!title || !ctaLabel || !ctaHref) return null;
  if (mounted && !isActive) return null;

  return (
    <section id={id} className={sectionDark} aria-labelledby={`${id}-heading`}>
      <div className={containerX}>
        {/* Single center block (no extra max-width clamps) */}
        <div className="text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full ring-1 ring-white/15 px-3 py-1 text-xs text-app-muted">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            Limited-time
          </div>

          <h3
            id={`${id}-heading`}
            className="mt-sm text-xl md:text-2xl font-semibold text-app-text leading-tight text-balance"
          >
            {title}
          </h3>

          {showCountdown && (
            <p className="mt-1 text-sm text-app-muted">
              Ends in {dd}d {hh}h
            </p>
          )}

          {code && (
            <p className="mt-1 text-xs text-app-muted">
              Use code <strong className="text-app-text">{code}</strong> at
              checkout
            </p>
          )}

          <div className="mt-md">
            <CTAButton
              href={withUTM}
              data-module="seasonal-offer"
              data-cta="seasonal-book"
              data-offer-id={id}
            >
              {ctaLabel}
            </CTAButton>
          </div>

          {finePrint && (
            <p className="mt-xs text-xs text-app-muted">{finePrint}</p>
          )}
        </div>
      </div>
    </section>
  );
}
