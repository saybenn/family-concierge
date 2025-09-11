export default function HowItWorks({
  steps = [
    {
      title: "Pick a package",
      blurb: "Choose a flat‑rate experience that fits your day.",
    },
    {
      title: "Confirm the plan",
      blurb: "We align on details by message or quick call.",
    },
    {
      title: "We do the work",
      blurb: "On‑time arrival, checklist followed, photo proof.",
    },
    {
      title: "Enjoy + summary",
      blurb: "You get time back; we send a short recap.",
    },
  ],
}) {
  return (
    <section className="container py-12! md:py-16">
      <h2 className="text-2xl font-semibold">How it works</h2>
      <ol className="mt-6 grid gap-6 md:grid-cols-4">
        {steps.map((s, idx) => (
          <li
            key={idx}
            className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5"
          >
            <div className="text-xs text-[var(--muted)]">Step {idx + 1}</div>
            <div className="mt-1 font-medium">{s.title}</div>
            <p className="mt-2 text-sm text-[var(--muted)]">{s.blurb}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
