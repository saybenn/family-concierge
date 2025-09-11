import { site } from "@/lib/siteConfig";

export default function BookingCTA({
  label = "Book Now",
  href = site.booking?.calendlyEventUrl,
}) {
  if (!href) return null;
  return (
    <section className="container py-12 md:py-16">
      <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">
            Ready to buy back your time?
          </div>
          <p className="text-[var(--muted)] text-sm mt-1">
            Pick a time that works and we’ll handle the details.
          </p>
        </div>
        <a
          href={href}
          className="px-5 py-2 rounded-md bg-[var(--primary)] text-black font-medium"
        >
          {label}
        </a>
      </div>
    </section>
  );
}
