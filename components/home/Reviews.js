export default function Reviews({
  items = [
    {
      quote: "Date night finally felt easy.",
      author: "Alyssa",
      meta: "Parent of 2",
    },
    {
      quote: "Weekend reset changed our Sundays.",
      author: "Marcus",
      meta: "Riverside",
    },
    {
      quote: "Errand blitz saved me 3 hours.",
      author: "Nina",
      meta: "Northside",
    },
  ],
}) {
  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold text-brand-charcoal dark:text-app-text">
        What customers say
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((r, i) => (
          <figure
            key={i}
            className="rounded-[var(--radius-2xl)] border border-black/10 dark:border-white/10
                       bg-white/70 dark:bg-app-surface p-5 shadow-[var(--shadow-soft)]"
          >
            <blockquote className="text-sm text-brand-charcoal dark:text-app-text">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-3 text-xs text-brand-charcoal/60 dark:text-app-muted">
              — {r.author}, {r.meta}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
