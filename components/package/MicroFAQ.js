// File: components/package/MicroFAQ.jsx
import Disclosure from "@/components/ui/Disclosure";

export default function MicroFAQ({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="container py-8 md:py-12">
      <h2 className="text-2xl font-semibold">Common questions</h2>
      <div className="mt-4">
        {items.map((f, idx) => (
          <Disclosure key={idx} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
