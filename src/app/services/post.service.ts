import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, switchMap} from "rxjs";
import {Post} from "../models/Post";
import {UserService} from "./user.service";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient,
              private _userService: UserService) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
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

  createItem(item: any): Observable<Post>{
    return this._http.post<Post>('http://localhost:3000/posts', JSON.stringify(item), this.httpOptions)
  }

  getItem(id: number): Observable<Post>{
    return this._http.get<Post>(`http://localhost:3000/posts/${id}`)
  }
  updateItem(id: number, item: any): Observable<Post>{
    return this._http.put<Post>(`http://localhost:3000/posts/${id}`, JSON.stringify(item), this.httpOptions)
  }
  deleteItem(id: number): Observable<Post>{
    return this._http.delete<Post>(`http://localhost:3000/posts/${id}`, this.httpOptions)
  }

}
