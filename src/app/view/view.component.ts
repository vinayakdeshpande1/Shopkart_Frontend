import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() productId: String = '';

  constructor(private cart: CartService, private productService: ProductService) {
    this.fetchProduct('6196245ed886239259995b10')
    }

  ngOnInit(): void {
  }

  addToCart(productID:string) {    
    this.cart.addToCart(productID);
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
