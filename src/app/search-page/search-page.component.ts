import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../auth-service/api.service';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private router: ActivatedRoute, private auth: ApiService, private cartApi: CartService) {
    router.params.subscribe(val => {
      this.searchTerm = this.router.snapshot.paramMap.get("searchTerm")
      this.searchProduct(this.searchTerm)
      this.time = Math.random().toFixed(2)
    })
  }

  @Input() searchTerm: any = ''
  products: any;
  numberOfProducts: Number = 0
  time: String = '0'
  isLoggedIn = this.auth.isLoggedIn

  ngOnInit(): void {
  }

  searchProduct(searchTerm: any) {
    fetch(`http://localhost:3300/search/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)

        this.products = data.result
        this.numberOfProducts = data.length
      })
  }

  askToLogin() {
    alert("Please login to continue")
  }

  addToCart(productId: string) {
    this.cartApi.addToCart(productId)
    alert("Product added to Cart")
  }

}
