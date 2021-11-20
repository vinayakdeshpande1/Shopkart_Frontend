import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart-service/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  productId: string = this.router.snapshot.paramMap.get("productId") || "";

  constructor(
    private cart: CartService, 
    private productService: ProductService, 
    private router: ActivatedRoute,
    private route: Router) {
    this.fetchProduct(this.productId)
    }

  ngOnInit(): void {
  }

  addToCart(productID:string) {    
    this.cart.addToCart(productID);
    alert("Product has been added to Cart")
    this.route.navigateByUrl("/cart")
  }

  product:any = {
    name: '',
    description: '',

  };
  async fetchProduct(productId: string) {
    this.product =  await this.productService.fetchProduct(productId)
    return await this.product
  }

}
