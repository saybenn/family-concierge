import { CheckCircle, Shield, Clock, Zap } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { h2L, bodyBase } from "@/components/ui/classnames";

const ICONS = { check: CheckCircle, shield: Shield, clock: Clock, zap: Zap };

export default function ValueProps({
  items = [
    {
      icon: "check",
      title: "Clear fixed prices",
      blurb: "Know the cost before you book.",
    },
    {
      icon: "shield",
      title: "Background-checked helpers",
      blurb: "Trusted people in your home.",
    },
    {
      icon: "clock",
      title: "Scope and timing you control",
      blurb: "Book exactly what you need.",
    },
    {
      icon: "zap",
      title: "Fast response times",
      blurb: "Get help quickly when you need it most.",
    },
  ],
  ctaHref = "#packages",
  ctaLabel = "See Packages",
}) {
  return (
    <section
      aria-labelledby="valueprops-heading"
      className={[
        "relative py-3xl md:py-4xl",
        // light spa gradient band
        "bg-gradient-to-br from-[#FDFCFB] via-[#F9F3EE] to-[#F5E1DC]",
        "dark:from-[#0F1216] dark:via-[#12161C] dark:to-[#171B22]",
      ].join(" ")}
    >
      {/* Ambient soft glows */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-warning/20 blur-3xl dark:bg-warning/10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="text-center">
          <h2
            id="valueprops-heading"
            className={`${h2L} text-brand-charcoal dark:text-white/90`}
          >
            Why families book us
          </h2>
        </header>

        <div className="mt-lg grid gap-lg sm:grid-cols-2">
          {items.map((v, i) => {
            const Icon = ICONS[v.icon] || CheckCircle;
            return (
              <article
                key={i}
                className={[
                  "group relative overflow-hidden rounded-[var(--radius-2xl)]",
                  "bg-white/70 backdrop-blur-md ring-1 ring-white/50",
                  "shadow-[var(--shadow-soft)] transition-all",
                  "dark:bg-white/5 dark:ring-white/10",
                ].join(" ")}
              >
                <div className="relative flex items-start gap-md p-md">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream/80 text-primary ring-1 ring-white/50 dark:bg-white/10">
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={2}
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-charcoal dark:text-white">
                      {v.title}
                    </h3>
                    <p
                      className={`mt-xs ${bodyBase} text-brand-charcoal/70 dark:text-white/70`}
                    >
                      {v.blurb}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-xl text-center">
          <CTAButton href={ctaHref}>{ctaLabel}</CTAButton>
        </div>
      </div>
    </section>
  );
}
