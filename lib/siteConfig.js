export const site = {
  brand: "Family Concierge",
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
    calendlyEventUrl: "https://calendly.com/yourbrand/family-concierge-30min", // Configure Calendly redirect to Stripe (Event Type > Confirmation Page)
    stripeLinks: {
      // Optional direct pay links per package; create in Stripe > Payment Links
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
};
