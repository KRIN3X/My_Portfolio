# project_overview.md

Single source of truth for the portfolio site. Read this before changing anything.

## Goal

A lightweight, mobile-first single-page portfolio for **Christian Van Natali** that
gets a recruiter from "who is this?" to "I want to talk to him" in under 60 seconds.

## Audience

- Hiring managers / recruiters scanning on a phone (Italian + international).
- Game-dev community looking at the projects.

## Constraints (from user rules)

- Prefer simple implementations.
- Avoid unnecessary abstraction.
- Keep mobile performance in mind.
- Don't invent new metadata fields unless necessary; prefer existing standardized fields.

## Tech stack — locked

- **Build**: Vite 5 + JavaScript (vanilla — no React/framework).
- **Styling**: Plain CSS with custom properties, fluid type via `clamp()`,
  `prefers-color-scheme` for dark/light, `prefers-reduced-motion` honored.
- **i18n**: Inline content object, EN + IT, toggle in nav. No i18n library.
- **Deploy**: GitHub Pages via GitHub Actions workflow on push to `main`.

## File map

```
My_landing_page/
├── project_overview.md        ← this file
├── README.md                  ← how to run / deploy
├── package.json
├── vite.config.js             ← `base` set for GH Pages
├── index.html                 ← semantic HTML, all 6 sections
├── public/                    ← static assets (favicon, project images)
├── src/
│   ├── main.js                ← entry: i18n init, scroll-reveal, nav
│   ├── styles.css             ← tokens + responsive layout
│   ├── i18n.js                ← { en, it } content + apply()
│   └── data.js                ← projects, skills, timeline data
└── .github/workflows/deploy.yml
```

## Visual style — Code IDE

The page is intentionally skinned as a code editor (GitHub-Dark / VS Code Dark+
inspired). Layout: titlebar (window dots + breadcrumb + lang toggle), sticky
left **Explorer** sidebar with a file tree, **editor** main column with one
"file pane" per section, and a bottom **status bar**. All typography is
monospace; prose blocks (about, project descriptions) use system sans for
readability.

### Design tokens (see `src/styles.css` `:root`)

- Surfaces: `--ide-bg #0D1117` · `--ide-panel #161B22` · `--ide-elev #1C2128`
- Borders: `--ide-border #30363D` · `--ide-border-2 #21262D`
- Text: `--ide-fg #C9D1D9` · `--ide-fg-2 #8B949E` · `--ide-fg-3 #6E7681`
- Accent (CTAs, status, active file rail): `--ide-accent #7EE787`
- Syntax tokens: `--tk-kw #FF7B72` (keywords) · `--tk-str #A5D6FF` (strings) ·
  `--tk-fn #D2A8FF` (entities) · `--tk-num #79C0FF` (numbers) ·
  `--tk-prop #FFA657` (properties / env keys) · `--tk-cmt #6E7681` (comments)
- Window dots: red `#FF5F57` · amber `#FEBC2E` · green `#28C840`
- Font: `ui-monospace, "JetBrains Mono", "SF Mono", Menlo, Consolas` (no web fonts).

### Section → file mapping

| Section | "File" | Render style |
|---|---|---|
| Hero | `hero.ts` | Top-level const + `summary()` return |
| About | `about.md` | Markdown rendering (h1, paragraphs, key/value table) |
| Skills | `skills.json` | JSON object with localized comments above each key |
| Projects | `projects/<slug>.ts` | Per-project code block (status, year, stack) + prose body |
| Experience | `experience.log` | Log lines: `[start..end] role · org` |
| Contact | `.env` | `KEY="value"` lines, values are clickable strings |

The Explorer file under the cursor highlights via IntersectionObserver and the
status bar's right-hand slot shows the current "open file".

## Page structure (single scroll)

1. **Hero** — name, one-line pitch, primary CTAs (Projects, Contact, GitHub).
2. **About** — bio paragraph from CV summary, key facts pills.
3. **Skills** — grouped chips (Languages, Engines, Web, Tools).
4. **Projects** ★ largest section — Presto.it (Laravel e-commerce), Pocket
   Metropolis, and Risiko feature cards.
5. **Experience & Education** — vertical timeline (Hackademy+, Unicam, Eximia
   internship, secondary schools).
6. **Contact** — email, phone, LinkedIn, GitHub.

Sticky top nav with anchor links + EN/IT toggle + theme follows OS.

## Performance budget (mobile, 4G)

- HTML + CSS + JS combined < 30 KB gzipped.
- Each project image < 80 KB (WebP, lazy-loaded).
- Lighthouse mobile target: Performance ≥ 95, Accessibility = 100,
  Best Practices ≥ 95, SEO ≥ 95.

## Content data shape — keep stable

Don't invent new metadata fields unless required by the UI.

```js
// Project: { id, status, year, stack, links?, featured }
// SkillGroup: { id, items }
// TimelineEntry: { id, start, end, url? }
```

## Out of scope (for v1)

- CMS / dynamic content.
- Blog.
- Contact form backend (mailto link is enough).
- Analytics.

Add any of these only after v1 is live and the user asks for them.
