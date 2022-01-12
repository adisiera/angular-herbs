import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbPreviewComponent } from './herb-preview.component';

describe('HerbPreviewComponent', () => {
  let component: HerbPreviewComponent;
  let fixture: ComponentFixture<HerbPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
