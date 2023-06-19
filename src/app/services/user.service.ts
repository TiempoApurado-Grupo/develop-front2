import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[];
  user!: User;

  constructor(private _http:HttpClient) {

  }
  getAllUsers():Observable<User>{
    return this._http.get<User>('http://localhost:3000/users');
  }

  getUserById(id:number){
    return this._http.get<User>(`http://localhost:3000/users/${id}`)
  }



  getListClientesId(id: number): number[] {

    let listClientes: number[] = [];

    this.getUserById(id).subscribe({
      next: (val: User) => {

        this.user = val;

        console.log(this.user);
        console.log(this.user.name);

        console.log(this.user.listClientes[0])

        console.log("VEGUETA");

        listClientes = this.user.listClientes;
        console.log(listClientes);
      },
      error: (error) => {
        console.error(error);
      }
    });

    return listClientes;
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
