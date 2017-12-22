import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogobjectComponent } from './logobject.component';

describe('LogobjectComponent', () => {
  let component: LogobjectComponent;
  let fixture: ComponentFixture<LogobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
