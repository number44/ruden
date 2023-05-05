import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const root = __dirname;
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    manifest: true,
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        en: resolve(root, "en.html"),
        ru: resolve(root, "ru.html"),
        es: resolve(root, "es.html"),
        fr: resolve(root, "fr.html"),
        gr: resolve(root, "gr.html"),
        it: resolve(root, "it.html"),
      },
    },
  },
  plugins: [react()],
});
