import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';

@IonicPage()
@Component({
  selector: 'page-top-news',
  templateUrl: 'top-news.html',
})
export class TopNewsPage {

  constructor(public navCtrl: NavController,private global:Global) {
  }

 
  lastNews=[
    {img:'assets/imgs/news2.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news1.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news3.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news2.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news1.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news3.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'}
  ]
   
  // public clickLike=false;

  like($event,item){
    $event.stopPropagation();
    console.log(item.numLike);
    if(item.clickLike!=true){
      item.numLike=item.numLike + 1;
      item.clickLike=true;
    }
    else{  
      item.numLike=item.numLike - 1;
      item.clickLike=false;
    }
  }
}   
