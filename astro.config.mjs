// astro.config.mjs

import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          {
            name: "pages",
            label: "Sidor",
            files: [
              {
                name: "startpage",
                label: "Startsida",
                file: "src/content/startpage.md",
                fields: [
                  {
                    name: "title",
                    widget: "string",
                    label: "Titel",
                  },
                  {
                    name: "preamble",
                    widget: "string",
                    label: "Ingress",
                  },
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Innehåll",
                  },
                ],
              },
              {
                name: "slakttrad",
                label: "Släktträd",
                file: "src/content/slakttrad.md",
                fields: [
                  {
                    name: "title",
                    widget: "string",
                    label: "Titel",
                  },
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Innehåll",
                  },
                ],
              },
              {
                name: "hans-ake",
                label: "Hans-åke",
                file: "src/content/hans-ake.md",
                fields: [
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Innehåll",
                  },
                ],
              },
              {
                name: "ingemar",
                label: "Ingemar",
                file: "src/content/ingemar.md",
                fields: [
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Innehåll",
                  },
                ],
              },
              {
                name: "martin",
                label: "Martin",
                file: "src/content/martin.md",
                fields: [
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Innehåll",
                  },
                ],
              },
              {
                name: "mats",
                label: "Mats",
                file: "src/content/mats.md",
                fields: [
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Innehåll",
                  },
                ],
              },
              {
                name: "per",
                label: "Per",
                file: "src/content/per.md",
                fields: [
                  {
                    name: "body",
                    widget: "markdown",
                    label: "Innehåll",
                  },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
