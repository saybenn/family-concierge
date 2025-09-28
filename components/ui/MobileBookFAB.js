// components/ui/MobileBookFAB.js
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileBookFAB({ targetId = "book", menuOpen = false }) {
  const [show, setShow] = useState(false);

  // Show after intent; hide if menu open
  useEffect(() => {
    const onScroll = () => setShow(!menuOpen && (window.scrollY || 0) > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // Hide when target section is visible
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setShow(false),
      { rootMargin: "0px 0px -40% 0px", threshold: [0, 0.25] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [targetId]);

  if (typeof window === "undefined") return null;

  return (
    <div
      aria-hidden={!show}
      className={[
        "md:hidden fixed right-4 bottom-4 z-50",
        "pb-[env(safe-area-inset-bottom)]",
        "transition-all duration-200",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      {/* Frosted halo to stop "floating text" effect */}
      <div className="rounded-full p-1 bg-black/20 dark:bg-black/30 backdrop-blur-md ring-1 ring-white/15 shadow-[0_8px_30px_rgba(0,0,0,.35)]">
        <Link
          href={`#${targetId}`}
          data-cta="book"
          data-location="fab"
          aria-label="Book Now"
          className={[
            "flex items-center gap-2 rounded-full",
            "px-5 py-3 text-sm font-semibold",
            "bg-brand-primary text-brand-cream dark:bg-app-primary dark:text-app-bg",
            "shadow-[0_6px_18px_rgba(0,0,0,.25)] active:shadow-[0_3px_10px_rgba(0,0,0,.35)]",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary",
            "transition-colors duration-150",
          ].join(" ")}
        >
          {/* Calendar icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="drop-shadow-sm">Book Now</span>
        </Link>
      </div>
    </div>
  );
}
