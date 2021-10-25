import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-page',
  templateUrl: './view-all-page.component.html',
  styleUrls: ['./view-all-page.component.css']
})
export class ViewAllPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alertAddedToCart(){
    alert("Product added to Cart")
  }

  product = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

}
