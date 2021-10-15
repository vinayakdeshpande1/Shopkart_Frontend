import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterNavbarComponent } from './category-filter-navbar.component';

describe('CategoryFilterNavbarComponent', () => {
  let component: CategoryFilterNavbarComponent;
  let fixture: ComponentFixture<CategoryFilterNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFilterNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFilterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
