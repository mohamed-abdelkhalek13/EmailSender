import { Component } from '@angular/core';
import { DialogueService } from 'src/app/Services/dialogue.service';
import { MessagesService } from 'src/app/Services/messages.service';
import { AddMessageComponent } from 'src/app/shared/Dialogues/add-message/add-message.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private messagesService:MessagesService, private dialogueService:DialogueService){}

  openAddDialog(){
    this.dialogueService.openDialogue(AddMessageComponent)
}
}
