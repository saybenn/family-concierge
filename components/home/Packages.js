// components/home/Packages.js
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import PriceBadge from "@/components/ui/PriceBadge";
import { site } from "@/lib/siteConfig";
import { packages as defaultPackages } from "@/lib/packageData";
import {
  sectionLight,
  containerX,
  cardLight,
  h2L,
  metaDim,
} from "@/components/ui/classnames";

// tiny helper: render up to 3 colored dots with sr-only labels
function PersonaDots({ personas = [] }) {
  if (!personas?.length) return null;
  return (
    <div className="mt-xs flex items-center gap-2" aria-label="Suggested for">
      {personas.slice(0, 3).map((label) => {
        const color = site.personaChipColors?.[label] || "bg-white/50";
        return (
          <span key={label} className="inline-flex items-center">
            <span
              className={[
                "h-2.5 w-2.5 rounded-full ring-2 ring-white/70",
                color,
              ].join(" ")}
              aria-hidden="true"
            />
            <span className="sr-only">{label}</span>
          </span>
        );
      })}
    </div>
  );
}

export default function Packages({ items }) {
  const data = items?.length ? items : defaultPackages;
  if (!data?.length) return null;

  return (
    <section
      id="packages"
      className={sectionLight}
      aria-labelledby="packages-heading"
    >
      <div className={containerX}>
        <header className="text-center mb-xl">
          <h2 id="packages-heading" className={h2L}>
            Popular packages
          </h2>
          <p className={metaDim}>Clear pricing. No surprises.</p>
        </header>

        <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-3">
          {data.map((p) => {
            const viewHref = site?.booking?.calendlyEventUrl
              ? `${site.booking.calendlyEventUrl}?utm_campaign=${p.slug}`
              : "#book";

            const bookHref =
              site?.booking?.stripeLinks?.[p.slug] ||
              (site?.booking?.calendlyEventUrl
                ? `${site.booking.calendlyEventUrl}?utm_campaign=${p.slug}`
                : "#book");

            return (
              <article
                key={p.slug}
                className={`group ${cardLight} min-w-0 transition-shadow`}
                aria-labelledby={`${p.slug}-title`}
                data-package={p.slug}
              >
                {/* Media */}
                <div className="relative aspect-video overflow-hidden rounded-[calc(var(--radius-2xl)-.5rem)]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.imageAlt || p.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-paper to-brand-cream" />
                  )}
                </div>

                {/* Title & outcome */}
                <h3
                  id={`${p.slug}-title`}
                  className="mt-md text-lg font-semibold text-brand-charcoal"
                >
                  {p.name}
                </h3>
                <p className="mt-xs text-brand-charcoal/70 line-clamp-3">
                  {p.outcome}
                </p>

                {/* Persona dots (no visible text) */}
                <PersonaDots personas={p.personas} />

                {/* Price / time */}
                <div className="mt-sm">
                  <PriceBadge
                    min={p.basePriceMin}
                    max={p.basePriceMax}
                    hours={p.baseTimeHours}
                  />
                </div>

                {/* Actions */}
                <div className="mt-md flex flex-wrap gap-sm">
                  <Link
                    href={viewHref}
                    className="inline-flex items-center justify-center rounded-md px-md py-sm text-sm font-medium ring-1 ring-black/10 hover:bg-brand-cream/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    data-cta="view"
                    data-location="packages"
                    data-package={p.slug}
                    aria-label={`View details for ${p.name}`}
                  >
                    View
                  </Link>

                  <CTAButton
                    href={bookHref}
                    data-cta="book"
                    data-location="packages"
                    data-package={p.slug}
                    aria-label={`Book ${p.name}`}
                  >
                    Book
                  </CTAButton>
                </div>

                {p.footnote && (
                  <p className="mt-xs text-xs text-brand-charcoal/60">
                    {p.footnote}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
