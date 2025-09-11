import { site } from "@/lib/siteConfig";
import Button from "@/components/ui/Button";

export default function SeasonalOffer({ offer = site.seasonalOffer }) {
  if (!offer) return null;

  return (
    <section className="py-10!">
      {" "}
      {/* no container here */}
      <div className="container">
        {" "}
        {/* isolate from parent layout */}
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#12161C]">
          <div className="p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-lg md:text-xl font-semibold text-white">
                {offer.title}
              </div>
              <div className="flex gap-4">
                <Button href={offer.ctaHref}>{offer.ctaLabel}</Button>
                <a
                  href="#packages"
                  className="px-4 py-2 rounded-md border border-white/15"
                >
                  See all packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
