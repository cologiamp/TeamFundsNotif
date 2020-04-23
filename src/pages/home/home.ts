import { Component } from '@angular/core';
import { IonicPage, NavController,  } from 'ionic-angular';
import { Global } from '../../providers/global';
@IonicPage()
@Component({  
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,private global:Global) {
  }

  lastNews=[
    {img:'assets/imgs/news2.png',title:'Hi! Welcome to TeamGoal!', subTitle:'TeamGoal is the best platform to support your club.'},
    {img:'assets/imgs/news1.png',title:'Hi! Welcome to TeamGoal!', subTitle:'TeamGoal is the best platform to support your club.'},
    {img:'assets/imgs/news3.png',title:'Hi! Welcome to TeamGoal!', subTitle:'TeamGoal is the best platform to support your club.'}
  ]

  matches=[
    {firstTeamImg:'assets/imgs/teams/real_madrid.png',firstTeamName:'Real Madrid', time:'19:30',secondTeamImg:'assets/imgs/teams/granada.png',secondTeamName:'Garnada'},
    {firstTeamImg:'assets/imgs/teams/barcelona.png',firstTeamName:'Barcelona', time:'22:30',secondTeamImg:'assets/imgs/teams/villarreal.png',secondTeamName:'Villarreal'},
  ]

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
       