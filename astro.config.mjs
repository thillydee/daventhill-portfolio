// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://daventhill.ch',

  // Enforce a single canonical URL shape (no trailing slash) across the whole
  // site. Without this, the sitemap emitted trailing-slash URLs while the
  // <link rel="canonical"> / hreflang tags emitted slash-less ones, so Google
  // saw two URLs per page: it crawled the sitemap (slashed) version, found a
  // canonical pointing at the slash-less version, and filed the page under
  // "Alternative page with proper canonical tag" / "Page with redirect"
  // instead of indexing it. 'never' makes Astro, @astrojs/sitemap and the
  // Vercel adapter all agree on the slash-less form (and 308-redirect the
  // trailing-slash variant to it).
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de' }
      },
      filter: (page) => !page.includes('/404')
    })
  ],
  adapter: vercel()
});