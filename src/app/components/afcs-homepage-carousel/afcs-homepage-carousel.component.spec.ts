import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfcsHomepageCarouselComponent } from './afcs-homepage-carousel.component';

describe('AfcsHomepageCarouselComponent', () => {
  let component: AfcsHomepageCarouselComponent;
  let fixture: ComponentFixture<AfcsHomepageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfcsHomepageCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfcsHomepageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
