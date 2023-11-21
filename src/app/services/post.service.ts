import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable,} from "rxjs";
import {IPost} from "../models/IPost";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //baseUrl: string="https://roomrest.azurewebsites.net/api/posts";
  //baseUrl: string="https://rentstate.azurewebsites.net/api/posts";
  baseUrl: string="http://localhost:8080/api/posts";
  constructor(private _http:HttpClient,
              private _userService: UserService) {}

  getAllPosts():Observable<IPost>{
    return this._http.get<IPost>(this.baseUrl);
  }

  getPostsById(id:number){
    const url = `${this.baseUrl}/${id}`;

    return this._http.get<IPost>(url);
  }

  addPost(data:IPost){
    return this._http.post(this.baseUrl,data);
  }

  updatePost(post:IPost){
    return this._http.put(this.baseUrl,post);

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
