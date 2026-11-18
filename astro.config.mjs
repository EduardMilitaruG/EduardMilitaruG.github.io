import { defineConfig } from 'astro/config';

// Published as the GitHub Pages user site: https://eduardmilitarug.github.io/
export default defineConfig({
  site: 'https://eduardmilitarug.github.io',
  base: '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  i18n: {
    locales: ['en', 'es', 'ro'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
