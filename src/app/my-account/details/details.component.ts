import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth-service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private auth: ApiService) {
    this.getUserDetails()    

  }

  ngOnInit(): void {
    this.getUserDetails()
  }

  fullname: string = ''
  firstName: string = this.fullname.split(" ")[0] || ""
  lastName: string = this.fullname.split(" ")[1] || ""
  gender: string = ''
  male: boolean = this.gender == "male"
  female: boolean =  this.gender == "female"
  email: string = ''
  phone: string = ''

  async getUserDetails() {
    if (this.auth.isLoggedIn) {
      await fetch("http://localhost:3300/user", {
        method: "post",
        headers: {
          'content-Type': "application/json"
        },
        body: JSON.stringify({
          token: this.auth.token
        })
      })
        .then((response => response.json()))
        .then(data => {
          this.fullname = data.result.fullname
          this.firstName = this.fullname.split(" ")[0] || ""
          this.lastName = this.fullname.split(" ")[1] || ""
          this.email = data.result.email
          this.phone = data.result.phone
          this.gender = data.result.gender
          this.male = this.gender == "male"
          this.female = this.gender == "female"
        })
    } else {
      alert("Something Went Wrong!")
    }
  }

  async updateUserInfo() {
    if (this.auth.isLoggedIn) {
      await fetch("http://localhost:3300/user/update", {
        method: "post",
        headers: {
          'content-Type': "application/json"
        },
        body: JSON.stringify({
          token: this.auth.token,
          fullname: this.firstName + " " + this.lastName,
          email: this.email,
          gender: this.gender,
          phone: this.phone
        })
      })
        .then((response => response.json()))
        .then(() => {
          this.getUserDetails()
          alert("Information saved succefully!")
        })
    } else {
      alert("Something Went Wrong!")
    }
  }


  // Show/Hide Toast
  // funWithToast() {
  //   let toastElList = [].slice.call(document.querySelectorAll('.toast'))
  //   let toastList = toastElList.map(function (toastEl) {
  //     return new bootstrap.Toast(toastEl, option)
  //   })
  // }

}
