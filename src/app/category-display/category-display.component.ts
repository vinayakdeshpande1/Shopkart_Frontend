import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {

  @Input() category_name: String = '';
  constructor() { }

  ngOnInit(): void {
  }

  product = [1, 2, 3, 4, 5, 1, 1, 1, 1];
}
