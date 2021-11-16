import { Component, OnInit } from '@angular/core';
import { ApiService } from '../auth-service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private api: ApiService) { }

  user:string = ""

  ngOnInit(): void {
    this.api.currentUser.subscribe(user => this.user = user)
  }

  logout() {
    this.api.logout()
  }

}
