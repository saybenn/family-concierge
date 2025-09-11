import Disclosure from "@/components/ui/Disclosure";

export default function FAQ({ items = [] }) {
  return (
    <section id="faq" className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold">FAQs</h2>
      <div className="mt-4">
        {items.map((f, idx) => (
          <Disclosure key={idx} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
