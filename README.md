# Fọlábòmí — portfolio site

Static site (plain HTML + CSS, no build step) implementing **Website · Direction D (Name Tag Collage)** from the design canvas.

| Page | File |
|---|---|
| Home / landing | `index.html` |
| About | `about.html` |
| Case study · Medicare Supply Chain | `work/medicare.html` |
| Fọlá's Corner | `corner.html` |

Shared styles and design tokens live in `assets/css/styles.css`. Change `--accent` in `:root` to re-colour the site (design options: `#C8322B`, `#1D4535`, `#1E2F4D`, `#111111`).

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Placeholders still to fill
- About timeline: `[YEARS]` for each role
- Corner shelf: 12 `[COLLECTION TITLE]` / `[year]` entries and real cover art
- LinkedIn, CV, Medium and "buy the collections" links (currently `#` anchors)
- Vascan, Halvest and A Blank Canvas case studies (cards link back to `#work`)
