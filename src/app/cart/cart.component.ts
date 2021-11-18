import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../auth-service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth: ApiService) { }

  ngOnInit(): void {
    this.getCartItems()
  }

  isLoggedIn = this.auth.isLoggedIn

  async getCartItems() {
    await fetch("http://localhost:3300/cart", {
      method: "post",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify({
        token: this.auth.token,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
  }

  cart = [
    {
      id: 1,
      name: "Product 1",
      price: 500,
      quantity: 3
    },

    {
      id: 2,
      name: "Product 2",
      price: 700,
      quantity: 4
    },
    {
      id: 3,
      name: "Product 3",
      price: 199,
      quantity: 1
    },
    {
      id: 4,
      name: "Product 4",
      price: 599,
      quantity: 1
    },
  ]

  decreaseItemCount(item: any) {
    if (item.quantity <= 1) {
      alert("Item quantity cannot be less than 1")
    } else {
      item.quantity--;
    }
  }

  increaseItemCount(item: any) {
    if (item.quantity >= 20) {
      alert("Item quantity cannot be greater than 20")
    } else {
      item.quantity++;
    }
  }

  removeFromCart(item: any) {
    this.cart.forEach((product: any) => {
      if (product.id == item.id) {
        this.cart.splice(this.cart.indexOf(item), 1);
      }
    });
  }

  orderTotal() {
    let total: number = 0;
    this.cart.map((item) => {
      total += (item.price * item.quantity);
    })

    return total;
  }

  placeOrder() {
    alert("Your order has been placed successfully!")
  }

}
