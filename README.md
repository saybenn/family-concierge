# Family Concierge — MVP


## Run
npm i
npm run dev


## Configure
- Set real `site.url`, `site.phone`, `site.email` in `lib/siteConfig.js`.
- Put real **Calendly** event URL in `site.booking.calendlyEventUrl`.
- Create **Stripe Payment Links** per package and paste into `stripeLinks`.
- In Calendly Event Type → Confirmation Page, set **Redirect URL** to a payment confirmation page OR your Stripe link (for prepaid flow).


## Images
Place `.webp` assets in `public/images/...`. Update paths in `packageData.js` if you rename.


## Deploy
Vercel or Netlify. Add GA4 / GTM in `_document.js` or via tag manager.