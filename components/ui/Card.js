export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-subtle bg-app-surface shadow-card ${className}`}
    >
      {children}
    </div>
  );
}
