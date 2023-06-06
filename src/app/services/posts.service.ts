import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Lessor} from "../model/lessor";
import {Profile} from "../model/profile";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseURL = "http://localhost:3000";
  lessorURL=`${this.baseURL}/lessors`;
  profileURL=`${this.baseURL}/profiles`;

  constructor(private http:HttpClient) { }

  getAllLessors(): Observable<Lessor[]> {
    return this.http.get<Lessor[]>(this.lessorURL);
  }
  getAllProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.profileURL);
  }

  getItemById(lessorId: number, postId: number): Observable<Lessor['posts'][0] | undefined> {
    return this.http.get<Lessor>(`${this.lessorURL}/${lessorId}`).pipe(
      map((lessor: Lessor) => {
        return lessor.posts.find(p=>p.id=== postId);
      })
    );
  }
}
