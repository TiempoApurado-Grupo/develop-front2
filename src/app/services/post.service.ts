import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) {

  }
  getAllPosts():Observable<Post>{
    return this._http.get<Post>('http://localhost:3000/posts');
  }

  getPostsById(id:number){
    return this._http.get<Post>(`http://localhost:3000/posts/${id}`)
  }
}