// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  site: "https://theoglaw.com",
  integrations: [svelte(), mdx(), sitemap()]
});
