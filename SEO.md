# SEO

## Points clés
- Titles et descriptions uniques par page.
- OpenGraph + Twitter Card via `src/components/BaseHead.astro`.
- Canonical géré automatiquement via `site` (astro.config.mjs) + URL.
- Sitemap statique : `public/sitemap.xml`.
- Robots : `public/robots.txt`.
- Données structurées : JSON-LD sur l’accueil (AutoBodyShop + FAQPage).
- Fichiers AI-friendly : `public/llms.txt` et `public/humans.txt`.

## À personnaliser
- URL du site : `astro.config.mjs` + `src/data/site.ts`.
- Coordonnées exactes (horaires, géo, réseaux sociaux).
- Images réelles pour `/realisations` et OG (remplacer `public/og.svg`).

## Contenu local
- Mentionner clairement Carcans et les communes desservies.
- Ajouter des FAQ réelles issues des clients.
