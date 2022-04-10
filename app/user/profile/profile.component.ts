import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IPost} from "../../shared/interfaces/IPost";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../shared/interfaces/IUser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posts: IPost | undefined;

  constructor(private userService: UserService, private httpClient: HttpClient,) { }

  get user(): IUser {
    return this.userService.user!;
  }
  ngOnInit(): void {
  }

}
