# Repository guide

## Purpose

This repository contains a public software-project showcase for the `GothwadTech` account. It is intended to be hosted at <https://gothwadtech.github.io/>. The separate `GothwadTech/website` repository remains the full official Gothwad Tech website. The account profile README belongs in `GothwadTech/gothwadtech`.

## Source-of-truth rules

- Verify project claims in that project's current public README, documentation, or source before adding them here. Prefer modest descriptions over unverified performance, security, customer, revenue, team-size, or availability claims.
- A public repository is not proof that a product is launched, production-ready, supported, or authored by one particular person.
- Do not invent company registrations, employee biographies, client testimonials, email addresses, awards, user counts, uptime, benchmark figures, or guarantees.
- Keep the site's copy factual and visually polished. Link to source-based documentation instead of copying details that may become stale.

## Site and deployment

- Stack: plain HTML, CSS, and vanilla JavaScript. No framework, package manager, bundler, or application backend is used.
- The site files and static assets are deployed directly from the repository root on the `main` branch.
- GitHub Pages should be configured as **Deploy from a branch → `main` → `/(root)`**. There is no GitHub Actions deployment workflow.
- See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the Pages settings.

## Local preview

Serve the repository root with any static HTTP server. For example:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. No build step is required.
