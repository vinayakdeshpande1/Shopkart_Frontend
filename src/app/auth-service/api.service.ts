import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user = new BehaviorSubject(localStorage.getItem("user") || "")
  currentUser = this.user.asObservable()
  isLoggedIn = false

  constructor() { }

  updateUser(fullname: string) {
    this.user.next(fullname)
    this.isLoggedIn = true
  }

  logout() {
    this.updateUser("")
    this.isLoggedIn = false
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

}
