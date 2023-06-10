import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTenantComponent } from './header-tenant.component';

describe('HeaderTenantComponent', () => {
  let component: HeaderTenantComponent;
  let fixture: ComponentFixture<HeaderTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTenantComponent]
    });
    fixture = TestBed.createComponent(HeaderTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
