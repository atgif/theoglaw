// @ts-check
import { defineConfig } from "astro/config";
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
export default defineConfig({
  integrations: [svelte()],
});

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: "https://theoglaw.com",
  integrations: [mdx(), sitemap()]
});
