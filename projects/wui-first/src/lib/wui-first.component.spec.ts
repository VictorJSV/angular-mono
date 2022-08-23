import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WuiFirstComponent } from './wui-first.component';

describe('WuiFirstComponent', () => {
  let component: WuiFirstComponent;
  let fixture: ComponentFixture<WuiFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WuiFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WuiFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
