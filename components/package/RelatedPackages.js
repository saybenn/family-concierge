import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import PriceBadge from "@/components/ui/PriceBadge";
import { packages } from "@/lib/packageData";

export default function RelatedPackages({ currentSlug, limit = 3 }) {
  const related = packages
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
  if (!related.length) return null;
  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold">You might also like</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {related.map((p) => (
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
              <div className="mt-4">
                <Link
                  href={`/packages/${p.slug}`}
                  className="px-3 py-2 border border-white/15 rounded-md"
                >
                  View
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
