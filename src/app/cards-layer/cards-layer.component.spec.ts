import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLayerComponent } from './cards-layer.component';

describe('CardsLayerComponent', () => {
  let component: CardsLayerComponent;
  let fixture: ComponentFixture<CardsLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
