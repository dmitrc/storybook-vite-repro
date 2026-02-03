import type { Preview } from "@storybook/nextjs-vite";
import { sb } from "storybook/test";

sb.mock(import("../src/utils/example.ts"));

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
