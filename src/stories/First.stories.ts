import { WuiFirstComponent } from "@app/wui-first/src/public-api";
import { Meta, Story } from "@storybook/angular";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "First",
  component: WuiFirstComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: "First",
    primary: true,
  },
});
