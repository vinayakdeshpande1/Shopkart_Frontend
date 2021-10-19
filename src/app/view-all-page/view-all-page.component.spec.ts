import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPageComponent } from './view-all-page.component';

describe('ViewAllPageComponent', () => {
  let component: ViewAllPageComponent;
  let fixture: ComponentFixture<ViewAllPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
