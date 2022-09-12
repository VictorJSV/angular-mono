import { Injectable } from '@angular/core'
import { WuiIconModel, WuiIconName } from './model/wui-icon.model'
import * as ICONS from './icons'

@Injectable({
  providedIn: 'root',
})
export class WuiIconService {
  private icons: Map<WuiIconName, WuiIconModel> = new Map<WuiIconName, WuiIconModel>()

  /**
   * Register icon for later use
   *
   * @param icons Icon Name to register
   */
  setIcon(iconName: WuiIconName): void {
    if (this.icons.has(iconName)) return

    const icon = ICONS[iconName]
    if (icon) {
      this.icons.set(icon.name as WuiIconName, icon as WuiIconModel);
    }
  }

  /**
   * Get the icon model by its name
   *
   * @param name Identification name of the icon
   * @returns WuiIconModel or undefined
   */
  getIcon(name: WuiIconName): WuiIconModel | undefined {
    this.setIcon(name)
    if (!this.icons.has(name)) {
      // eslint-disable-next-line no-console
      console.warn(`Icon with name ${name} not found.`)
    }

    return this.icons.get(name)
  }
}
