import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/auth-service/api.service';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private auth: ApiService, private productService: ProductService) { }

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
        // console.log(data)
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
      .then(data => data) 
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
