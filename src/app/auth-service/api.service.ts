import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user = new BehaviorSubject(localStorage.getItem("user") || "")
  currentUser = this.user.asObservable()
  isLoggedIn:Boolean = localStorage.getItem("token")!==null || false
  token = localStorage.getItem("token") || null

  constructor() { }

  updateUser(fullname: string) {
    this.user.next(fullname)
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true
    }
  }

  logout() {
    this.updateUser("")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    if (!localStorage.getItem("token")) {
      this.isLoggedIn = false
    }
  }

}
