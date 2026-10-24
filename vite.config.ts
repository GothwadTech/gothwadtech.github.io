import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/').pop()?.toLowerCase();
const base =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName !== 'gothwadtech.github.io'
    ? `/${repositoryName || 'gothwadtech'}/`
    : '/';

function crawlerFiles() {
  const siteUrl = `https://gothwadtech.github.io${base}`;

  return {
    name: 'gothwad-pages-crawler-files',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}</loc></url></urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), crawlerFiles()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
