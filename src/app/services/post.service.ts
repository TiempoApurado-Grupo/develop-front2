import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {Post} from "../models/Post";
import {UserService} from "./user.service";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient,
              private _userService: UserService) {

  }
  getAllPosts():Observable<Post>{
    return this._http.get<Post>('http://localhost:3000/posts');
  }

  getPostsById(id:number){
    return this._http.get<Post>(`http://localhost:3000/posts/${id}`)
  }

  searchPosts(filterItem: string): Observable<Post[]> {
    const params = new HttpParams().set('q', filterItem);
    return this._http.get<Post[]>(`http://localhost:3000/posts?search=${filterItem}`, { params });
  }

  getUserAutor(id: number): Observable<User> {
    return this._userService.getUserById(id);
  }

}
