import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/User";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http:HttpClient,
              private _userService:UserService) { }


  getAllPosts():Observable<Post>{
    return this._http.get<Post>('http://localhost:3000/messages');
  }

  getPostsById(id:number){
    return this._http.get<Post>(`http://localhost:3000/messages/${id}`)
  }

  getUserAutor(id: number): Observable<User> {
    return this._userService.getUserById(id);
  }
  getUserDestination(id:number): Observable<User>{
    return this._userService.getUserById(id);
  }

}
