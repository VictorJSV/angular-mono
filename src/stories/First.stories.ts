import { Meta, Story } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { FirstComponent } from "first";

export default {
  title: "First",
  component: FirstComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: "First",
    primary: true,
  },
});