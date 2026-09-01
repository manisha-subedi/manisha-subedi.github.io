# Manisha Subedi portfolio

Manisha Subedi's public data analyst portfolio. Built with Astro and MDX,
published to GitHub Pages at `https://levi09750.github.io/`.

## Content rules

- Use only facts that Manisha approved. Placeholders are marked "(placeholder)".
- Label planned projects as in development.
- Add a result only when a source supports it.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/`.

## Tests

```bash
npm test
```

## Publication

GitHub Actions builds and publishes `dist/` after each push to `main`.

## Where things live

- `src/data/site.ts`: profile, experience, education, projects.
- `src/content/blog/*.mdx`: posts. Frontmatter: `title`, `date`, `summary`, `readTime`.
- `src/styles/global.css`: all styling.
- `docs/superpowers/specs/`: design notes.
