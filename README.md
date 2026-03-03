# New England Transit Advocacy Site

Static React website for `advocacy.netransit.net`, built with Vite + TypeScript and deployed via GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Trigger: push to `main`
- Output: `dist/`
- Custom domain: `advocacy.netransit.net` (via `public/CNAME`)

## Content Editing

All editable site text, links, metrics, and outreach cards are centralized in:

- `src/data/siteContent.ts`

Replace placeholder media/PDF assets in:

- `public/assets/posts/`
- `public/assets/bu-fare-free-proposal.pdf`
