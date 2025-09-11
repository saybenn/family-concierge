import Link from "next/link";
import { site } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="mt-16 pt-8! border-t border-white/10">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">{site.brand}</div>
          <div className="text-sm text-app-muted mt-2">
            Serving: {site.serviceArea.join(", ")}
          </div>
        </div>
        <div className="text-sm">
          <div>
            Phone: <a href={`tel:${site.phone}`}>{site.phone}</a>
          </div>
          <div>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <div className="text-sm">
          <Link href="/" className="block">
            Home
          </Link>
          <a href="#packages" className="block">
            Packages
          </a>
          <a href="#faq" className="block">
            FAQ
          </a>
        </div>
      </div>
      <div className="text-center text-xs py-6 text-[var(--muted)]">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </div>
    </footer>
  );
}
