import {Inject, Injectable} from '@angular/core';
import {IUser} from "../shared/interfaces/IUser";
import {HttpClient} from "@angular/common/http";
//import { map, tap } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {LocalStorage} from "../core/injection-token";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: IUser | null | undefined = undefined;

  getIsLogged() {
    return !!this.user;
  }
  constructor(private httpClient: HttpClient,
  @Inject(LocalStorage) private localStorage: Window['localStorage']
  ) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
  }

  get isAdmin():boolean{
    return this.user?.userRole == "admin";
  }
  get isLogged(): boolean {
    return !!this.user;
  }

  // login$ (userData: {email: string, password: string}): Observable<IUser> {
  //   return this.httpClient
  //     .post<IUser>(
  //       //`http://localhost:8080/users/login`,
  //       `/login`,
  //       JSON.stringify(userData)
  //     ).pipe(tap((user) => this.user = user,));
  //   // const {apiUrl} = environment;
  //   // return this.httpClient
  //   //   .post<IUser>(`${apiUrl}/login`, userData, { withCredentials: true, observe: "response"})
  //   //   .pipe(
  //   //     tap(response => console.log(response)),
  //   //     map( (response: { body: any; }) => response.body),
  //   //     tap(user => this.currentUser = user)
  //   //     // tap((response: any) => console.log(response)),
  //   //     // map((response: { body: any; }) => response.body),
  //   //     // tap((user: IUser | undefined) => this.currentUser = user)
  //   //   )
  // }

  login(userData: { email: string; password: string }) {
    return this.httpClient
      .post<IUser>(
         `http://localhost:8080/users/login`,
        // `http://localhost:4200/login`,
        JSON.stringify(userData)
      ).pipe(tap((user) => this.user = user,));
  }

  logout() {
    this.localStorage.removeItem('<USER>')
    return this.httpClient.post<IUser>(`http://localhost:8080/users/logout`, {}).pipe(
      tap(() => this.user = null)
    );
  }



  register(data: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    //phone: number
  }) {
    return this.httpClient.post<IUser>(`http://localhost:8080/users/register`, JSON.stringify(data));
  }

  getProfileInfo() {
    return this.httpClient.get<IUser>(`http://localhost:8080/users/profile`).pipe(
      tap((user) => this.user = user)
    )
  }

  editProfile(userData: { firstName: string, lastName:string , image:File,  oldPassword:string, newPassword:string, confirmPassword:string}) {
    return this.httpClient
      .post<IUser>(
        `http://localhost:8080/users/editProfile`,
        JSON.stringify(userData)
      ).pipe(tap((user) => this.user = user,));
  }
}
