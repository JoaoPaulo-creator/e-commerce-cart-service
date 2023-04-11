import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [
      ...configDefaults.exclude,
      "packages/template/*",
      "**/node_modules/**",
      "**/dist/**",
    ],
    include: ["tests/**/*.spec.ts"],
  },
});
