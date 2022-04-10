import { Component, OnInit } from '@angular/core';
import {IPost} from "../../shared/interfaces/IPost";
import {PageServiceService} from "../page-service.service";

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit {

  posts: IPost[] | undefined;
  show = false;

  constructor(private pageService: PageServiceService ) {
    this.fetchAccommodations();
  }

  ngOnInit(): void {
  }

  fetchAccommodations() {
    this.pageService.loadAllAccommodationPosts()
      .subscribe((accommodation)=> (this.posts = accommodation));
  }

}
