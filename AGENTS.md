# Repository guide

## Purpose

This repository contains Gothwad Tech's public information and source-discovery website at <https://gothwadtech.github.io/>. It is distinct from the product/app discovery portal at <https://gothwadtech.com/> and the central developer documentation portal at <https://docs.gothwadtech.com/>. The account profile README belongs in `GothwadTech/gothwadtech`.

## Source-of-truth rules

- Verify project claims in each project's current public README, licence, releases, documentation or source before adding them here.
- Prefer modest, factual summaries over unverified performance, security, customer, revenue, availability or support claims.
- A public repository is not proof that a product is launched, production-ready, supported or authored by one particular person.
- Do not invent biographies, employee counts, legal status, client testimonials, contact details, awards, usage metrics, uptime, benchmarks or guarantees.
- Keep upstream and fork attribution visible; check licences and third-party ownership before describing a project as original.
- Leadership is limited to Pawan Gothwad (Founder), Yuvkesh Meena (CEO), and Vishnu (Co-founder); do not add extra roles, team members or biographies.
- Use English only and do not add analytics or third-party tracking.
- Do not duplicate developer docs; link to https://docs.gothwadtech.com/.
- Clearly label unavailable company/product information as unpublished rather than guessing.
- Keep SEO helpful and human-readable. Do not keyword-stuff or add structured data that makes claims not visible in page content.

## Site and deployment

- Stack: static HTML, CSS and vanilla JavaScript. Page content must remain in HTML for crawlers and for visitors with JavaScript disabled.
- No framework, package manager, bundler, runtime backend or GitHub Actions deployment workflow is used.
- GitHub Pages serves the repository root from the `main` branch using **Deploy from a branch → `main` → `/(root)`**.
- Keep canonical URLs, Open Graph metadata, JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt` and page links synchronized when adding or moving pages.
- Update the repository inventory and its checked date when the public GitHub account changes materially.
- See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) and [docs/CONTENT_POLICY.md](docs/CONTENT_POLICY.md).

## Local preview and checks

```sh
python3 -m http.server 8000
```

Check every HTML page, metadata, local assets, internal paths/fragments, sitemap and `404.html`. Page content must remain in static HTML; JavaScript only enhances navigation, repo/product filters, product comparisons, the product finder and the current-year label.
