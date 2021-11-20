import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productApi: ProductService) {

  }
  // @Output() product: any;
  ngOnInit(): void {
  }

  displayCategories = ['electronics', 'clothing', 'food']
  // categories:any = []
  // async displayProducts() {
  //   this.displayCategories.map(async (category) => {
  //     let temp:any = {}
  //     temp[category] = await this.getProductsByCategory(category)
  //     this.categories.push(temp)
  //   })

  //   console.log("Display: ", this.categories)
  // }

  // async getProductsByCategory(category:string) {
  //   category = category.toLowerCase()
  //   let products = await this.productApi.fetchProductsByCategory(category)
  //   return products
  // }

}
