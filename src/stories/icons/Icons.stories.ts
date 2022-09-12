import { CommonModule } from "@angular/common";
import { WuiIconComponent } from "@app/wui-icon/src/public-api";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { within, userEvent } from "@storybook/testing-library";
import IconsComponent from "./icons.component";

export default {
  title: "Icons",
  component: IconsComponent,
  argTypes: {
    color: { control: "color" },
    size: { control: "select", options: ["12 x 12", "20 x 20"] },
    filterBy: { control: "text" },
  },
  decorators: [
    moduleMetadata({
      declarations: [IconsComponent, WuiIconComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const List: Story = (args) => ({
  props: args,
});
