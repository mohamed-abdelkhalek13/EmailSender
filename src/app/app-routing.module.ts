import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSenderComponent } from './Pages/email-sender/email-sender.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:":id", component:EmailSenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
