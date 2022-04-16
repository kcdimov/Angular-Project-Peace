import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {IPost} from "../shared/interfaces/IPost";
import {IJob} from "../shared/interfaces/IJob";

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

  loadMyAccommodations(email: string | undefined) {
    return this.http.get(`http://localhost:8080/user/getMyPosts/${email}`)
  }

  addAccommodation(postData: {postName: string, description: string, imageUrl: string}) {
    return this.http.post(`http://localhost:8080/posts/addPost`, JSON.stringify(postData));
  }

  loadAllJobs() {
    return this.http.get<IJob[]>(`http://localhost:8080/jobs/all`)
  }

  loadMyJobs(email: string | undefined) {
    return this.http.get(`http://localhost:8080/user/getMyJobs/${email}`)
  }

  addJob(jobData: {category: string, position: string, description: string}) {
    return this.http.post(`http://localhost:8080/jobs/addJob`, JSON.stringify(jobData))
  }
}
