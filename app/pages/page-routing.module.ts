import { NgModule } from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./info/info.component";
import {AccommodationsComponent} from "./accommodations/accommodations.component";
import {AddAccommodationComponent} from "./add-accommodation/add-accommodation.component";
import {AuthGuard} from "../core/guards/auth.guard";
import {JobsComponent} from "./jobs/jobs.component";
import {AddJobComponent} from "./add-job/add-job.component";

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'accommodation',
    // component: AccommodationsComponent,
    children: [
      { path: '',
        component: AccommodationsComponent
      },
      {
        path: ':accommodationId',
        component: AccommodationsComponent
      }
      ]
  },
  {
    path: 'addAccommodation',
    component: AddAccommodationComponent,
    // canActivate: [AuthGuard],
    // data: {
    //   isAdmin: true,
    //   authenticationFailureRedirectUrl: '/'
    // }
  },
  {
    path: 'jobs',
    // component: JobsComponent
    children: [
      {
        path: '',
        component: JobsComponent
      },
      {
        path: ':jobId',
        component: JobsComponent
      }
    ]

  },
  {
    path: 'addJob',
    component: AddJobComponent,
    canActivate: [AuthGuard],
    data: {
      isAdmin: true,
      authenticationFailureRedirectUrl: '/'
    }
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PageRoutingModule { }
