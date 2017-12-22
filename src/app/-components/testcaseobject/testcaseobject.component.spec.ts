import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseobjectComponent } from './testcaseobject.component';

describe('TestcaseobjectComponent', () => {
  let component: TestcaseobjectComponent;
  let fixture: ComponentFixture<TestcaseobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcaseobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
