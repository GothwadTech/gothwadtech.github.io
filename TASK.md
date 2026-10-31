# Project status

## Purpose and boundaries

This is the English-language, no-analytics static public-information hub for Gothwad Tech. It is distinct from the product/app portal at <https://gothwadtech.com/>. Developer documentation lives separately at <https://docs.gothwadtech.com/>; this site links there and does not reproduce technical guides.

Leadership is limited to Pawan Gothwad (Founder), Yuvkesh Meena (CEO), and Vishnu (Co-founder). Operational or company facts not publicly provided are labeled unpublished rather than invented. Public repositories are not described as automatically released, available, production-ready, supported or open source.

## Current implementation

- Plain HTML, CSS and vanilla JavaScript; no framework, build step, backend, analytics or third-party tracking.
- Home, About, FAQ, Contact, Direction, Leadership, docs link-out and custom noindex 404 pages.
- Product catalogue with 26 public portal entries, client-side search/category filters, a listing-metadata comparison, and 23 individual product reference pages.
- Product finder filters the catalogue by broad goal and platform entirely in the browser.
- Local, source-derived product logo assets and 23 unique 1200×630 social preview images.
- Repository directory contains 54 public organization repositories checked 31 October 2026, with dated GitHub licence-metadata labels and “No licence listed” states.
- Additional public-information pages: Trust, Status, Privacy, Security, Licensing, Support, Legal sources, Accessibility, Careers, Events, Press, Media Kit, Updates, Glossary, Integrations and Contribute.
- Search metadata, canonical URLs, Open Graph/Twitter cards, JSON-LD, robots.txt, sitemap.xml, llms.txt, social assets and Google verification tag.
- The documentation page is a link-out only; it contains no copied developer guides.

## Publishing and maintenance

GitHub Pages should publish branch `main` from `/(root)`. No build or Actions deployment is required; see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). Before publishing, refresh dated repository and licence snapshots from GitHub, validate internal paths/fragments, JavaScript syntax, JSON-LD and sitemap parity, and inspect the live Google verification tag. Live search-console checks, uptime monitoring, legal review and accessibility testing remain manual; this site does not fabricate them.

The full 72-item disposition is tracked in [docs/WEBSITE_IDEAS.md](docs/WEBSITE_IDEAS.md).