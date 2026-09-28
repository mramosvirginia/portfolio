// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mramosvirginia.com',
  // The Spanish site used to live under /es: keep those URLs working.
  redirects: {
    '/es': '/',
    '/es/work': '/work',
    '/es/about': '/about',
    '/es/lab': '/lab',
    '/es/projects/webia': '/projects/webia',
    '/es/projects/uxquickaudit': '/projects/uxquickaudit',
    '/es/projects/auroradorada': '/projects/auroradorada',
    '/es/projects/landora': '/projects/landora',
    '/es/projects/rebranding-qdq': '/projects/rebranding-qdq',
    '/es/projects/levedadzine': '/projects/levedadzine',
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false, // Spanish (default) lives at "/", English at "/en/"
    },
  },
});
