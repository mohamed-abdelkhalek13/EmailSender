import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { EmailSenderComponent } from './Pages/email-sender/email-sender.component';
import { MessageCardComponent } from './shared/message-card/message-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesService } from './Services/messages.service';
import { AddMessageComponent } from './shared/Dialogues/add-message/add-message.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailSenderComponent,
    MessageCardComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MessagesService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ds: MessagesService) => () => {return ds.GetAllMessagesFromDB()},
      deps: [MessagesService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
