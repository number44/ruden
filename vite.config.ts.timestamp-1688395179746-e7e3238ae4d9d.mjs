// vite.config.ts
import { defineConfig } from "file:///home/daniel/projects/geowp/wp-content/themes/new-m2m3/node_modules/vite/dist/node/index.js";
import react from "file:///home/daniel/projects/geowp/wp-content/themes/new-m2m3/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "/home/daniel/projects/geowp/wp-content/themes/new-m2m3";
var root = __vite_injected_original_dirname;
var outDir = resolve(__vite_injected_original_dirname, "dist");
var vite_config_default = defineConfig({
  root,
  build: {
    manifest: true,
    outDir,
    emptyOutDir: true
    // rollupOptions: {
    //   input: {
    //     main: resolve(root, "index.html"),
    //     en: resolve(root, "en.html"),
    //     ru: resolve(root, "ru.html"),
    //     es: resolve(root, "es.html"),
    //     fr: resolve(root, "fr.html"),
    //     gr: resolve(root, "gr.html"),
    //     it: resolve(root, "it.html"),
    //   },
    // },
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kYW5pZWwvcHJvamVjdHMvZ2Vvd3Avd3AtY29udGVudC90aGVtZXMvbmV3LW0ybTNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2RhbmllbC9wcm9qZWN0cy9nZW93cC93cC1jb250ZW50L3RoZW1lcy9uZXctbTJtMy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9kYW5pZWwvcHJvamVjdHMvZ2Vvd3Avd3AtY29udGVudC90aGVtZXMvbmV3LW0ybTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IHJvb3QgPSBfX2Rpcm5hbWU7XG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdCxcbiAgYnVpbGQ6IHtcbiAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICBvdXREaXIsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgLy8gcm9sbHVwT3B0aW9uczoge1xuICAgIC8vICAgaW5wdXQ6IHtcbiAgICAvLyAgICAgbWFpbjogcmVzb2x2ZShyb290LCBcImluZGV4Lmh0bWxcIiksXG4gICAgLy8gICAgIGVuOiByZXNvbHZlKHJvb3QsIFwiZW4uaHRtbFwiKSxcbiAgICAvLyAgICAgcnU6IHJlc29sdmUocm9vdCwgXCJydS5odG1sXCIpLFxuICAgIC8vICAgICBlczogcmVzb2x2ZShyb290LCBcImVzLmh0bWxcIiksXG4gICAgLy8gICAgIGZyOiByZXNvbHZlKHJvb3QsIFwiZnIuaHRtbFwiKSxcbiAgICAvLyAgICAgZ3I6IHJlc29sdmUocm9vdCwgXCJnci5odG1sXCIpLFxuICAgIC8vICAgICBpdDogcmVzb2x2ZShyb290LCBcIml0Lmh0bWxcIiksXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVixTQUFTLG9CQUFvQjtBQUNqWCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBRnhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU0sT0FBTztBQUNiLElBQU0sU0FBUyxRQUFRLGtDQUFXLE1BQU07QUFHeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFVBQVU7QUFBQSxJQUNWO0FBQUEsSUFDQSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWWY7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
