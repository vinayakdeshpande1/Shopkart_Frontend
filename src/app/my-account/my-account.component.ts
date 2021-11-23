import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../auth-service/api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user: string = ''
  constructor(private api: ApiService, private router: Router) {
    if (!this.api.isLoggedIn) {
      this.router.navigateByUrl("/")
    }
    this.api.currentUser.subscribe(user => this.user = user)
  }

  ngOnInit(): void {
  }

  logout() {
    this.api.logout()
  }

}
