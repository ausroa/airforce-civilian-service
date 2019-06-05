import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobPageComponent } from './find-job-page.component';

describe('FindJobPageComponent', () => {
  let component: FindJobPageComponent;
  let fixture: ComponentFixture<FindJobPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
