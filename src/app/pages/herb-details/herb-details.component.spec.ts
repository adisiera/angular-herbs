import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbDetailsComponent } from './herb-details.component';

describe('HerbDetailsComponent', () => {
  let component: HerbDetailsComponent;
  let fixture: ComponentFixture<HerbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
