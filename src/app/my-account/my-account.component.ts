import { Component, OnInit } from '@angular/core';
import { ApiService } from '../auth-service/api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user: string = ''
  constructor(private api: ApiService) {
    this.api.currentUser.subscribe(user => this.user = user)
  }

  ngOnInit(): void {
  }

  logout() {
    this.api.logout()
  }

}
