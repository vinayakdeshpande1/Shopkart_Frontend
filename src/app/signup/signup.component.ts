import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp = new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  constructor(private router:Router) { 

  }
  ngOnInit(): void {
  }
  collectInfo()
  {
    console.warn(this.signUp.value)
  }

  register() {
    alert("Registration Successfull!!")
    this.router.navigate(["/login"]);
  }

}
