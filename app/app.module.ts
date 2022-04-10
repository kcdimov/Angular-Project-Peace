import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {UserModule} from "./user/user.module";
import {UserRoutingModule} from "./user/user-routing.module";
import {PagesModule} from "./pages/pages.module";
import {InfoComponent} from "./pages/info/info.component";
import { NotFoundComponent } from './not-found/not-found.component';
import {AccommodationsComponent} from "./pages/accommodations/accommodations.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    AccommodationsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // CoreModule.forRoot(),
    CoreModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    PagesModule,
   // RouterModule,
    AppRoutingModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
  ]
})
export class AppModule { }
