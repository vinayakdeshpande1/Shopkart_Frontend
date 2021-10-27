import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orders = [1, 1, 2, 3, 4]

}
