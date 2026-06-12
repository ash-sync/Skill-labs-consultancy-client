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
    modulePreload: {
      resolveDependencies(_, deps) {
        return deps.filter(dep => !dep.includes('datepicker'));
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Split React core (smallest critical chunk needed for hydration)
            if (id.includes("/react/") && !id.includes("react-dom") && !id.includes("react-router") && !id.includes("react-redux") && !id.includes("react-datepicker") && !id.includes("react-redux")) {
              return "vendor-react";
            }
            // React DOM is larger — keep separate so it can load in parallel
            if (id.includes("react-dom")) {
              return "vendor-react-dom";
            }
            // Router — only needed after initial paint
            if (id.includes("react-router")) {
              return "vendor-router";
            }
            // Redux store
            if (id.includes("@reduxjs/toolkit") || id.includes("react-redux")) {
              return "vendor-redux";
            }
            // Date picker — lazy loaded, keep isolated
            if (id.includes("react-datepicker")) {
              return "vendor-datepicker";
            }
            // Icons — only used per-page
            if (id.includes("lucide-react")) {
              return "vendor-lucide";
            }
            // Everything else
            return "vendor-libs";
          }
        }
      }
    }
  }
});
