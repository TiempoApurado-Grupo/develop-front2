import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {IMessage} from "../../models/IMessage";
import {MessageService} from "../../services/message.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-see-messages',
  templateUrl: './see-messages.component.html',
  styleUrls: ['./see-messages.component.css']
})
export class SeeMessagesComponent implements OnInit{


  myMessages:IMessage[]=[];
  authors: string[] = [];
  constructor(private location:Location,
              private _serviceMessage: MessageService,
              private _serviceUser: UserService) {


  }

  ngOnInit(): void {

    if(!this._serviceUser.isLoged()){
      this.location.back()
    }

    this.obtenerMensajes();

  }

  obtenerMensajes(): void {

    this._serviceMessage.getMessagesByDestinationId(Number(this._serviceUser.idUserLoged())).subscribe(
      (messages: IMessage[]) => {
        this.myMessages = messages;
        this.obtenerAutores();
      },
      (error) => {
        console.log('Error al obtener los mensajes:', error);
      }
    );
  }

  obtenerAutores(): void {
    const originIds = this.myMessages.map(message => message.idOrigin);

    originIds.forEach(id => {
      this._serviceUser.getUserById(id).subscribe({
        next: (user: User) => {
          const author = user.name + " " + user.lastName;
          this.authors[id] = author;
        }
      });
    });
  }

  getAutor(id: number): string {
    return this.authors[id] || '';
  }

  volver(){
    this.location.back();
  }



}
