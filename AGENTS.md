# Repository guide

## Purpose

This repository contains a public project showcase for the `GothwadTech` account.
It is intended to be renamed to `GothwadTech.github.io` so GitHub Pages serves
it at <https://gothwadtech.github.io/>. The separate
`GothwadTech/website` repository remains the full official Gothwad Tech website.
This showcase must not present itself as that site's replacement.

## Source-of-truth rules

- Verify project claims in that project's current public README, documentation,
  or source before adding them here. Prefer modest descriptions over unverified
  performance, security, customer, revenue, team-size, or availability claims.
- A public repository is not proof that a product is launched, production-ready,
  supported, or authored by one particular person.
- Do not invent company registrations, employee biographies, client testimonials,
  email addresses, awards, user counts, uptime, benchmark figures, or guarantees.
- For current architecture and deployment details, link to each project and the
  source-based documentation portal rather than copying stale setup instructions.
- Keep the site's copy factual and visually polished. The account profile README
  belongs in the separate `GothwadTech/gothwadtech` repository.

## Site and deployment

- Stack: React, TypeScript, Vite, and Lucide icons; no application backend.
- `npm run verify` runs typecheck, lint, and the production build.
- GitHub Actions deploys `main` to GitHub Pages. Before the repo rename, the
  build uses the `/gothwadtech/` project path; after renaming to
  `GothwadTech.github.io`, it automatically switches to the domain root.
- After the rename, run **Deploy GitHub Pages** manually once (or push a new
  commit) so the root-path build replaces the earlier project-path deployment.
- The workflow generates canonical crawler files for whichever Pages path is
  active. Local builds use `/`.

## Local development

```sh
npm ci
npm run dev
npm run verify
```

For changes, update `README.md`, `docs/`, and `TASK.md` when they materially
change the site's purpose, source references, or deployment setup.
