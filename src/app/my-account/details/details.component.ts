import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth-service/api.service';
import { hostedAPI } from 'src/app/global.variables';

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
  female: boolean = this.gender == "female"
  email: string = ''
  phone: string = ''
  editMode: boolean = true;

  toggleEdit() {
    if (this.editMode) {
      this.editMode = false
    } else {
      this.editMode = true
    }
  }

  async getUserDetails() {
    if (this.auth.isLoggedIn) {
      await fetch(`${hostedAPI}/user`, {
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
    }
  }

  async updateUserInfo() {
    if (this.auth.isLoggedIn) {
      await fetch(`${hostedAPI}/user/update`, {
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

}
