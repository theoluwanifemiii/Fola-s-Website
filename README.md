# Fọlábòmí — portfolio site

React (Vite + React Router) implementation of **Website · Direction D (Name Tag Collage)** from the design canvas.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` outputs a static site to `dist/`.

## Structure

| Route | Page component |
|---|---|
| `/` | `src/pages/Home.jsx` |
| `/about` | `src/pages/About.jsx` |
| `/work/medicare` | `src/pages/MedicareCaseStudy.jsx` |
| `/corner` | `src/pages/Corner.jsx` |

Shared pieces live in `src/components/` (`SiteHeader`, `Ghost`, `Marker`, `Tag`/`TagList`, `WorkCard`, `NumberedCards`, `FooterLine`).
Styles and design tokens are in `src/styles.css`. Change `--accent` in `:root` to re-colour the site (design options: `#C8322B`, `#1D4535`, `#1E2F4D`, `#111111`).
Photos are in `public/img/`.

## Deploying

Any static host works. `vercel.json` (Vercel) and `public/_redirects` (Netlify) send every route to `index.html` so deep links like `/about` load.

## Placeholders still to fill
- About timeline: `[YEARS]` for each role (`TIMELINE` in `About.jsx`)
- Corner shelf: 12 `[COLLECTION TITLE]` / `[year]` entries and real cover art (`KNOWN_TITLES` in `Corner.jsx`)
- LinkedIn, CV, Medium and "buy the collections" links (currently `#` anchors)
- Vascan, Halvest and A Blank Canvas case studies (cards link back to `/#work`)
