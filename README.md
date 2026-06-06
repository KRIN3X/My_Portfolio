# Christian Van Natali — Portfolio

A lightweight, mobile-first single-page portfolio. **Vite + JavaScript**, no
framework runtime. See [`project_overview.md`](./project_overview.md) for the
full plan, file map, and design tokens.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs ./dist
npm run preview  # serve the production build at :4173
```

## Deploy to GitHub Pages

1. Create a public GitHub repo and push this directory to `main`:

   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio scaffold"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. In the repo on github.com → **Settings → Pages → Build and deployment**,
   set **Source** to **GitHub Actions**.

3. Every push to `main` triggers `.github/workflows/deploy.yml`, which builds
   with `BASE_PATH=/<repo-name>/` (so paths resolve under the project URL)
   and publishes `dist/` to Pages. Your site will be live at
   `https://<your-username>.github.io/<repo-name>/`.

## Project layout

```
.
├── project_overview.md   # source of truth — read first
├── index.html            # semantic HTML for all 6 sections
├── public/favicon.svg
├── src/
│   ├── main.js           # entry: renders skills/projects/timeline + i18n
│   ├── styles.css        # tokens + responsive layout
│   ├── i18n.js           # EN/IT dictionaries + apply()
│   └── data.js           # project, skills, timeline data
├── vite.config.js        # reads BASE_PATH from env
└── .github/workflows/deploy.yml
```

## Editing content

- **Text** lives in `src/i18n.js` (EN + IT side by side, same keys).
- **Project / skill / timeline metadata** lives in `src/data.js`. Stick to the
  documented shapes — see `project_overview.md` for why.
- **Static assets** (project images, etc.) go in `public/` and are referenced
  with absolute paths like `/cover.webp`.

## Performance notes

- No web fonts; system stack only.
- Single JS chunk, no React runtime.
- `prefers-reduced-motion` disables reveals and smooth scroll.
- Add project images as **WebP under 80 KB**, lazy-loaded
  (`<img loading="lazy" decoding="async">`).
