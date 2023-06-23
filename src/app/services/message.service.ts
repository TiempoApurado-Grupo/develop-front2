import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMessage} from "../models/IMessage";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl: string="https://renstate.azurewebsites.net/api/messages"

  constructor(private _http:HttpClient,) { }


  getAllMessages():Observable<IPost>{
    return this._http.get<IPost>(this.baseUrl);
  }

  getMessageById(id:number){
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<IPost>(url)
  }

  addMessage(data:IMessage){
    return this._http.post(this.baseUrl,data);
  }

  getMessageByRecipientId(idDestination: number){
    return this._http.get(this.baseUrl+`/recipient/${idDestination}`)

  }

}
