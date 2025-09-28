export const site = {
  brand: "Unique Butler Service",
  businessName: "Unique Butler Service",
  url: "https://www.familyconcierge.example", // TODO: set real URL
  phone: "+1 (555) 555-1212",
  email: "hello@familyconcierge.example",
  serviceArea: ["Downtown", "Riverside", "Northside", "Hills"],

  seasonalOffer: {
    title: "Back-to-School Morning Launch — Save $20 this week",
    ctaLabel: "Book Morning Launch",
    ctaHref: "/packages/morning-launch",
  },

  booking: {
    calendlyEventUrl: "https://calendly.com/yourbrand/family-concierge-30min",
    stripeLinks: {
      "date-night-helper": "https://buy.stripe.com/test_123dateNight",
      "weekend-home-reset": "https://buy.stripe.com/test_123homeReset",
      "errand-blitz": "https://buy.stripe.com/test_123errandBlitz",
      "party-prep-tidy": "https://buy.stripe.com/test_123party",
      "travel-helper": "https://buy.stripe.com/test_123travel",
      "morning-launch": "https://buy.stripe.com/test_123morning",
      "new-baby-setup": "https://buy.stripe.com/test_123newbaby",
      "holiday-decor": "https://buy.stripe.com/test_123holiday",
      "move-in-refresh": "https://buy.stripe.com/test_123movein",
      "gift-concierge": "https://buy.stripe.com/test_123gift",
    },
  },

  services: [
    {
      title: "Errand Blitz",
      description: "Groceries, pickups, returns, gifts—done in one run.",
      duration: "~2.5 hrs",
      price: "From $99",
      icon: "/icons/errands.svg",
      demographics: ["professional", "parents"],
      href: "/packages/errand-blitz",
      personaHint: "Save hours each week — ideal for tight schedules.",
    },
    {
      title: "Morning Launch (School)",
      description: "Mornings run smooth—clothes, lunches, bags ready.",
      duration: "~2 hrs",
      price: "From $129",
      icon: "/icons/morning.svg",
      demographics: ["parents"],
      href: "/packages/morning-launch",
      personaHint: "School days start calm instead of rushed.",
    },
    {
      title: "New Baby Setup",
      description: "Non-medical nursery readiness and household prep.",
      duration: "~3 hrs",
      price: "From $199",
      icon: "/icons/baby.svg",
      demographics: ["parents", "caregivers"],
      href: "/packages/new-baby-setup",
      personaHint: "A calm, functional nursery from day one.",
    },
    {
      title: "Wellness Check-Ins",
      description:
        "Light check-ins, reminders, and coordination for loved ones.",
      duration: "30–60 min",
      price: "From $59",
      icon: "/icons/checkin.svg",
      demographics: ["caregivers", "professional"],
      href: "/packages/wellness-checkins",
      personaHint: "Reassurance for caregivers; comfort for loved ones.",
    },
    {
      title: "Date Night Helper",
      description:
        "Preps the home for a relaxed evening in — ambiance and reset.",
      duration: "~3 hrs",
      price: "From $199",
      icon: "/icons/date-night.svg",
      demographics: ["professional", "parents"],
      href: "/packages/date-night-helper",
      personaHint: "Evening ease for couples with no babysitter scramble.",
    },
    {
      title: "Travel Helper",
      description: "Pack, depart, and return to a stocked home.",
      duration: "~3 hrs",
      price: "From $179",
      icon: "/icons/travel.svg",
      demographics: ["professional", "parents"],
      href: "/packages/travel-helper",
      personaHint: "Travel without chaos — everything ready out and back.",
    },
  ],

  hero: {
    title: "Buy back your time.",
    subhead:
      "Background-checked, insured, and discretion-first Unique Butler Service for busy homes.",
    ctaLabel: "Book Now",
    ctaHref: "#book",
    secondaryLabel: "See Packages",
    secondaryHref: "#packages",
    personas: ["Parents", "Busy Professionals", "Caregivers"],
    imageSrc: "/images/hero/family-concierge-hero.png",
    imageAlt: "Calm, organized family home interior",
    variant: "A",
  },

  valueProps: [
    {
      title: "Fast Response",
      text: "Support when you need it, not weeks later.",
      icon: "/icons/fast.svg",
      personaNote: "Ideal for tight schedules and shifting demands.",
    },
    {
      title: "Expert Staff",
      text: "Professionally vetted, discreet, and detail-oriented.",
      icon: "/icons/expert.svg",
      personaNote: "Peace of mind for caregivers and families.",
    },
    {
      title: "Insurance Support",
      text: "We can coordinate with your coverage where applicable.",
      icon: "/icons/insurance.svg",
      personaNote: "Helpful for parents and elder care logistics.",
    },
  ],

  /**
   * PERSONA CHIPS — reusable visual identity for demographics
   */
  personaChipColors: {
    Parents: "bg-green-400",
    "Busy Professionals": "bg-blue-400",
    Caregivers: "bg-amber-400",
  },
};
