import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 3000,
    watch: {
      ignored: ["**/.node_modules.provenance-backup/**"],
    },
  },
});
