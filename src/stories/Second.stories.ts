import { WuiSecondComponent } from "@app/wui-second/src/public-api";
import { Meta, Story } from "@storybook/angular";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Second",
  component: WuiSecondComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: "Second",
    primary: true,
  },
});
