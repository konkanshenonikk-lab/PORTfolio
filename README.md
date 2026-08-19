# Nidhish R. Shenoy — Portfolio

A single-page portfolio built with plain HTML, CSS and JavaScript — no
frameworks, no build step, no dependencies. Open `index.html` in a browser
and it runs.

## Why it looks like this

I run on two tracks — trading/markets and engineering — so the page is
built as two personas instead of one theme:

- **Terminal mode** — dark, monospace, code-editor windows for Skills and
  Projects.
- **Notebook mode** — the About section is a replica of an actual page from
  my notes: ruled lines, red margin rule, the "PAGE NO. / DATE" corner box,
  even a torn top edge.

The toggle in the nav bar switches the whole page between the two — it's
not just a colour swap, it's meant to feel like switching which side of me
you're looking at.

## Files

```
portfolio/
├── index.html    → structure and content
├── style.css     → all styling, both themes, animations
├── script.js     → ticker, mode toggle, typing effect, scroll reveal
├── avatar.svg    → hand-placed pixel art monogram (the required image)
└── README.md     → this file
```

## Features

- Terminal / Notebook mode toggle (persists via `localStorage`)
- Boot-up typing animation on the name
- Scroll-triggered section reveals (`IntersectionObserver`)
- A scrolling ticker built from my actual watchlist symbols
  (values are randomised for flavour — not live data)
- A hand-drawn 5×7 pixel-grid SVG monogram instead of a stock photo
- Fully responsive, keyboard-focusable, and respects
  `prefers-reduced-motion`

## Before you push this

The individual project cards have `<!-- paste this project's repo link
here -->` comments right above their `view source →` links — drop the real
GitHub URLs in before deploying. The GitHub profile link in the nav and
contact section is already wired up.

## Deploying with GitHub Pages

1. Push this folder to a repository (e.g. `portfolio`).
2. Go to **Settings → Pages**.
3. Under **Source**, pick the `main` branch and `/ (root)`.
4. Save — the site will be live at
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Stack

HTML5, CSS3 (Flexbox + Grid, custom properties, `clip-path`,
`IntersectionObserver`-driven reveals), vanilla JavaScript. Fonts: Big
Shoulders Display, IBM Plex Mono, Kalam (Google Fonts).
