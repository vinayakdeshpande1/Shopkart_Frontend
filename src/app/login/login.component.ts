import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api:ApiService) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/"])
    }
  }

  async login() {
    await fetch("http://localhost:3300/login", {
      method: "post",
      headers: {
        'content-Type': "application/json"
      },
      body: JSON.stringify({
        "email": "vin@vin.com",
        "password": "1234",
      })
    })
      .then((respone) => respone.json())
      .then(((data) => {
          localStorage.setItem("token", data["token"])
          localStorage.setItem("user", data["fullname"])
          this.api.updateUser(data["fullname"])
          this.router.navigate(["/"])
      }))

    // this.router.navigate(["/"])
  }

}
