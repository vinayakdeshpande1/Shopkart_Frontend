import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {

  @Input() category_name: string = '';
  @Input() category_img: string = '';
  @Input() product_name: string = '';
  @Input() category:any;

  constructor(private productApi: ProductService) { 
    this.displayProducts()
    console.log(this.categories);
  }

  ngOnInit(): void {
    // console.log(this.category_name);
    
    // this.getProductsByCategory(this.category_name)
    
    
  }

  product = [1, 2, 3, 4, 5, 1, 1, 1, 1];
  displayCategories = ['electronics', 'clothing', 'Top-Offers']
  categories:any = {
    'electronics': [],
    'clothing': [],
    'Top-Offers': []
  }

  async displayProducts() {
    this.displayCategories.map(async (category) => {
      this.categories[category].push(await this.getProductsByCategory(category))
      // console.log(category , ": ", this.categories[category]);
    })
  }

  async getProductsByCategory(category:string) {
    category = category.toLowerCase()
    let products = await this.productApi.fetchProductsByCategory(category)
    // console.log(await products)
    return products
  }
}
