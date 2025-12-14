import type { StorybookConfig } from "@storybook/nextjs-vite";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function _d(p: string) {
  return path.resolve(__dirname, p);
}

const mocks = {
  [_d("../src/utils/example.ts")]: _d("../mocks/utils/example.ts"),
};

const mockPlugin = {
  name: "storybook-mock-module",
  enforce: "pre" as const,
  load(id: string) {
    if (Object.keys(mocks).includes(id)) {
      const mockContent = readFileSync(mocks[id], "utf-8");
      return mockContent;
    }
    return null;
  },
};

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins ||= [];
    config.plugins.unshift(mockPlugin);

    return config;
  },
  staticDirs: ["../public"],
};
export default config;
