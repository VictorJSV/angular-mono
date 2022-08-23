import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { WuiIconService } from './wui-icon.service'
import { WuiIconModel } from './icons'
import { WuiIconName } from './model/wui-icon.model'

@Component({
  selector: 'wui-icon',
  template: '',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WuiIconComponent {
  @HostBinding('innerHTML')
  svg?: SVGElement

  /** Name of the icon that you want to display (e.g. iconName="filter"). */
  @Input()
  @HostBinding('attr.aria-label')
  get iconName(): WuiIconName | undefined {
    return this.icon?.name
  }
  set iconName(value: WuiIconName | undefined) {
    if (!value || this.iconName === value) return

    this.icon = this.WuiIconService.getIcon(value)

    if (this.icon?.data) {
      this.svg = this.sanitizer.bypassSecurityTrustHtml(this.icon.data) as SVGElement
    }
  }
  private icon?: WuiIconModel

  constructor(private sanitizer: DomSanitizer, private WuiIconService: WuiIconService) {}
}
