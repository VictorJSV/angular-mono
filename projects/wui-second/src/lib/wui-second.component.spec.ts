import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WuiSecondComponent } from './wui-second.component';

describe('WuiSecondComponent', () => {
  let component: WuiSecondComponent;
  let fixture: ComponentFixture<WuiSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WuiSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WuiSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
