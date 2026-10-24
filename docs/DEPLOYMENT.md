# GitHub Pages deployment

The repository uses the GitHub Actions Pages deployment flow. It can deploy
before and after the planned repository rename, and selects the correct path
for each name.

## Before renaming

1. In **GothwadTech / gothwadtech → Settings → Pages**, set **Build and
deployment → Source** to **GitHub Actions**.
2. Merge the reviewed PR into `main`. The workflow publishes the project site at
   <https://gothwadtech.github.io/gothwadtech/> while the repository is still
   named `gothwadtech`.
3. Check the Actions run succeeds and review the temporary project URL.

## After renaming to `GothwadTech.github.io`

1. Rename this repository to exactly **`GothwadTech.github.io`** in GitHub
   repository settings.
2. In **Settings → Pages**, confirm **GitHub Actions** remains the source.
3. Run **Deploy GitHub Pages** from the Actions tab, or push a new commit. The
   build detects the new repository name and uses `/` as its asset base.
4. Verify <https://gothwadtech.github.io/>, its assets, sitemap, and browser
   console.

GitHub serves the root user-site URL only when the repository is named exactly
`GothwadTech.github.io`. The special account profile README belongs in the
separate `GothwadTech/gothwadtech` repository, not in this site repository.

## Local preview

```sh
npm ci
npm run build
npm run preview
```

Local builds use `/`. GitHub Actions automatically builds with
`/gothwadtech/` before the rename and `/` afterward; `robots.txt` and
`sitemap.xml` are generated with the matching canonical URL.
