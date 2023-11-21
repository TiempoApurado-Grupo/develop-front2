import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MediaService {
  //baseUrl: string="https://roomrest.azurewebsites.net/api/messages"
  //baseUrl: string="https://rentstate.azurewebsites.net/api/messages"
  baseUrl: string="http://localhost:8080/api/media"

    constructor(private _http:HttpClient){

    }

    addImagesToPost(id:number, formData:FormData){
        return this._http.post(`${this.baseUrl}/post/${id}/upload`,formData);
    }
}
