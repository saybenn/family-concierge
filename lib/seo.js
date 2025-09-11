export function getMeta({ title, description, url, image }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

export function localBusinessSchema({ name, url, phone, areaServed }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    telephone: phone,
    areaServed: areaServed?.join(", "),
  };
}

export function serviceSchemaFromPackage(pkg, siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pkg.name,
    description: pkg.outcome,
    areaServed: "Local",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: pkg.name,
      itemListElement: [
        {
          "@type": "Offer",
          priceCurrency: "USD",
          price: `${pkg.basePriceMin}-${pkg.basePriceMax}`,
          url: `${siteUrl}/packages/${pkg.slug}`,
        },
      ],
    },
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
