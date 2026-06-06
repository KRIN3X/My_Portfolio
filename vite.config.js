import { defineConfig } from "vite";

// `base` is read from BASE_PATH at build time so the GitHub Pages workflow
// can inject "/<repo-name>/" without a code change. Locally `npm run dev`
// stays at "/".
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  build: {
    target: "es2022",
    sourcemap: false,
    rollupOptions: {
      output: {
        // Single chunk keeps the network waterfall tiny on mobile.
        manualChunks: undefined,
      },
    },
  },
});
