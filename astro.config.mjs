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
                    {
                        name: "pages",
                        label: "Sidor",
                        files: [{
                            name: "startpage",
                            label: "Startsida",
                            file: "content/startpage.md",
                            fields: [
                                { name: 'title', widget: 'string', label: 'Titel' },
                                { name: 'body', widget: 'markdown', label: 'Innehåll' },
                            ]
                        }]
                    }
                ],
            },
        }),
    ],
});