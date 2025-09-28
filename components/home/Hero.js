// components/home/Hero.js
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/siteConfig";
import CTAButton from "@/components/CTAButton";
import { h1XL, bodyBase } from "@/components/ui/classnames";

// Chip colors (one map only)
const CHIP_COLORS = {
  Parents: "bg-green-100/70 text-green-900 ring-green-300/50",
  "Busy Professionals": "bg-blue-100/70 text-blue-900 ring-blue-300/50",
  Caregivers: "bg-amber-100/70 text-amber-900 ring-amber-300/50",
};

export default function Hero({
  title = site?.hero?.title || "Buy back your time.",
  subhead = site?.hero?.subhead ||
    "Background-checked, insured, and discretion-first Unique Butler Service for busy homes.",
  ctaLabel = site?.hero?.ctaLabel || "Book Now",
  ctaHref = site?.hero?.ctaHref || "#book",
  secondaryLabel = site?.hero?.secondaryLabel || "See Packages",
  secondaryHref = site?.hero?.secondaryHref || "#packages",
  personas = site?.hero?.personas || [
    "Parents",
    "Busy Professionals",
    "Caregivers",
  ],
  imageSrc = site?.hero?.imageSrc || "/images/hero/family-concierge-hero.png",
  imageSrcMobile = site?.hero?.imageSrcMobile ||
    "/images/hero/family-concierge-hero-mobile.png",
  imageAlt = site?.hero?.imageAlt || "Calm, organized family home interior",
  variant = site?.hero?.variant || "A",
}) {
  return (
    <section
      id="hero"
      aria-label="Intro"
      className="
        relative isolate overflow-hidden
        mx-[calc(50%-50vw)]
        pl-[max(var(--spacing-md),calc(50vw-50%))]
        pr-[max(var(--spacing-md),calc(50vw-50%))]
        overflow-x-clip
      "
    >
      {/* ===== Backgrounds (image) ===== */}
      <div className="absolute inset-0 z-0">
        {/* Mobile crop */}
        <div className="relative h-full w-full md:hidden ">
          <Image
            src={imageSrcMobile}
            alt={imageAlt}
            fill
            priority
            sizes="w-full"
            className="object-cover"
          />
        </div>
        {/* Desktop crop */}
        <div className="relative hidden h-full w-full md:block ">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="w-full"
            className="object-cover"
          />
        </div>

        {/* Overlays above image for legibility */}
        <div className="absolute inset-0 bg-black/55 md:bg-black/45 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent z-10" />
      </div>

      {/* ===== Content (above overlays) ===== */}
      <div className="relative z-20 flex min-h-[50vh] items-center justify-between">
        <div className="flex w-full h-full py-3xl md:py-4xl">
          <div className="text-brand-cream">
            {/* Persona chips */}
            <div className=" w-max mb-sm flex flex-wrap gap-sm">
              {personas.map((p) => (
                <span
                  key={p}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-medium ring-1 backdrop-blur",
                    CHIP_COLORS[p] || "bg-white/10 text-white/90 ring-white/20",
                  ].join(" ")}
                >
                  {p}
                </span>
              ))}
            </div>

            <h1 className={h1XL}>{title}</h1>

            <p className={`mt-sm md:mt-md ${bodyBase} text-white/90`}>
              {subhead}
            </p>

            <div className="mt-md flex flex-wrap items-center gap-md">
              <CTAButton
                href={ctaHref}
                data-cta="book"
                data-variant={variant}
                data-location="hero"
              >
                {ctaLabel}
              </CTAButton>

              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full px-lg py-sm text-sm font-semibold
                           bg-white/10 text-white/95 ring-1 ring-white/25 hover:bg-white/14
                           focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {secondaryLabel}
              </Link>
            </div>

            <p className="mt-sm text-xs text-white/80">
              We reply within 24 hours. No spam—ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
