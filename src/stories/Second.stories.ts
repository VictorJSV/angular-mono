import { Meta, Story } from "@storybook/angular";
import { within, userEvent } from "@storybook/testing-library";
import { SecondComponent } from "second";

export default {
  title: "Second",
  component: SecondComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: "Second",
    primary: true,
  },
});
