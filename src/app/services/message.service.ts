import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Message} from "../models/Message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _http:HttpClient,) { }


  getAllMessages():Observable<Post>{
    return this._http.get<Post>('http://localhost:3000/messages');
  }

  getMessageById(id:number){
    return this._http.get<Post>(`http://localhost:3000/messages/${id}`)
  }

  getMessagesByDestinationId(idDestination: number): Observable<Message[]> {
    const params = new HttpParams().set('idDestination', idDestination.toString());
    return this._http.get<Message[]>('http://localhost:3000/messages', { params });
  }

}
