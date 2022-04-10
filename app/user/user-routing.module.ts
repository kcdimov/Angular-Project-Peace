import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   authenticationRequired: false,
    //   authenticationFailureRedirectUrl: '/',
    // }
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
]

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

//EK write
@NgModule({
  imports: [RouterModule.forChild(routes)],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//export const UserRoutingModule = RouterModule.forChild(routes);
export class UserRoutingModule {}
