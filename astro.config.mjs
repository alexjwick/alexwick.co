// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.alexwick.co",
  trailingSlash: "never",
  build: {
    format: "file",
    // The Content-Security-Policy in vercel.json blocks inline <style> tags.
    inlineStylesheets: "never",
  },
  markdown: {
    // Prism marks up code with classes. Shiki uses inline styles, which the CSP also blocks.
    syntaxHighlight: "prism",
  },
  integrations: [sitemap()],
});
