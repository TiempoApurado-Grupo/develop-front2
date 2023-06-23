import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {MessageService} from "../../services/message.service";
import {UserService} from "../../services/user.service";
import {IMessage} from "../../models/IMessage";

@Component({
  selector: 'app-see-messages',
  templateUrl: './see-messages.component.html',
  styleUrls: ['./see-messages.component.css']
})
export class SeeMessagesComponent implements OnInit{


  messagesForMe:IMessage[]=[];

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
    this._serviceMessage.getMessageByRecipientId(this._serviceUser.idUserLoged()).subscribe(
      (messages: any) => {
        this.messagesForMe = messages;
        console.log(this.messagesForMe)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  volver(){
    this.location.back();
  }

}
