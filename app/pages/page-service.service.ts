import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {IPost} from "../shared/interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {

  constructor(private http: HttpClient, private userService: UserService) { }

  loadAllAccommodationPosts() {
    return this.http.get<IPost[]>(`http://localhost:8080/posts/all`);
  }

  loadAccommodationById(id: number) {
   return this.http.get<IPost>(`http://localhost:8080/posts/${id}`);
  }

  loadMyAccommodations(email: string) {
    return this.http.get(`http://localhost:8080/user/getMyPosts/${email}`)
  }

  addAccommodation(postData: {postName: string, description: string, imageUrl: string}) {
    return this.http.post(`http://localhost:8080/posts/addPost`, JSON.stringify(postData));
  }
}
