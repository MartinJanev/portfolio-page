# Portfolio Website

Personal portfolio for [Martin Janev](https://martinjanev.github.io/portfolio-page/) — computer science student showcasing projects, research, and experience.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4

## Development

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier write |
| `npm run deploy` | Build and publish to GitHub Pages |

## Updating content

Edit the data files under `src/components/data/`:

- `AboutData.ts` — highlights and skill categories
- `ExperienceData.ts` — work, education, volunteering
- `ResearchData.ts` — research entries
- `ProjectData.ts` — featured projects
- `ContactData.ts` — email and social links

Section layout and UI live under `src/components/sections/`.

## Deployment

The site is configured for GitHub Pages at `/portfolio-page` (see `vite.config.ts` `base`). Deploy with:

```bash
npm run deploy
```
