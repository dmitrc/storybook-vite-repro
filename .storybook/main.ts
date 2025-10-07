import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve ||= {};
    config.resolve.alias = {
      ...config.resolve.alias,

      // Supposed to resolve to mock module, but the story still uses the real module
      // This breaks things if the real module had server-only deps (like `fs`)
      "@/utils/example": path.resolve(__dirname, "../mocks/utils/example.ts"),

      // If you uncomment this line, build will complain:
      // > [ERROR] No matching export in "mocks/utils/empty.ts" for import "hello"
      // So the alias syntax I am using must be correct, right?
      // "@/utils/example": path.resolve(__dirname, "../mocks/utils/empty.ts"),
    };

    return config;
  },
  staticDirs: ["../public"],
};
export default config;
