import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../auth-service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api:ApiService) { }

  email:string=""
  password:string=""

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(4))
  })

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/"])
    }
  }

  async login($event:any) {
    // console.log(this.loginForm.value);
    // console.log(this.email, this.password);
    
    
    
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

    // this.router.navigate(["/"])
  }

}
