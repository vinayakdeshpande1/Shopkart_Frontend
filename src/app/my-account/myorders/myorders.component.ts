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
  }

  orders:any;

  async getMyOrders() {
    this.orders = (await this.cartApi.myOrders()).orderDetails
    console.log(this.orders);
  }

}
