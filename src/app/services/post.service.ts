import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import {IPost} from "../models/IPost";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string="https://roomrest.azurewebsites.net/api/posts";
  //baseUrl: string="https://rentstate.azurewebsites.net/api/posts";
  //baseUrl: string=" http://localhost:8080/api/posts";
  constructor(private _http:HttpClient,
              private _userService: UserService) {}

  getAllPosts():Observable<IPost>{
    return this._http.get<IPost>(this.baseUrl);
  }

  getPostsById(id:number){
    const url = `${this.baseUrl}/${id}`;

    return this._http.get<IPost>(url);
  }

  searchPosts(filterItem: string): Observable<IPost[]> {
    const params = new HttpParams().set('q', filterItem);
    return this._http.get<IPost[]>(this.baseUrl+`?search=${filterItem}`, { params });
  }

  addPost(data:IPost){
    return this._http.post(this.baseUrl,data);
  }

  updatePost(id:number, post:IPost){
    const url = `${this.baseUrl}/${id}`;
    return this._http.put(url,post);

  }
  deletePostById(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this._http.delete<IPost>(url)
  }

  getPostsByAuthorId(id:number){
    const url = `${this.baseUrl}/author/${id}`;
    return this._http.get(url);
  }


  getListClientsByAuthorId(id:number){
    const url = `${this.baseUrl}/authorclients/${id}`;
    return this._http.get(url);
  }
}
