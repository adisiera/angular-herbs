import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbFilterComponent } from './herb-filter.component';

describe('HerbFilterComponent', () => {
  let component: HerbFilterComponent;
  let fixture: ComponentFixture<HerbFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
