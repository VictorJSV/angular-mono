import { ViewChild, Component } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { WabiIconComponent } from './wui-icon.component'
import { WabiIconModule } from './wui-icon.module'
import { WabiIconName } from './model/wui-icon.model'

@Component({
  template: '<wabi-icon [iconName]="iconName" ></wabi-icon>',
})
class WabiIconTestComponent {
  @ViewChild(WabiIconComponent) iconComponent!: WabiIconTestComponent
  iconName: WabiIconName = 'zipFile'
}

describe('WabiIconComponent', () => {
  let component: WabiIconTestComponent
  let fixture: ComponentFixture<WabiIconTestComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WabiIconTestComponent],
      imports: [WabiIconModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WabiIconTestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
    expect(component.iconComponent).toBeTruthy()
  })
})
