import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0E12]/90 backdrop-blur border-b border-white/10">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Family Concierge
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="#packages">Packages</Link>
          <Link href="#faq">FAQ</Link>
          <Button href="#book">Book Now</Button>
        </div>
      </nav>
    </header>
  );
}
