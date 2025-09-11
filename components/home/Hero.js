import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background hero image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.png"
          alt="Family Concierge — calm organized home"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container py-20 md:py-32 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-app-text">
            Buy back your time.
          </h1>
          <p className="mt-4 text-lg text-app-muted">
            Book a Family Concierge for date nights, home resets, errands, and
            more.
          </p>
          <div className="mt-8 flex gap-4">
            <Button href="#packages">See Packages</Button>
            <a
              id="book"
              href={site.booking.calendlyEventUrl}
              className="px-4 py-2 border border-white/20 rounded-md"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
