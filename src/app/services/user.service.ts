import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[];

  constructor(private _http:HttpClient) {

  }
  getAllUsers():Observable<User>{
    return this._http.get<User>('http://localhost:3000/users');
  }

  getUserById(id:number){
    return this._http.get<User>(`http://localhost:3000/users/${id}`)
  }


  loginUser(email: string, pass: string) {
    this.getAllUsers().subscribe((val: any) => {
      this.users = val;
      this.validarLogin(email, pass);
    });
  }
  validarLogin(email: string, pass: string) {
    const user = this.users.find((u: User) => u.email === email && u.password === pass);
    if (user) {
      console.log('Login exitoso');
      window.sessionStorage.setItem('userLogeadoID', user.id.toString());
      return true;

    } else {
      console.log('Credenciales inválidas');
      return false;
    }
  }
}
