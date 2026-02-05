import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function _d(p: string) {
  return path.resolve(__dirname, p);
}

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
      "@/utils/example": _d("../mocks/utils/example.ts"),
      ...config.resolve.alias,
    };

    return config;
  },
  staticDirs: ["../public"],
};
export default config;
