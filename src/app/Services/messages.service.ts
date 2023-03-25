import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMessage } from '../shared/Interfaces/imessage';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  allMessages:any = []
  private Url ="https://localhost:7051/api/Messages"
  Messages$ = new Subject();
  constructor(private Messagesclient:HttpClient) {
  }
  ngOnInit(){
    this.GetAllMessagesFromDB()
  }
  //Api calls
  GetAllMessagesFromDB(){
    this.Messagesclient.get(this.Url).subscribe({
      next: (messages:any) => {
        this.allMessages = messages
        this.Messages$.next(messages)
      },
      error: (err:any) => {console.log(err)}
    })
  }


  AddNewMessageToDB(message:IMessage){
    this.Messagesclient.post(this.Url, message).subscribe({
      next: (messages:any) => {
        this.allMessages = messages
        this.Messages$.next(messages)
      },
      error: (error:any) => console.log(error)
    })
  }


  DeleteMessgaeFromDB(message:IMessage){
    this.Messagesclient.delete(this.Url + `?id=${message.id}`).subscribe({
      next: (messages:any) => {
        this.allMessages = messages
        this.Messages$.next(messages)
      },
      error: (error:any) => console.log(error)
    })
  }


  //Service methods

  GetMessageById(id:number){
        let targetMessage = this.allMessages.find((message:any) => message.id == id)
        return targetMessage;
  }


}
