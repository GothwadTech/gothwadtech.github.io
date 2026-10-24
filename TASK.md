# Project status

## Purpose

This repository contains a public software-project showcase, separate from the
full official website in [`GothwadTech/website`](https://github.com/GothwadTech/website).
The account's special profile README lives separately in
`GothwadTech/gothwadtech`.

The former Cloudflare-oriented corporate site and its unsupported marketing
copy were removed. Project summaries link to source repositories and avoid
claims that may be stale or unverified.

## Deployment plan

The requested final URL is <https://gothwadtech.github.io/>. While this repo is
still named `gothwadtech`, the Pages workflow will deploy to
<https://gothwadtech.github.io/gothwadtech/>. After the owner renames this
repository to `GothwadTech.github.io`, run **Deploy GitHub Pages** once more;
the workflow detects the new name and builds for the root URL.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) and the
[profile README prompt](docs/PROFILE_README_PROMPT.md).

## Follow-up

- [ ] Enable GitHub Pages with **GitHub Actions** as the source.
- [ ] Merge the reviewed PR; confirm the Actions deployment succeeds.
- [ ] Rename this repository to `GothwadTech.github.io`.
- [ ] Run **Deploy GitHub Pages** after the rename to publish at the root URL.
- [ ] Run `npm run verify` before future changes.
