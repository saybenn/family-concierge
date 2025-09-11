export default function ValueProps({
  items = [
    {
      icon: "check",
      title: "Clear fixed prices",
      blurb: "Know the cost before you book.",
    },
    {
      icon: "shield",
      title: "Background‑checked helpers",
      blurb: "Trusted people in your home.",
    },
    {
      icon: "clock",
      title: "Scope and timing you control",
      blurb: "Book exactly what you need.",
    },
  ],
}) {
  return (
    <section className="py-12 mx-auto w-11/12">
      {/* <h2 className="text-2xl font-semibold">Why families book us</h2> */}
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((v, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-[#12161C] p-5"
          >
            <div className="text-lg font-medium text-white">{v.title}</div>
            <p className="mt-2 text-sm text-[#A7B0BB]">{v.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
