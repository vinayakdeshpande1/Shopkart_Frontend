import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDisplayComponent } from './category-display.component';

describe('CategoryDisplayComponent', () => {
  let component: CategoryDisplayComponent;
  let fixture: ComponentFixture<CategoryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
