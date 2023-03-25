import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  constructor(private dialogue: MatDialog ) {
  }

  openDialogue(component:any, id?:any){
    return this.dialogue.open(component, {
      width:'70%',
      height: '70%',
      data:id})
  }
}
