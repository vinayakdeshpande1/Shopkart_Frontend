import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user = new BehaviorSubject(localStorage.getItem("user") || "")
  currentUser = this.user.asObservable()

  constructor() { }

  updateUser(fullname:string) {
    this.user.next(fullname)
  }

  logout() {
    this.updateUser("")
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }
  
}
