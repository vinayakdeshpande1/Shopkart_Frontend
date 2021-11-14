import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }
  ngOnInit(): void {
  }

  fullname: string = ''
  email: string = ''
  phone: string = ''
  password: string = ''
  confirmPassword: string = ''

  register() {
    if (this.password === this.confirmPassword) {
      fetch("http://localhost:3300/register", {
        method: "post",
        headers: {
          'content-Type': "application/json"
        },
        body: JSON.stringify({
          fullname: this.fullname,
          phone: this.phone,
          email: this.email,
          password: this.password,
        })
      })
        .then((response => response.json()))
        .then(async (data) => {
          await fetch("http://localhost:3300/login", {
            method: "post",
            headers: {
              'content-Type': "application/json"
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            })
          })
            .then((respone) => respone.json())
            .then(((data) => {
              localStorage.setItem("token", data["token"])
              localStorage.setItem("user", data["fullname"])
              this.api.updateUser(data["fullname"])
              this.router.navigate(["/"])
            }))
        })
    } else {
      alert("Make sure Password and Confirm Password Fields match!")
    }
  }

}
