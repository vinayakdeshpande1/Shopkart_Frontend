import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart-service/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-all-page',
  templateUrl: './view-all-page.component.html',
  styleUrls: ['./view-all-page.component.css']
})
export class ViewAllPageComponent implements OnInit {

  constructor(private productApi: ProductService, private route: ActivatedRoute, private cartApi: CartService, private location: Location) { 
    this.getProducts()
  }

  ngOnInit(): void {
  }

  category_name:string = this.route.snapshot.paramMap.get('category') || 'all'
  products:any[] = []
  randomTime:string = Math.random().toFixed(2)

  backToPreviousPage() {
    this.location.back()
  }

  async getProducts() {
    this.products = await this.productApi.fetchProductsByCategory(this.category_name)
    this.randomTime = Math.random().toFixed(2)
    // console.log(this.products);
  }

  async addToCart(productId:string) {
    this.cartApi.addToCart(productId)
    alert("Product Added to Cart")
  }

}
