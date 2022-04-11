import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from "@angular/forms";
import {PageRoutingModule} from "./page-routing.module";
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { AddAccommodationComponent } from './add-accommodation/add-accommodation.component';



@NgModule({
  declarations: [

    // AccommodationsComponent

    AddAccommodationComponent
  ],
  imports: [
    CommonModule,PageRoutingModule, FormsModule
  ]
})
export class PagesModule { }
