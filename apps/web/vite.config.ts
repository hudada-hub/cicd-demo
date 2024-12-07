import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.BASE_URL || "/",
  plugins: [react()],
  test: {
    environment: "happy-dom",
    globals: true,
  },
});
