import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://wiselydesk.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    react()
  ],
  output: "static",
  adapter: vercel({
    analytics: true
  })
});
