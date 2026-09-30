// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The real address: the bare domain redirects to www (Vercel), so canonical/hreflang/sitemap/OG all use www.
  site: 'https://www.mramosvirginia.com',
  // Every page lives at "/work/" style URLs (vercel.json redirects "/work" there), so links, canonical and sitemap agree.
  trailingSlash: 'always',
  // The Spanish site used to live under /es. The permanent (301) redirects are in vercel.json; these
  // are only a fallback for other hosts and the dev server.
  redirects: {
    '/es': '/',
    '/es/work': '/work/',
    '/es/about': '/about/',
    '/es/lab': '/lab/',
    '/es/projects/webia': '/projects/webia/',
    '/es/projects/uxquickaudit': '/projects/uxquickaudit/',
    '/es/projects/auroradorada': '/projects/auroradorada/',
    '/es/projects/landora': '/projects/landora/',
    '/es/projects/rebranding-qdq': '/projects/rebranding-qdq/',
    '/es/projects/levedadzine': '/projects/levedadzine/',
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false, // Spanish (default) lives at "/", English at "/en/"
    },
  },
});
