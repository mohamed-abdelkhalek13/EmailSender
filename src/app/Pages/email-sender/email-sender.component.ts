import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from 'src/app/Services/email.service';
import { MessagesService } from 'src/app/Services/messages.service';


@Component({
  selector: 'app-email-sender',
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.css']
})
export class EmailSenderComponent {
  emailSent:string = "";
  
  message:any;
  emailForm = new FormGroup({
    email: new FormControl('',Validators.compose([Validators.required, Validators.pattern(/^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])[" "]?)+$/)])),
    subject: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required),
  });

  get emailValidation(){
    return this.emailForm.get("email")?.invalid && this.emailForm.get("email")?.touched;
  }
  get subjectValidation(){
    return this.emailForm.get("subject")?.invalid && this.emailForm.get("subject")?.touched;
  }
  get bodyValidation(){
    return this.emailForm.get("body")?.invalid && this.emailForm.get("body")?.touched;
  }

  constructor(private messagesService: MessagesService, private activatedRoute: ActivatedRoute, private emailService: EmailService) {
  }

  ngOnInit(){
    let MessageId = this.activatedRoute.snapshot.params["id"]
    this.message = this.messagesService.GetMessageById(MessageId);
  }

  sendMessage(email:any){
    if(this.emailForm.invalid)
    return;
    let emailsArray = email.emails.split(" ");
    let adjustedEmail = {
      Emails: emailsArray,
      subject:email.subject,
      messageContent: email.body
    }
      this.emailService.SendMessagesToEmails(adjustedEmail);
      this.emailService.emailState$.subscribe({
        next: (emailState:any) => this.emailSent = emailState
      })
  }
}
