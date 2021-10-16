import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    component:SignupComponent,
    path:"signup"
  },
  {
    component:LoginComponent,
    path:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
