// import Head from "next/head";
// import Layout from "@/components/layout/layout/layout/Layout";
// import Hero from "@/components/home/Hero";
// import ValueProps from "@/components/home/ValueProps";
// import Packages from "@/components/home/Packages";
// import HowItWorks from "@/components/home/HowItWorks";
// import Reviews from "@/components/home/Reviews";
// import FAQ from "@/components/home/FAQ";
// import SeasonalOffer from "@/components/home/SeasonalOffer";
// import BookingCTA from "@/components/home/BookingCTA";
// import { packages } from "@/lib/packageData";
// import { faqs } from "@/lib/faqData";

// export default function HomePage() {
//   return (
//     <>
//       <Head>
//         <title>Family Concierge — Buy back your time</title>
//         <meta
//           name="description"
//           content="Book a Family Concierge for date nights, home resets, errands, and more."
//         />
//       </Head>
//       <Hero />

//     </>
//   );
// }

import Head from "next/head";
import Hero from "@/components/home/Hero";
import Packages from "@/components/home/Packages";
import FAQ from "@/components/home/FAQ";
import { packages } from "@/lib/packageData";
import { faqs } from "@/lib/faqData";
import { site } from "@/lib/siteConfig";
import { getMeta, localBusinessSchema, faqSchema } from "@/lib/seo";
import ValueProps from "@/components/home/ValueProps";
import HowItWorks from "@/components/home/HowItWorks";
import SeasonalOffer from "@/components/home/SeasonalOffer";
import BookingCTA from "@/components/home/Booking";

export default function HomePage() {
  const meta = getMeta({
    title: `${site.brand} — Buy back your time`,
    description:
      "Book a Family Concierge for date nights, home resets, errands, and more.",
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
      {/* <Reviews /> */}
      <FAQ items={faqs} />
      <SeasonalOffer />
      <BookingCTA />
    </>
  );
}

