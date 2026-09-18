// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mramosvirginia.com',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // English lives at "/", Spanish at "/es/"
    },
  },
});
