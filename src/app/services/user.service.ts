import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {

  }
  getAllUsers():Observable<User>{
    return this._http.get<User>('http://localhost:3000/users');
  }

  getUserById(id:number){
    return this._http.get<User>(`http://localhost:3000/users/${id}`)
  }
}
