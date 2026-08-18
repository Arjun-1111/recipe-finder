import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    alias: {
      // @ symbol maps to src/ directory
      // So instead of: import { cn } from '../../shared/utils/cn'
      // You write:     import { cn } from '@/shared/utils/cn'
      // Much cleaner and refactor-safe!
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 3000, // dev server runs on localhost:3000 (instead of default 5173)
    open: true, // automatically opens browser when you run npm run dev
  },
});
