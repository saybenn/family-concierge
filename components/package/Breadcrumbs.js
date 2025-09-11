import Link from "next/link";

export default function Breadcrumbs({
  items = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/#packages" },
  ],
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container pt-6 text-sm text-[var(--muted)]"
    >
      <ol className="flex items-center gap-2">
        {items.map((b, i) => (
          <li key={i} className="flex items-center gap-2">
            <Link href={b.href} className="hover:underline">
              {b.label}
            </Link>
            <span className="opacity-60">/</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
