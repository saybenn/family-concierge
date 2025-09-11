import { useState } from "react";

export default function Disclosure({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between"
      >
        <span className="font-medium">{q}</span>
        <span className="text-[var(--muted)]">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-[var(--muted)]">{a}</p>}
    </div>
  );
}
