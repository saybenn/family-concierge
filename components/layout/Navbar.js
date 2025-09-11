import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[color:rgba(18,22,28,0.6)] border-b border-white/5">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Family Concierge
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="#packages">Packages</Link>
          <Link href="#faq">FAQ</Link>
          <a
            href="#book"
            className="px-3 py-1.5 rounded-md bg-[var(--primary)] text-black font-medium"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}
