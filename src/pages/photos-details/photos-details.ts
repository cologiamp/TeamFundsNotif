import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';
@IonicPage()
@Component({
  selector: 'page-photos-details',
  templateUrl: 'photos-details.html',
})
export class PhotosDetailsPage {

  constructor(public navCtrl: NavController,private global:Global) {
  }

 
  photos=[
    "assets/imgs/photos/p1.png",
    "assets/imgs/photos/p2.png",
    "assets/imgs/photos/p3.png",
    "assets/imgs/photos/p4.png",
    "assets/imgs/photos/p5.png",
    "assets/imgs/photos/p3.png",
    "assets/imgs/photos/p1.png",
    "assets/imgs/photos/p2.png",
    "assets/imgs/photos/p3.png",
    "assets/imgs/photos/p4.png",
    "assets/imgs/photos/p5.png",
  ]  
}
   