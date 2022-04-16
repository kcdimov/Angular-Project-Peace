import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {UserModule} from "./user/user.module";
import {UserRoutingModule} from "./user/user-routing.module";
import {PagesModule} from "./pages/pages.module";
import {InfoComponent} from "./pages/info/info.component";
import { NotFoundComponent } from './not-found/not-found.component';
import {AccommodationsComponent} from "./pages/accommodations/accommodations.component";
import {JobsComponent} from "./pages/jobs/jobs.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    AccommodationsComponent,
    JobsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    FormsModule,
    PagesModule,
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
