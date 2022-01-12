import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbAppComponent } from './herb-app.component';

describe('HerbAppComponent', () => {
  let component: HerbAppComponent;
  let fixture: ComponentFixture<HerbAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
