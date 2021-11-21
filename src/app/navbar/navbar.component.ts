import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../auth-service/api.service';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private cartApi: CartService) { 
    this.cartApi.currentCartLength.subscribe((cartLength) => this.thisCartLength = cartLength)
  }

  user: string = ""
  searchTerm = ""
  thisCartLength:any = 0
  

  ngOnInit(): void {
    this.api.currentUser.subscribe(user => this.user = user)
    this.cartApi.currentCartLength.subscribe((cartLength) => this.thisCartLength = cartLength)
  }

  logout() {
    this.api.logout()
  }

  redirectToSearch() {
    this.router.navigateByUrl(`/search/${this.searchTerm}`)
  }

}
