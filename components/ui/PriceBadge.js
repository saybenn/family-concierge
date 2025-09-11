export default function PriceBadge({ min, max, hours }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm">
      <span>
        ${min}–${max}
      </span>
      <span className="text-[var(--muted)]">· {hours}h base</span>
    </div>
  );
}
