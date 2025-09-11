export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-surface shadow-[0_10px_30px_rgba(0,0,0,.2)] ${className}`}
    >
      {children}
    </div>
  );
}
