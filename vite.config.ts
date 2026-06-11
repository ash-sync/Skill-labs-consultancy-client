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
            if (id.includes("react-router") || id.includes("react-dom") || id.includes("react")) {
              return "vendor-core";
            }
            if (id.includes("@reduxjs/toolkit") || id.includes("react-redux")) {
              return "vendor-redux";
            }
            if (id.includes("lucide-react")) {
              return "vendor-lucide";
            }
            return "vendor-libs";
          }
        }
      }
    }
  }
});
