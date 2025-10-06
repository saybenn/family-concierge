// components/BrandLogo.tsx or .jsx
export default function BrandLogo() {
  const maskUrl = "/images/logos/ubs-dark.svg"; // single-color SVG (fill: currentColor)
  const pngLight = "/images/logos/ubs-nav-light.png"; // fallback for light
  const pngDark = "/images/logos/ubs-nav-dark.png"; // fallback for dark

  return (
    <span className="inline-flex items-center">
      {/* Masked SVG — shown only when CSS masks are supported */}
      <span
        role="img"
        aria-label="Unique Butler Service"
        className={[
          "hidden supports-[mask-image:linear-gradient(#000,#000)]:inline-block",
          "supports-[-webkit-mask-image:linear-gradient(#000,#000)]:inline-block",
          "h-14 md:h-16 aspect-[4/1] w-auto",
          "bg-current text-brand-charcoal dark:text-brand-gold",
        ].join(" ")}
        style={{
          WebkitMaskImage: `url(${maskUrl})`,
          maskImage: `url(${maskUrl})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "left center",
          maskPosition: "left center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      {/* PNG fallback — hidden when masks are supported */}
      <img
        src={pngLight}
        alt="Unique Butler Service"
        className="block dark:hidden h-8 md:h-9 w-auto
                   supports-[mask-image:linear-gradient(#000,#000)]:hidden
                   supports-[-webkit-mask-image:linear-gradient(#000,#000)]:hidden"
      />
      <img
        src={pngDark}
        alt=""
        className="hidden dark:block h-8 md:h-9 w-auto
                   supports-[mask-image:linear-gradient(#000,#000)]:hidden
                   supports-[-webkit-mask-image:linear-gradient(#000,#000)]:hidden"
      />
    </span>
  );
}
