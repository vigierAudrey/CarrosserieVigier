# Carrosserie Carcanaise — Site vitrine Astro

Site vitrine statique pour la Carrosserie Carcanaise (Carcans). Astro SSG, JS minimal, SEO local et accessibilité renforcée.

## Prérequis
- Node.js 18+
- npm

## Installation
```bash
npm install
```

## Développement
```bash
npm run dev
```

## Build
```bash
npm run build
```

## Structure
- `src/layouts/BaseLayout.astro` : layout global + JSON-LD + thème.
- `src/components/` : Header, Footer, CTA, toggle thème, head SEO.
- `src/pages/` : pages du site.
- `src/data/site.ts` : NAP, horaires, URLs.
- `public/` : images, sitemap, robots, llms.txt, humans.txt.

## À personnaliser avant mise en production
- URL du site : `astro.config.mjs` et `src/data/site.ts`.
- Horaires réels et coordonnées exactes (géolocalisation).
- SIRET et informations d’hébergement dans `/mentions-legales`.
- Remplacer les images avant/après (`public/images/realisations`).
