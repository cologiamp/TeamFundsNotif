import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Global } from '../../providers/global';
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController,private global:Global) {
  }

  notifications=[
    {title:'Transfer Talk',content:'Arsenal eyeing move for serie a defender amidstrumours of hector bellerin exit'},
    {title:'Transfer Talk',content:'Arsenal eyeing move for serie a defender amidstrumours of hector bellerin exit'},
  ]
}
