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
      <h2 className="text-2xl font-semibold">What customers say</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {items.map((r, i) => (
          <figure
            key={i}
            className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5"
          >
            <blockquote className="text-sm">“{r.quote}”</blockquote>
            <figcaption className="mt-3 text-xs text-[var(--muted)]">
              — {r.author}, {r.meta}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
