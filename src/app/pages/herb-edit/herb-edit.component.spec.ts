import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbEditComponent } from './herb-edit.component';

describe('HerbEditComponent', () => {
  let component: HerbEditComponent;
  let fixture: ComponentFixture<HerbEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
