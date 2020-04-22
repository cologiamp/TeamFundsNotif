import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';
@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {

  constructor(public navCtrl: NavController,private global:Global) {
  }
  photos=[
    {img:'assets/imgs/p001.png',title:'2018 World Cup'},
    {img:'assets/imgs/p002.png',title:'2018 World Cup'},
    {img:'assets/imgs/p003.png',title:'2018 World Cup'},
    {img:'assets/imgs/p001.png',title:'2018 World Cup'},
    {img:'assets/imgs/p002.png',title:'2018 World Cup'},
    {img:'assets/imgs/p003.png',title:'2018 World Cup'},
  ]
}  
    