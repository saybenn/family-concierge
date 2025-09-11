import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PriceBadge from "@/components/ui/PriceBadge";
import { site } from "@/lib/siteConfig";

export default function Packages({ items = [] }) {
  return (
    <section id="packages" className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold">Popular packages</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Card key={p.slug}>
            <div className="p-4">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium">{p.name}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{p.outcome}</p>
              <div className="mt-3">
                <PriceBadge
                  min={p.basePriceMin}
                  max={p.basePriceMax}
                  hours={p.baseTimeHours}
                />
              </div>
              <div className="mt-4 flex gap-3">
                <Link
                  href={`/packages/${p.slug}`}
                  className="px-3 py-2 border border-white/15 rounded-md"
                >
                  View
                </Link>
                <Button
                  href={
                    site.booking.calendlyEventUrl + `?utm_campaign=${p.slug}`
                  }
                >
                  Book
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
