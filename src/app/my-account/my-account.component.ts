import { Component, OnInit } from '@angular/core';
import { ApiService } from '../auth-service/api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  logout() {
    this.api.logout()
  }

}
