import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import { LoginComponent } from '../user/login/login.component';
import {RouterModule} from "@angular/router";
import {UserService} from "../user/user.service";
import { FooterComponent } from './footer/footer.component';
import {LocalStorage} from "./injection-token";
import {AuthGuard} from "./guards/auth.guard";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    { provide:
      LocalStorage,
      useValue: window.localStorage
    },
    UserService,
    AuthGuard
  ]
})
export class CoreModule {

}
