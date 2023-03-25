import { Component } from '@angular/core';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent {
  constructor(private messagesService:MessagesService){}
  addMessage(newMessage:any){
    if(newMessage.subejct === "" || newMessage.messageContent === ""){
      return;
    }
    else{
      this.messagesService.AddNewMessageToDB(newMessage);
    }
  }
}
