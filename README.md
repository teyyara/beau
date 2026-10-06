# Beau Burger — Oujda

Production-oriented static restaurant website for Beau Burger, Oujda.

## Run locally

No build step is required.

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Verified public business data

- Address: n5, Rue Annakhil, Oujda 34000, Morocco
- Phone: +212 668 08 05 08
- Instagram: @beauburgeroujda
- Public rating observed: 4.8/5 on Google
- Publicly listed hours used by the site: Mon–Fri 15:00–00:30, Sat 09:00–00:30, Sun closed
- Public price range observed: MAD 50–100/person

The website deliberately keeps the commercial phone CTA as the primary ordering/reservation path because no verified online ordering endpoint was found during reconnaissance.

## SEO / deployment note

The canonical URL and sitemap are intentionally deferred until the real production domain is known and controlled by the owner. `robots.txt` therefore only declares crawl permission.

## Content provenance

Public business data and menu transcription are documented under `evidence/research/`. Images from Restaurant Guru are used as remote progressive-enhancement imagery with local SVG fallbacks so the site remains visually usable if those remote assets fail.
