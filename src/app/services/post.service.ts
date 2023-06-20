import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";
import {IPost} from "../models/IPost";
import {UserService} from "./user.service";

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

  getAllPosts():Observable<IPost>{
    return this._http.get<IPost>('http://localhost:3000/posts');
  }

  getPostsById(id:number){
    return this._http.get<IPost>(`http://localhost:3000/posts/${id}`)
  }

  searchPosts(filterItem: string): Observable<IPost[]> {
    const params = new HttpParams().set('q', filterItem);
    return this._http.get<IPost[]>(`http://localhost:3000/posts?search=${filterItem}`, { params });
  }

  createItem(item: any): Observable<IPost>{
    return this._http.post<IPost>('http://localhost:3000/posts', JSON.stringify(item), this.httpOptions)
  }

  getItem(id: number): Observable<IPost>{
    return this._http.get<IPost>(`http://localhost:3000/posts/${id}`)
  }
  updateItem(id: number, item: any): Observable<IPost>{
    return this._http.put<IPost>(`http://localhost:3000/posts/${id}`, JSON.stringify(item), this.httpOptions)
  }
  deleteItem(id: number): Observable<IPost>{
    return this._http.delete<IPost>(`http://localhost:3000/posts/${id}`, this.httpOptions)
  }

}
