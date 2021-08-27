import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmosphereIconComponent } from './atmosphere-icon.component';

describe('AtmosphereIconComponent', () => {
  let component: AtmosphereIconComponent;
  let fixture: ComponentFixture<AtmosphereIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmosphereIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmosphereIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
