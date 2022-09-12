import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { WuiIconName } from "@app/wui-icon/src/lib/model/wui-icon.model";
import * as ICONS from "@app/wui-icon/src/lib/icons";

@Component({
  selector: "storybook-icon",
  templateUrl: "./icons.component.html",
  styleUrls: ["./icons.component.scss"],
})
export default class IconsComponent implements OnChanges {
  iconsNames!: WuiIconName[];
  @Input() color?: string;
  @Input() filterBy?: string;

  constructor() {
    this.initIcons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filterBy) {
      changes.filterBy.currentValue.length
        ? this.filterIcons(changes.filterBy.currentValue)
        : this.initIcons();
    }
  }

  private initIcons(): void {
    this.iconsNames = Object.keys(ICONS).map(
      (iconName: string) => iconName as WuiIconName
    );
  }

  filterIcons(searchValue: string): void {
    this.iconsNames = this.iconsNames.filter((iconName: string) =>
      iconName.toLocaleLowerCase().includes(searchValue.trim().toLowerCase())
    );
  }
}
