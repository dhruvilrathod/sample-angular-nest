import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample2Component } from './sample2.component';

describe('Sample2Component', () => {
  let component: Sample2Component;
  let fixture: ComponentFixture<Sample2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sample2Component]
    });
    fixture = TestBed.createComponent(Sample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
