import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/intro-section-with-dropdown-nav/",
  plugins: [react()],
});
