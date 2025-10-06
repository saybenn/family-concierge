// components/home/FAQ.js
import { useState } from "react";
import {
  sectionLight,
  containerX,
  h2L,
  metaDim,
} from "@/components/ui/classnames";

/**
 * Props:
 * - title?: string
 * - subline?: string
 * - items: Array<{ id?: string; q: string; a: string | JSX }>
 * - id?: string (anchor)
 * - singleOpen?: boolean (default: false)
 */
export default function FAQ({
  title = "Common questions",
  subline = "Quick answers about how Unique Butler Service works.",
  items = [],
  id = "faq",
  singleOpen = false,
}) {
  // Keep initial state deterministic (empty set)
  const [openSet, setOpenSet] = useState(() => new Set());

  if (!items?.length) return null;

  const toggle = (key) => {
    setOpenSet((prev) => {
      if (singleOpen) {
        // only one open: replace with this key
        return new Set([key]);
      } else {
        const next = new Set(prev);
        next.has(key) ? next.delete(key) : next.add(key);
        return next;
      }
    });
  };

  const getKey = (item, idx) => item.id ?? String(idx); // stable key
  const isOpen = (key) => openSet.has(key);

  return (
    <section id={id} className={sectionLight} aria-labelledby={`${id}-heading`}>
      <div className={containerX}>
        <header className="text-center mb-xl">
          <h2 id={`${id}-heading`} className={h2L}>
            {title}
          </h2>
          <p className={metaDim}>{subline}</p>
        </header>

        <dl
          className="
          mx-auto divide-y divide-black/10 dark:divide-white/10
          rounded-[var(--radius-2xl)]
          bg-white/70 dark:bg-brand-paper
          backdrop-blur-md
          ring-1 ring-white/50 dark:ring-white/10
          shadow-[var(--shadow-soft)]
        "
        >
          {items.map((item, idx) => {
            const key = getKey(item, idx);
            // build panel/button IDs purely from stable data
            const panelId = `${id}-panel-${key}`;
            const btnId = `${id}-button-${key}`;
            const open = isOpen(key);

            return (
              <div key={key} className="px-md md:px-lg">
                <dt>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(key)}
                    className="
                      flex w-full items-center justify-between gap-4 py-md
                      text-left  rounded-md
                    "
                    data-cta="faq-toggle"
                    data-question={item.id || item.q}
                  >
                    <span className="text-base md:text-lg font-semibold text-brand-charcoal dark:text-brand-charcoal">
                      {item.q}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 9l6 6 6-6"
                      />
                    </svg>
                  </button>
                </dt>

                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`
                    overflow-hidden transition-[max-height,opacity] duration-300 ease-out
                    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="pb-md -mt-1 text-sm md:text-base text-brand-charcoal/80 dark:text-app-muted">
                    {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-lg text-center">
          <a
            href="#book"
            className="text-sm underline underline-offset-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
            data-cta="faq-contact"
            data-location="faq"
          >
            Still have questions? Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
