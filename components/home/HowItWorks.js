// components/home/HowItWorks.js
import {
  sectionDark,
  containerX,
  h2L,
  metaDimDark,
} from "@/components/ui/classnames";

/** Tiny inline icons (optional per-step) */
const Icons = {
  package: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7l9 4 9-4M3 7l9-4 9 4M3 7v10l9 4 9-4V7"
      />
    </svg>
  ),
  chat: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h8M8 14h5m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
  heart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.3 7.3a5.5 5.5 0 017.8 0l.9.9.9-.9a5.5 5.5 0 017.8 7.8l-8.7 8.7-8.7-8.7a5.5 5.5 0 010-7.8z"
      />
    </svg>
  ),
};

/**
 * props:
 * - title?: string
 * - subline?: string
 * - steps?: Array<{ title: string; blurb: string; icon?: keyof typeof Icons; analyticsId?: string }>
 * - id?: string (section anchor)
 */
export default function HowItWorks({
  title = "How it works",
  subline = "Simple steps. Clear communication. Reliable results.",
  steps = [
    {
      title: "Pick a package",
      blurb: "Choose a flat-rate experience that fits your day.",
      icon: "package",
    },
    {
      title: "Confirm the plan",
      blurb: "We align on details by message or a quick call.",
      icon: "chat",
    },
    {
      title: "We do the work",
      blurb: "On-time arrival, checklist followed, photo proof.",
      icon: "check",
    },
    {
      title: "Enjoy + summary",
      blurb: "You get time back; we send a short recap.",
      icon: "heart",
    },
  ],
  id = "how",
}) {
  if (!steps?.length) return null;

  return (
    <section
      id={id}
      className="py-3xl md:py-4xl bg-brand-cream text-brand-charcoal dark:bg-app-surface dark:text-app-text"
      aria-labelledby={`${id}-heading`}
    >
      <div className={containerX}>
        <header className="text-center mb-xl">
          <h2 id={`${id}-heading`} className={h2L}>
            {title}
          </h2>
          <p className="text-brand-charcoal/70 dark:text-app-muted">
            {subline}
          </p>
        </header>

        <ol className="grid gap-lg min-w-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => {
            const Icon = s.icon ? Icons[s.icon] : null;
            return (
              <li
                key={s.analyticsId || s.title || idx}
                className="
                  pl-8 group relative rounded-[var(--radius-2xl)]
                  bg-white/70 dark:bg-app-surface
                  ring-1 ring-black/10 dark:ring-white/10
                  p-md min-w-0
                  transition-shadow hover:shadow-[var(--shadow-soft)]
                "
              >
                <span
                  aria-hidden="true"
                  className="lg:hidden absolute left-5 top-0 h-full w-px bg-black/10 dark:bg-white/10"
                />
                <div className="relative z-10 flex items-center gap-2">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center
                                   rounded-full bg-black/5 text-brand-charcoal ring-1 ring-black/10
                                   dark:bg-white/10 dark:text-app-text dark:ring-white/20 font-semibold"
                  >
                    {idx + 1}
                  </span>
                  <span className="text-xs text-brand-charcoal/60 dark:text-app-muted">
                    Step {idx + 1}
                  </span>
                  {Icon && (
                    <Icon
                      aria-hidden="true"
                      className="ml-2 h-6 w-6 opacity-80"
                    />
                  )}
                </div>

                <h3 className="mt-sm text-lg font-semibold text-brand-charcoal dark:text-app-text">
                  {s.title}
                </h3>
                <p className="mt-xs text-sm text-brand-charcoal/70 dark:text-app-muted">
                  {s.blurb}
                </p>

                <span
                  aria-hidden="true"
                  className="
                  absolute bottom-0 left-0 right-0 h-px
                  bg-gradient-to-r from-black/0 via-black/10 to-black/0
                  dark:from-white/0 dark:via-white/20 dark:to-white/0
                  opacity-0 transition-opacity duration-200 group-hover:opacity-100
                "
                />
              </li>
            );
          })}
        </ol>

        <div className="mt-lg text-center">
          <a
            href="#packages"
            className="text-sm underline underline-offset-4 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
          >
            See packages
          </a>
        </div>
      </div>
    </section>
  );
}
