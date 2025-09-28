// pages/index.js
import Head from "next/head";
import { site } from "@/lib/siteConfig";
import { getMeta, localBusinessSchema, faqSchema } from "@/lib/seo";

// Sections
import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import Packages from "@/components/home/Packages";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import SeasonalOffer from "@/components/home/SeasonalOffer";
import BookingCTA from "@/components/home/Booking";

// Data
import { packages } from "@/lib/packageData";
import { faqs } from "@/lib/faqData";
import dynamic from "next/dynamic";
const MobileBookFAB = dynamic(() => import("@/components/ui/MobileBookFAB"), {
  ssr: false,
});

export default function HomePage() {
  const meta = getMeta({
    title: `${site.brand} — Buy back your time`,
    description:
      "Book a Unique Butler Service for date nights, home resets, errands, and more.",
    url: site.url,
  });

  const schemaGraph = [
    localBusinessSchema({
      name: site.brand,
      url: site.url,
      phone: site.phone,
      areaServed: site.serviceArea,
    }),
    faqSchema(faqs),
  ];

  return (
    <>
      <Head>
        {meta}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </Head>

      <Hero />
      <ValueProps />
      <Packages items={packages.slice(0, 6)} />
      <HowItWorks />
      <FAQ items={faqs} />
      <SeasonalOffer
        id="seasonal"
        title={site.seasonalOffer.title}
        ctaLabel={site.seasonalOffer.ctaLabel}
        ctaHref={`${site.seasonalOffer.ctaHref}?utm_campaign=seasonal-offer`}
        // Optional scheduling; comment these in when you have real dates:
        // startAt="2025-09-01T00:00:00-07:00"
        // endAt="2025-09-30T23:59:59-07:00"
        // code="B2S20"
        // finePrint="Valid for first-time bookings. Local only."
      />
      <BookingCTA />

      <MobileBookFAB targetId="book" />
    </>
  );
}

