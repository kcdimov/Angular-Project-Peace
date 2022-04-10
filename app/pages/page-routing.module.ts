import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./info/info.component";
import {AccommodationsComponent} from "./accommodations/accommodations.component";

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'accommodation',
    component: AccommodationsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PageRoutingModule { }
