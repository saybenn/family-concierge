// File: pages/packages/[slug].js
import Head from "next/head";
import Image from "next/image";
import Button from "@/components/ui/Button";
import PriceBadge from "@/components/ui/PriceBadge";
import Breadcrumbs from "@/components/package/Breadcrumbs";
import RelatedPackages from "@/components/package/RelatedPackages";
import MicroFAQ from "@/components/package/MicroFAQ";
import { packages } from "@/lib/packageData";
import { site } from "@/lib/siteConfig";

export function getStaticPaths() {
  return {
    paths: packages.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const pkg = packages.find((p) => p.slug === params.slug);
  return { props: { pkg } };
}

function buildMicroFaq(pkg) {
  // Generic, scope-safe Q&A tailored to package context
  return [
    {
      q: `Is ${pkg.name} a fixed-scope service?`,
      a: `${pkg.name} is a flat-rate, fixed-scope service based on the inclusions listed. If you need more time or extras, you can request add-ons in 30-minute increments if the schedule allows.`,
    },
    {
      q: "Do you provide childcare or drive kids?",
      a: "No. We can coordinate a vetted sitter on request, but we do not provide direct childcare or transport minors.",
    },
    {
      q: "What purchases are included?",
      a: "Purchases (e.g., groceries, flowers, decor) are at cost. A small handling fee may apply. Receipts are provided with your summary.",
    },
    {
      q: "What if I need to reschedule?",
      a: "You can reschedule at least 24 hours in advance at no charge. Within 24 hours, a short-notice fee may apply.",
    },
  ];
}

export default function PackagePage({ pkg }) {
  const stripeLink = site.booking.stripeLinks[pkg.slug];
  const faqItems = buildMicroFaq(pkg);

  return (
    <>
      <Head>
        <title>
          {pkg.name} — {site.brand}
        </title>
        <meta name="description" content={pkg.outcome} />
      </Head>

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Packages", href: "/#packages" },
          { label: pkg.name, href: `/packages/${pkg.slug}` },
        ]}
      />

      <section className="container py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column: content */}
          <div>
            <h1 className="text-3xl font-semibold">{pkg.name}</h1>
            <p className="mt-2 text-[var(--muted)]">{pkg.outcome}</p>

            <div className="mt-4">
              <PriceBadge
                min={pkg.basePriceMin}
                max={pkg.basePriceMax}
                hours={pkg.baseTimeHours}
              />
            </div>

            <div className="mt-6">
              <h2 className="font-medium">What’s included</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {pkg.inclusions.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="font-medium">Limits</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {pkg.limits.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                href={
                  site.booking.calendlyEventUrl + `?utm_campaign=${pkg.slug}`
                }
              >
                Schedule on Calendly
              </Button>
              {stripeLink && (
                <a
                  href={stripeLink}
                  className="px-4 py-2 border border-white/20 rounded-md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pay with Stripe
                </a>
              )}
            </div>
          </div>

          {/* Right column: image */}
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Package-specific Micro FAQ */}
      <MicroFAQ items={faqItems} />

      {/* Related packages */}
      <RelatedPackages currentSlug={pkg.slug} />
    </>
  );
}
