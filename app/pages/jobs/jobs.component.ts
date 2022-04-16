import { Component, OnInit } from '@angular/core';
import {IJob} from "../../shared/interfaces/IJob";
import {PageServiceService} from "../page-service.service";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: IJob[] | undefined;

  constructor(private pageService: PageServiceService) {
    this.fetchJobs()
  }

  ngOnInit(): void {
  }

  fetchJobs() {
    return this.pageService.loadAllJobs()
      .subscribe((jobs) => (this.jobs = jobs))
  }
}
