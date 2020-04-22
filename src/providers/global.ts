import { Injectable } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Injectable() 
export class Global {
 constructor(public popoverCtrl: PopoverController) {

  }   
   // search Popover
  callSearch(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopPage',{},{cssClass:'search_Pop'});
    popover.present({
      ev: myEvent
    });     
  } 
  

}      


                    