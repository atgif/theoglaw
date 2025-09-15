// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import staticAdapter from '@astrojs/adapter-static';

// https://astro.build/config
export default defineConfig({
  adapter: staticAdapter(),
  site: "https://theoglaw.com",
  integrations: [mdx(), sitemap()]
});
