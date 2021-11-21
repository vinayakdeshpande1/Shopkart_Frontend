import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private cartApi: CartService) {
    this.getMyOrders()
   }

  ngOnInit(): void {
    this.getMyOrders()
  }

  orders:any;
  ordersLength:Number=1;

  async getMyOrders() {
    this.orders = (await this.cartApi.myOrders()).orderDetails
    this.ordersLength = this.orders.length
    // console.log(this.orders);
    // console.log(this.orders.length);
  }

}
