# Portfolio rebuild, step 1: Astro, same look, new content

- **Status:** approved in conversation, spec awaiting review
- **Date:** 2026-09-01
- **Owner:** Manisha Subedi's portfolio at `https://levi09750.github.io/`

## 1. Goal

Replace the Next.js/vinext build with Astro and MDX. Keep the quiet look of
the current site. Update the home, about, and projects copy. Prepare the blog
for illustrated, interactive posts. Ship it to GitHub Pages.

Later steps, each its own spec: the first illustrated post, the projects
section, a CV button.

## 2. Decisions already made

| Topic | Decision |
|---|---|
| Stack | Astro 5, `@astrojs/mdx`, static output. No Tailwind, no worker, no ESLint. |
| Look | Direction A: system sans, gray nav bar, one 730 px column, photo with thin border. Current `globals.css` carries over almost line for line. |
| Site map | Home `/`, Projects `/projects/`, Writing `/blog/`, About `/about/`. Topics page removed. |
| URLs | Keep `/blog/<slug>/` for the two existing posts. Trailing slash always. |
| Experience | Not on the home page. Full list on About. |
| Placeholders | Company A and Company C stay marked "(placeholder)". Company B is Bengen. Dates are placeholders until Manisha confirms. |
| Content voice | Short plain sentences. Final copy passes through `/ste` before publish. |

## 3. What must not appear

No cards, gradients, hero banner, icon grids, colored bands, drop shadows on
text, or emoji. No left vertical border on experience entries. No text that
mentions chemical engineering on the home page. No invented results, numbers,
emails, or phone numbers.

## 4. Pages

### Home

1. Profile row: photo (180 px, thin border), name, "Data Analyst",
   "Amadora, Lisbon, Portugal", LinkedIn link.
2. Intro, two paragraphs:
   - "I work as a data engineer at Company A (placeholder). I build the
     pipelines that load, check, and model the data behind reports and
     analysis. Before this I was a data engineering intern at Bengen and a
     junior data analyst intern at Company C (placeholder)."
   - "Here I write short, illustrated notes on the ideas that make analysis go
     right or wrong: averages, joins, comparisons, and what a chart leaves
     out."
3. Writing: list of posts, newest first. Title, month, one-line summary.
   Optional small SVG icon at the left when a post defines one.
4. Projects: one line. "The first project is in development: Can an AI data
   agent recover from a broken metric pipeline?" links to `/projects/`.

### About

1. Short background: lives in Amadora near Lisbon. Studied chemical
   engineering, now studying food science and technology at FCT NOVA.
   Looking for an entry-level data analyst role.
2. Experience, newest first. Each entry: role in bold, company under it, date
   at the right, one sentence. No left border.
   - Data Engineer I, Company A (placeholder), 2025 to present
   - Data Engineering Intern, Bengen, 2024
   - Junior Data Analyst Intern, Company C (placeholder), 2023 to 2024
   - Scientific Initiation Intern, CIMO, Sep 2023 to Feb 2024
3. Education:
   - MSc Food Science and Technology, FCT NOVA, 2025 to 2027
   - BSc Chemical Engineering, Instituto Politécnico de Bragança, 2021 to 2024

### Projects

One entry: the metric pipeline experiment, marked "in development", one
sentence from its spec. Nothing else until the projects step.

### Writing

List of all posts, newest first. Same row format as the home page.

## 5. Blog post format

Posts live in `src/content/blog/<slug>.mdx`. Frontmatter:

```yaml
title: Before opening Power BI
date: 2026-08-01
summary: Choose the question before the chart.
readTime: 2 min read
icon: optional, path to a small SVG in src/icons/
```

The body is MDX. Inline SVG is allowed. Interactive figures are Astro or
plain JS components loaded only on the post that uses them. Three.js loads
only from a post that imports it. The reading column is 730 px. A figure may
widen to 900 px.

## 6. Files

Add:

- `astro.config.mjs`, `package.json`, `tsconfig.json`
- `src/layouts/Base.astro` (header, nav, footer, global CSS)
- `src/pages/index.astro`, `about.astro`, `projects.astro`,
  `blog/index.astro`, `blog/[slug].astro`
- `src/content.config.ts`, `src/content/blog/*.mdx` (the two current posts)
- `src/data/site.ts` (profile, experience, education, in one place)
- `src/styles/global.css`
- `tests/site.test.mjs`

Remove: `app/`, `build/`, `worker/`, `scripts/`, `.openai/`,
`next.config.ts`, `next-env.d.ts`, `vite.config.ts`, `postcss.config.mjs`,
`eslint.config.mjs`, `tests/rendered-html.test.mjs`, `DESIGN_NOTES.md`.

Keep: `public/manisha-subedi.jpg`, `public/og.png`,
`docs/superpowers/specs/*`, `.github/workflows/pages.yml` (artifact path
changes to `./dist`). Add `.astro/` and `.superpowers/` to `.gitignore`.

## 7. Build, test, deploy

- `npm run dev` for local work. `npm run build` writes `dist/`.
- `npm test` runs the build, then one Node test that checks: `dist/index.html`
  has the name and the intro, `dist/about/index.html` has all four experience
  entries, `dist/blog/index.html` lists both posts, both post pages exist,
  `dist/projects/index.html` exists, the home page does not contain
  "chemical", and no page contains "Topics" or "Seemron".
- GitHub Actions builds on push to `main` and deploys `dist/`.
- Nothing is pushed until the local result is reviewed in the browser.

## 8. Done when

- The four pages render locally and match direction A.
- `npm test` passes.
- The live site shows the new pages after one push.
