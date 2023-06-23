import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../models/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string="https://rentstate.azurewebsites.net/api/users"
  //baseUrl: string=" http://localhost:8080/api/users"
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

  updateUser(id:number, data:User):Observable<any>{
    const url = `${this.baseUrl}/${id}`;

    return this._http.put(url,data);
  }





  loginUser(email: string, pass: string) {
    this.getAllUsers().subscribe((val: any) => {
      this.users = val;
      console.log(val);
      this.validarLogin(email, pass);
    });
  }
  validarLogin(email: string, pass: string) {

    const user = this.users.find((u: User) => u.email === email && u.password === pass);
    if (user) {
      window.sessionStorage.setItem('userLogedId', user.id.toString());
      alert("Bienvenido")
      this._router.navigate(['/listposts'])

    } else {
      alert("Credenciales invalidas");
    }
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
