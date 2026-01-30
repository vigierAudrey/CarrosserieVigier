# SECURITY_HEADERS

Ces headers sont recommandés pour un site statique Astro. À adapter selon l’hébergeur.

## En-têtes essentiels

- `Content-Security-Policy`:
  - Exemple (à ajuster selon les intégrations) :
  - `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-src https://www.google.com; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (uniquement si HTTPS)

## Notes
- Le site utilise un script inline minimal pour le thème. Pour éviter `unsafe-inline`, vous pouvez ajouter un hash CSP.
- La carte Google Maps nécessite `frame-src https://www.google.com`.
