import { Component } from '@angular/core';
import { MessagesService } from 'src/app/Services/messages.service';


@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent {
  Messages:any
  constructor(private messagesService:MessagesService){

  }
  ngOnInit(){
    this.messagesService.Messages$.subscribe({
      next: (messages:any) => {
        console.log(messages)
        this.Messages = messages
      },
      error: (error:any) => {console.log(error)}
    })
    this.Messages = this.messagesService.allMessages;
    
  }

  DeleteMessage(message:any){
    console.log(message)
    this.messagesService.DeleteMessgaeFromDB(message);
  }
}
