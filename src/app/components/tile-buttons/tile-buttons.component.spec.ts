import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileButtonsComponent } from './tile-buttons.component';

describe('TileButtonsComponent', () => {
  let component: TileButtonsComponent;
  let fixture: ComponentFixture<TileButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
