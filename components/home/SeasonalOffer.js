// components/home/SeasonalOffer.jsx
import { site } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

export default function SeasonalOffer({ offer = site.seasonalOffer }) {
  if (!offer) return null;

  return (
    <section className="py-10">
      <div className="container">
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#12161C]">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-lg md:text-xl font-semibold text-white">
                {offer.title}
              </div>
              <div className="flex gap-4">
                <Button href={offer.ctaHref}>{offer.ctaLabel}</Button>
                <Button href="#packages" variant="secondary">
                  See all packages
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
