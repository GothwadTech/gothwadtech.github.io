# GitHub Pages deployment (branch root)

This repository is a plain static website: `index.html`, `styles.css`, `script.js`, and its SVG assets are all served directly from the repository root. There is no framework build step and no GitHub Actions deployment workflow.

## GitHub Pages settings

In **GothwadTech / gothwadtech.github.io → Settings → Pages** set:

1. **Build and deployment → Source:** `Deploy from a branch`.
2. **Branch:** `main`.
3. **Folder:** `/(root)`.
4. Click **Save**.
5. Keep **Custom domain** empty when using `https://gothwadtech.github.io/`. Leave **Enforce HTTPS** enabled.

After saving, GitHub Pages will publish the root files from `main`. For updates, commit and push changes to `main`; allow a few minutes for Pages to publish them. No npm install, build command, or Actions workflow is required.

The `.nojekyll` file tells Pages to serve the static repository contents without a Jekyll build. The profile banner and favicon are also kept at the repository root so their paths work with this setup.

The special account profile README belongs in the separate `GothwadTech/gothwadtech` repository, not in this site repository.
