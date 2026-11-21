import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://eleda.web.id',
  output: 'static',

  build: {
    format: 'directory',
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});