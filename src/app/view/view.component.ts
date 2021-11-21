import { Location } from '@angular/common';
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
  rating:number[] = []

  constructor(
    private cart: CartService,
    private productService: ProductService,
    private router: ActivatedRoute,
    private route: Router,
    private location: Location) {
      this.fetchProduct(this.productId)
      
      for (let i=0; i<5; i++) {
        if (Math.random() > 0.35) {
          this.rating.push(0)
        } else {
          this.rating.push(1)
        }
      }

      this.rating = this.rating.sort()
  }

  ngOnInit(): void {
  }

  backToPreviousPage() {
    this.location.back()
  }

  addToCart(productID: string) {
    this.cart.addToCart(productID);
    // alert("Product has been added to Cart")
    // this.route.navigateByUrl("/cart")
  }

  product: any = {
    name: '',
    description: '',

  };
  async fetchProduct(productId: string) {
    this.product = await this.productService.fetchProduct(productId)
    return await this.product
  }

}
