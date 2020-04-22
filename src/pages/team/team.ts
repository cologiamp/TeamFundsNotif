import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  itemInBar=["MATCHES","NEWS","STATS","SQUAD","PHOTOS"];
  constructor(public navCtrl: NavController,private global:Global) {
  }
  teams=[
    {img:'assets/imgs/teams/bate_borisov.png',team:'BATE Borisov',date:'Feb 13,2018',time:'17.30',league:'Premier League',result:'6 - 1'},
    {img:'assets/imgs/teams/real_madrid.png',team:'Real Madrid',date:'Feb 23,2018',time:'19:30',league:'Premier League',result:''},
    {img:'assets/imgs/teams/marseille.png',team:'Marseille',date:'Feb 28,2018',time:'22:00',league:'Premier League',result:''},
    {img:'assets/imgs/teams/bate_borisov.png',team:'BATE Borisov',date:'Feb 13,2018',time:'17.30',league:'Premier League',result:'6 - 1'},
    {img:'assets/imgs/teams/real_madrid.png',team:'Real Madrid',date:'Feb 23,2018',time:'19:30',league:'Premier League',result:''},
    {img:'assets/imgs/teams/marseille.png',team:'Marseille',date:'Feb 28,2018',time:'22:00',league:'Premier League',result:''},
    {img:'assets/imgs/teams/bate_borisov.png',team:'BATE Borisov',date:'Feb 13,2018',time:'17.30',league:'Premier League',result:'6 - 1'},
    {img:'assets/imgs/teams/real_madrid.png',team:'Real Madrid',date:'Feb 23,2018',time:'19:30',league:'Premier League',result:''},
    {img:'assets/imgs/teams/marseille.png',team:'Marseille',date:'Feb 28,2018',time:'22:00',league:'Premier League',result:''},
  ]
  lastNews=[
    {img:'assets/imgs/news2.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news1.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news3.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news2.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news1.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'},
    {img:'assets/imgs/news3.png',title:'Real Madrid want to win Club World Cup',numLike:200,subTitle:'is simply dummy text of the printing and typesetting industry.'}
  ]
   

  photos=[ 
    {img:'assets/imgs/p001.png',title:'2018 World Cup'},
    {img:'assets/imgs/p002.png',title:'2018 World Cup'},
    {img:'assets/imgs/p003.png',title:'2018 World Cup'},
    {img:'assets/imgs/p001.png',title:'2018 World Cup'},
    {img:'assets/imgs/p002.png',title:'2018 World Cup'},
    {img:'assets/imgs/p003.png',title:'2018 World Cup'},
  ] 

  teamStats=[
    {title:'BEST AVARAGE RATING',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'7.30',note:'Man of the match:Player Name'},
    {title:'SHOTS ON TARGRT PR.MATCH',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'22',note:'Total Shots:28'},
    {title:'ACCURATE PASSES PR.MATCH',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'678',note:'Pass percentage:90.2'},
    {title:'POSSESSION',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'8.5',note:'Total matches:6'},
    {title:'BEST AVARAGE RATING',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'7.30',note:'Man of the match:Player Name'},
    {title:'SHOTS ON TARGRT PR.MATCH',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'22',note:'Total Shots:28'},
    {title:'ACCURATE PASSES PR.MATCH',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'678',note:'Pass percentage:90.2'},
    {title:'POSSESSION',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'8.5',note:'Total matches:6'},
  ]

  teamSquad=[
    {
      title:'Coach',
      items:[
        {img:'assets/imgs/player2.png',name:'Player Name'},
      ]
    },
    {
      title:'GoalKeepers',
      items:[
        {img:'assets/imgs/player3.png',name:'Player Name'},
        {img:'assets/imgs/player3.png',name:'Player Name'},
        {img:'assets/imgs/player3.png',name:'Player Name'},
      ]
    },
    {
      title:'Defenders',
      items:[
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
      ]
    },
    {
      title:'Midfielder',
      items:[
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
      ]
    },
    {
      title:'Forward',
      items:[
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
        {img:'assets/imgs/player2.png',name:'Player Name'},
      ]
    },
  ]
  activeBtn=0;
  tit='MATCHES'; 
  changeTab(i,title){
    this.activeBtn = i;
    this.tit=title;   
  }  
  // like function
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


  favoriteTeam=false;
  addFavoriteTeam(){
    this.favoriteTeam=(this.favoriteTeam!=true)? true:false;
  }
}  
