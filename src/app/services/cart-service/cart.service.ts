import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/auth-service/api.service';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private auth: ApiService, private productService: ProductService) { 
  }

  cartLength = new BehaviorSubject(this.getCartDetails().then(res => res.length))
  currentCartLength = this.cartLength.asObservable()

  updateCartLength(value:any) {
    // console.log(value);
    this.cartLength.next(value)
  }

  addToCart(productId: string) {
    fetch(`http://localhost:3300/cart/add/${productId}`, {
      method: "post",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: this.auth.token
      })
    }).then((response) => response.json())
      .then((data) => {
        this.fetchCartItems()
      })
  }

  async fetchCartItems() {
    return await fetch(`http://localhost:3300/cart`, {
      method: "post",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: this.auth.token
      })
    }).then(res => res.json())
      .then(data => {
        
        
        this.updateCartLength(data.cart.length)
        return data.cart
      }) 
  }

  async fetchPurchasedItems() {
    return await fetch(`http://localhost:3300/cart/my-orders`, {
      method: "post",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: this.auth.token
      })
    }).then(res => res.json())
      .then(data => {
        return data.cart
      }) 
  }

  async getCartDetails() {
    let products = await this.fetchCartItems()

    let cartDetails = []
    for (let product of products) {
      cartDetails.push({
        product: await this.productService.fetchProduct(product.productId),
        quantity: product.quantity
      })
    }

    this.updateCartLength(cartDetails.length)
    return  {
      cartDetails,
      length: cartDetails.length
    };
  }

  async placeOrder() {
    return await fetch(`http://localhost:3300/cart/place-order`, {
      method: "post",
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: this.auth.token
      })
    }).then(res => res.json())
      .then(data => {
        this.fetchCartItems()
        return data
      }) 
  }

  async myOrders() {
    let products = await this.fetchPurchasedItems()
    // console.log("Products: ", products)

    let orderDetails = []
    for (let product of products) {
      orderDetails.push({
        product: await this.productService.fetchProduct(product.productId),
        quantity: product.quantity
      })
    }

    return  {
      orderDetails,
      length: orderDetails.length
    };
  }

}
