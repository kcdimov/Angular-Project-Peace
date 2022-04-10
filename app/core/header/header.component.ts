import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  get isAdmin(): boolean {
    return this.userService.isAdmin;
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get email(): string {
    return this.userService.user?.email || '';
  }

  logout(): void {
    this.userService.logout().subscribe( ()=> {
      this.router.navigate(['/home']);
    })
  }
}
