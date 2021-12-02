import { Component, OnInit } from '@angular/core';
import { ApiService } from '../auth-service/api.service';
import { CartService } from '../services/cart-service/cart.service';
import { hostedAPI } from '../global.variables';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth: ApiService, private cartApi: CartService) {
    this.getCartDetails()
  }

  cart: any;
  cartLength: Number = 0
  async ngOnInit(): Promise<void> {
  }

  isLoggedIn = this.auth.isLoggedIn

  async getCartDetails() {
    this.cart = (await this.cartApi.getCartDetails()).cartDetails
    this.cartLength = this.cart.length

    // console.log(this.cart);
    
  }

  decreaseItemCount(item: any) {
    if (item.quantity > 1) {
      fetch(`${hostedAPI}/cart/increase/-1/${item.product._id}`, {
        method: "post",
        headers: {
          'content-Type': "application/json"
        },
        body: JSON.stringify({
          token: this.auth.token
        })
      }).then((res) => res.json())
        .then(data => {
          // console.log(data)
          item.quantity--
        })
    } else {
      this.removeFromCart(item.product._id)
    }
  }

  increaseItemCount(item: any) {
    fetch(`${hostedAPI}/cart/increase/1/${item.product._id}`, {
      method: "post",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify({
        token: this.auth.token
      })
    }).then((res) => res.json())
      .then(data => {
        // console.log(data)
        item.quantity++
      })
  }

  async removeFromCart(productId: any) {
    await fetch(`${hostedAPI}/cart/remove/${productId}`, {
      method: "post",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify({
        token: this.auth.token
      })
    }).then((res) => res.json())
      .then(() => {
        let cartLength = this.cart.length
        while (cartLength--) {
          if (this.cart[cartLength]["product"]["_id"] === productId) {
            this.cart.splice(cartLength, 1)
            this.cartLength = this.cart.length
            this.cartApi.updateCartLength(this.cartLength)
            break
          }
        }
      })
  }

  orderTotal() {
    // console.log(this.cart)
    let total: number = 0;
    let originalTotal: number = 0;
    this.cart.map((item: any) => {
      // console.log("Item: ", item)
      total += (item.product.price * item.quantity);
      originalTotal += (item.product.originalPrice * item.quantity);
    })

    return  {
      total,
      originalTotal
    }
  }

}
