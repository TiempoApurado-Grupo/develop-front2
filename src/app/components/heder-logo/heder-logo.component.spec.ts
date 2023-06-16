import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederLogoComponent } from './heder-logo.component';

describe('HederLogoComponent', () => {
  let component: HederLogoComponent;
  let fixture: ComponentFixture<HederLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HederLogoComponent]
    });
    fixture = TestBed.createComponent(HederLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
