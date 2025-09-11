import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* was /40 */}
      </div>
      <div className="relative z-10">
        <div className=" px-12 py-16 md:py-32  flex items-end md:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Buy back your time.
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Book a Family Concierge for date nights, home resets, errands, and
              more.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#packages">See Packages</Button>
              <Button href={site.booking.calendlyEventUrl} variant="secondary">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
