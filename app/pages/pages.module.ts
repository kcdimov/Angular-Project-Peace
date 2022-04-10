import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from "@angular/forms";
import {PageRoutingModule} from "./page-routing.module";
import { AccommodationsComponent } from './accommodations/accommodations.component';



@NgModule({
  declarations: [

    // AccommodationsComponent
  ],
  imports: [
    CommonModule,PageRoutingModule, FormsModule
  ]
})
export class PagesModule { }
