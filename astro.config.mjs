// astro.config.mjs

import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
            // Define a blog post collection
            {
              name: 'pages',
              label: 'Pages',
              folder: 'src/pages/',
              create: true,
              delete: true,
              fields: [
                { name: 'title', widget: 'string', label: 'Page Title' },
                { name: 'body', widget: 'markdown', label: 'Page Body' },
              ],
            },
          ],
      },
    }),
  ],
});