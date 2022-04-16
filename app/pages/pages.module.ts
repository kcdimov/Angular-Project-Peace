import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from "@angular/forms";
import {PageRoutingModule} from "./page-routing.module";

import { AddAccommodationComponent } from './add-accommodation/add-accommodation.component';

import { AddJobComponent } from './add-job/add-job.component';



@NgModule({
  declarations: [

    AddAccommodationComponent,
    AddJobComponent
  ],
  imports: [
    CommonModule,PageRoutingModule, FormsModule
  ]
})
export class PagesModule { }
