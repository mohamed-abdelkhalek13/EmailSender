import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  url:string = "https://localhost:7051/api/SendEmail"

  emailState$ = new Subject();

  constructor(private EmailClient: HttpClient) { }




  // api calls

  SendMessagesToEmails(Email:any){
    this.EmailClient.post(this.url, Email).subscribe({
      next: response => {
        this.emailState$.next("sent")
        console.log(`email sent successfully`)},
      error: error => {
        this.emailState$.next("error")
        console.log(error)}
    })
  }
}
