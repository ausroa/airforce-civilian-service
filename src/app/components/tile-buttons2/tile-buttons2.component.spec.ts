import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileButtons2Component } from './tile-buttons2.component';

describe('TileButtons2Component', () => {
  let component: TileButtons2Component;
  let fixture: ComponentFixture<TileButtons2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileButtons2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileButtons2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
