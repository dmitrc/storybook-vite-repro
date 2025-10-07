import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Example from "@/components/Example";

const meta: Meta<typeof Example> = {
  title: "Components/Example",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {},
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {};
