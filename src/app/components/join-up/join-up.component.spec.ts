import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUpComponent } from './join-up.component';

describe('JoinUpComponent', () => {
  let component: JoinUpComponent;
  let fixture: ComponentFixture<JoinUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinUpComponent]
    });
    fixture = TestBed.createComponent(JoinUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
