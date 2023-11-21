import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../models/User";
import {Router} from "@angular/router";
import {LoginCredentials} from "../models/loginCredentials";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //baseUrl: string="https://roomrest.azurewebsites.net/api/users"
  //baseUrl: string="https://rentstate.azurewebsites.net/api/users"
  baseUrl: string="http://localhost:8080/api/users"
  users:User[]=[];
  user!: User;

  constructor(private _http:HttpClient,
              private _router:Router) {

  }
  getAllUsers():Observable<User>{
    return this._http.get<User>(this.baseUrl);
  }

  getUserById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this._http.get<User>(url);
  }

  addUser(data:any){
    return this._http.post(this.baseUrl,data);
  }

  updateUser(data:User):Observable<any>{

    return this._http.put(this.baseUrl,data);
  }

  updateRankUser(id:number, rate:number){

    const url = `${this.baseUrl}/${id}/${rate}`;
    const data = { rate: rate }

    return this._http.put(url,data);
  }





  loginUser(credential: LoginCredentials) {
    this._http.post(`${this.baseUrl}/login`, credential).subscribe(
      (data: any) => {
        if(data != 0){
          this.automaticLoged(data)
          this._router.navigate(['/welcome'])
        }else {
          alert("Invalid credentials. Please verify your username and password.")
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  isLoged(){
    if(window.sessionStorage.getItem('userLogedId')){
      return true;
    }else{
      return false;
    }
  }
  idUserLoged(){
    return Number(window.sessionStorage.getItem('userLogedId'));
  }
  automaticLoged(id:number){
    window.sessionStorage.setItem('userLogedId', String(id));
  }
  logOut(){
    window.sessionStorage.clear();
  }



}
