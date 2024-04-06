import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
  root: "src",
  publicDir: "public",
});
