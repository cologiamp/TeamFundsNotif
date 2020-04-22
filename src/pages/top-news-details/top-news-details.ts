import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';


@IonicPage()
@Component({
  selector: 'page-top-news-details',
  templateUrl: 'top-news-details.html',
})
export class TopNewsDetailsPage {

  constructor(public navCtrl: NavController,private global:Global) {
  }
  clickLike=false;
  numLike=200;
  like($event){
    $event.stopPropagation();
    if(this.clickLike!=true){
      this.numLike=this.numLike+1;
      this.clickLike=true;
    }
    else{
      this.numLike=this.numLike - 1;
      this.clickLike=false;
    }
  }
}          
                                 