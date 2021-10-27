import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { ViewAllPageComponent } from './view-all-page/view-all-page.component';
import { ViewComponent } from './view/view.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyordersComponent } from './myorders/myorders.component';

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
  },
  {
    component: ViewAllPageComponent,
    path: "category/:cat_name"
  },
  {
    component: ViewComponent,
    path: "view"
  },
  {
    path: "me",
    redirectTo: "me/details",
  },
  {
    path: "me",
    component: MyAccountComponent,
    children: [
      {
        path: "details",
        component: MyordersComponent,
      },
      {
        path: "orders",
        component: MyordersComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
