import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://decalentadoressolares.com",
  output: "static",
  trailingSlash: "never",
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx(),
  ],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  build: {
    assets: '_assets',
  },
});
