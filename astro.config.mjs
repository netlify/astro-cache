import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import { refreshPlugin } from "./plugin.mjs";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [refreshPlugin({ path: "/__refresh" })],
  },
});
