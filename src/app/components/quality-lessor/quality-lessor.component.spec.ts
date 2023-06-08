import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityLessorComponent } from './quality-lessor.component';

describe('QualityLessorComponent', () => {
  let component: QualityLessorComponent;
  let fixture: ComponentFixture<QualityLessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityLessorComponent]
    });
    fixture = TestBed.createComponent(QualityLessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
