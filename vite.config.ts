import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { seoPlugin } from "./build/seo.ts";
import { SITE_URL } from "./src/data/seo.ts";

export default defineConfig(({ mode }) => ({
  plugins: [vue(), seoPlugin(SITE_URL || loadEnv(mode, ".", "SITE_").SITE_URL)],
  // Works at both username.github.io and username.github.io/repository/.
  base: "./",
}));
