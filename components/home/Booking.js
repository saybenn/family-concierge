import { site } from "@/lib/siteConfig";
import Button from "../ui/Button";

export default function BookingCTA({
  label = "Book Now",
  href = site.booking?.calendlyEventUrl,
}) {
  if (!href) return null;
  return (
    <section className="container py-12 md:py-16">
      <div className="rounded-2xl border border-white/10 bg-[#12161C] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="text-xl font-semibold text-white">
            Ready to buy back your time?
          </div>
          <p className="text-sm text-[#A7B0BB] mt-1">
            Pick a time that works and we’ll handle the details.
          </p>
        </div>
        <Button href={site.booking.calendlyEventUrl}>Book Now</Button>
      </div>
    </section>
  );
}
