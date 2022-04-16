import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IPost} from "../../shared/interfaces/IPost";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../shared/interfaces/IUser";
import {PageServiceService} from "../../pages/page-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts: IPost[] | any;

  constructor(private userService: UserService, private httpClient: HttpClient,
              private postService: PageServiceService) {
      this.getPostsByUser();
  }

  get user(): IUser {
    return this.userService.user!;
  }
  ngOnInit(): void {
  }

  getPostsByUser() {
    this.postService.loadMyAccommodations(this.userService.user?.email).subscribe((posts) => (this.posts = posts));
  }
  havePosts(): boolean {
    if (this.posts != undefined) {
      if (this.posts.length == 0) {
        return false;
      }
    }
    return true;
  }

}
