import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../models/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[];
  user!: User;

  constructor(private _http:HttpClient,
              private _router:Router) {

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
  logOut(){
    window.sessionStorage.clear();
  }

  //clients
  getUserClients(): Observable<number[]> {
    const  userId = this.idUserLoged();
    return this.getUserById(userId).pipe(
      map(user=>user.listClients)
    );
  }

}
