import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../auth-service/api.service';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount:number = 0;
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  phone: string = ''
  account: string = ''
  cvv: string = ''
  address: any = {}
  cart:any;
  cartLength: any;

  constructor(private auth: ApiService, private router: Router, private cartApi: CartService) { 
    this.cartApi.cartLength.subscribe(async (cartLength) => {
      this.cartLength = await cartLength
      // console.log("CL", cartLength);
    })

    if (!this.auth.isLoggedIn || this.cartLength === 0) {
      router.navigateByUrl("/")
    }

    this.getUserDetails()
    this.cartApi.getCartDetails().then((cartDetails) => {
      this.cart = cartDetails.cartDetails
      this.amount = this.orderTotal()
      // console.log(this.cart);
    })
  }

  ngOnInit(): void {
  }

  placeOrder() {
    this.cartApi.placeOrder()
  }

  orderTotal() {
    // console.log(this.cart)
    let total: number = 0;
    this.cart.map((item: any) => {
      // console.log("Item: ", item)
      total += (item.product.price * item.quantity);
    })

    return total
  }

  async getUserDetails() {
    if (this.auth.isLoggedIn) {
      await fetch("http://localhost:3300/user", {
        method: "post",
        headers: {
          'content-Type': "application/json"
        },
        body: JSON.stringify({
          token: this.auth.token
        })
      })
        .then((response => response.json()))
        .then(data => {
          let fullname = data.result.fullname
          this.firstName = fullname.split(" ")[0] || ""
          this.lastName = fullname.split(" ")[1] || ""
          this.email = data.result.email
          this.phone = data.result.phone
        })
    }
  }

}
