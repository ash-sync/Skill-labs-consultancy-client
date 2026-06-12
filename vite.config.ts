import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 4173,
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // React core (small but critical)
            if (
              id.includes("react") ||
              id.includes("react-dom")
            ) {
              return "vendor-react";
            }

            // Router (not needed for initial paint)
            if (id.includes("react-router")) {
              return "vendor-router";
            }

            // Redux (state management)
            if (
              id.includes("@reduxjs/toolkit") ||
              id.includes("react-redux")
            ) {
              return "vendor-redux";
            }

            // Everything else (safe fallback)
            return "vendor";
          }
        },
      },
    },
  },
});