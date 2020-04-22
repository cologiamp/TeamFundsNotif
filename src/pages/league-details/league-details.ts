
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';

@IonicPage()
@Component({
  selector: 'page-league-details',
  templateUrl: 'league-details.html',
})
export class LeagueDetailsPage {
  itemInBar=["TABEL","MATCHES","NEWS","STATS","PHOTOS"];
  constructor(public navCtrl: NavController,private global:Global) {
  }

  groups=[
    {
      name:'Grp.A',
      teams:[
        {name:'Liverpool',img:'assets/imgs/teams/liverpool.png',mp:6,w:3,d:2,l:1,f:10,a:6,p:11},
        {name:'Villarreal',img:'assets/imgs/teams/villarreal.png',mp:6,w:3,d:1,l:2,f:10,a:7,p:10},
        {name:'Braga',img:'assets/imgs/teams/braga.png',mp:6,w:2,d:2,l:2,f:6,a:6,p:8},
        {name:'Spartak Moscow',img:'assets/imgs/teams/spartak_moscow.png',mp:6,w:1,d:1,l:4,f:1,a:8,p:4},
      ]   
    },
    {
      name:'Grp.B',
      teams:[
        {name:'Liverpool',img:'assets/imgs/teams/liverpool.png',mp:6,w:3,d:2,l:1,f:10,a:6,p:11},
        {name:'Villarreal',img:'assets/imgs/teams/villarreal.png',mp:6,w:3,d:1,l:2,f:10,a:7,p:10},
        {name:'Braga',img:'assets/imgs/teams/braga.png',mp:6,w:2,d:2,l:2,f:6,a:6,p:8},
        {name:'Spartak Moscow',img:'assets/imgs/teams/spartak_moscow.png',mp:6,w:1,d:1,l:4,f:1,a:8,p:4},
      ]      
    },
    {
      name:'Grp.C',
      teams:[
        {name:'Liverpool',img:'assets/imgs/teams/liverpool.png',mp:6,w:3,d:2,l:1,f:10,a:6,p:11},
        {name:'Villarreal',img:'assets/imgs/teams/villarreal.png',mp:6,w:3,d:1,l:2,f:10,a:7,p:10},
        {name:'Braga',img:'assets/imgs/teams/braga.png',mp:6,w:2,d:2,l:2,f:6,a:6,p:8},
        {name:'Spartak Moscow',img:'assets/imgs/teams/spartak_moscow.png',mp:6,w:1,d:1,l:4,f:1,a:8,p:4},
      ]   
    }
  ]   
  
  matches=[
    {   
      date:'Feb 15,2018',
      match:[
        {firstTeamImg:'assets/imgs/teams/arsenal.png',firstTeamName:'Arsenal',next:'Full Time', time:'19:30',secondTeamImg:'assets/imgs/teams/bate_borisov.png',secondTeamName:'Bate Borisov'}
      ]
    },  
    {   
      date:'Feb 21,2018',
      match:[
        {firstTeamImg:'assets/imgs/teams/real_madrid.png',firstTeamName:'Real Madrid',next:'Next Match', time:'19:30',secondTeamImg:'assets/imgs/teams/granada.png',secondTeamName:'Garnada'},
        {firstTeamImg:'assets/imgs/teams/barcelona.png',firstTeamName:'Barcelona',next:'Next Match', time:'22:30',secondTeamImg:'assets/imgs/teams/villarreal.png',secondTeamName:'Villarreal'},
        {firstTeamImg:'assets/imgs/teams/marseille.png',firstTeamName:'Marseille',next:'Next Match', time:'22:05',secondTeamImg:'assets/imgs/teams/braga.png',secondTeamName:'Braga'},
        {firstTeamImg:'assets/imgs/teams/maribor.png',firstTeamName:'Maribor',next:'Next Match', time:'18:00',secondTeamImg:'assets/imgs/teams/lazio.png',secondTeamName:'Lazio'},
        {firstTeamImg:'assets/imgs/teams/real_madrid.png',firstTeamName:'Real Madrid',next:'Next Match', time:'19:30',secondTeamImg:'assets/imgs/teams/granada.png',secondTeamName:'Garnada'},
      ]
    },  
    {   
      date:'Feb 22,2018',
      match:[
        {firstTeamImg:'assets/imgs/teams/arsenal.png',firstTeamName:'Arsenal',next:'Next Match', time:'19:30',secondTeamImg:'assets/imgs/teams/bate_borisov.png',secondTeamName:'Bate Borisov'},
        {firstTeamImg:'assets/imgs/teams/barcelona.png',firstTeamName:'Barcelona',next:'Next Match', time:'22:30',secondTeamImg:'assets/imgs/teams/villarreal.png',secondTeamName:'Villarreal'},
        {firstTeamImg:'assets/imgs/teams/marseille.png',firstTeamName:'Marseille',next:'Next Match', time:'22:05',secondTeamImg:'assets/imgs/teams/braga.png',secondTeamName:'Braga'},
        {firstTeamImg:'assets/imgs/teams/maribor.png',firstTeamName:'Maribor',next:'Next Match', time:'18:00',secondTeamImg:'assets/imgs/teams/lazio.png',secondTeamName:'Lazio'},
        {firstTeamImg:'assets/imgs/teams/real_madrid.png',firstTeamName:'Real Madrid',next:'Next Match', time:'19:30',secondTeamImg:'assets/imgs/teams/granada.png',secondTeamName:'Garnada'},
      ]
    },
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

  players=[
    {title:'BEST AVARAGE RATING',img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'8.4'},
    {title:'GOALS',img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'6'},
    {title:'ASSISTS',img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'10'},
    {title:'MINUTE PER GOAL',img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'6'},
    {title:'BEST AVARAGE RATING',img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'8.4'},
    {title:'GOALS',img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'6'},
  ]

  teams=[
    {title:'BEST AVARAGE RATING',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'7.30',note:'Man of the match:Player Name'},
    {title:'SHOTS ON TARGRT PR.MATCH',img:'assets/imgs/teams/barcelona.png',team:'Barcelona',num:'22',note:'Total Shots:28'},
    {title:'ACCURATE PASSES PR.MATCH',img:'assets/imgs/teams/lazio.png',team:'Lazio',num:'678',note:'Pass percentage:90.2'},
    {title:'POSSESSION',img:'assets/imgs/teams/Marseille.png',team:'Marseille',num:'8.5',note:'Total matches:6'},
    {title:'BEST AVARAGE RATING',img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'7.30',note:'Man of the match:Player Name'},
    {title:'SHOTS ON TARGRT PR.MATCH',img:'assets/imgs/teams/barcelona.png',team:'Barcelona',num:'22',note:'Total Shots:28'},
    {title:'ACCURATE PASSES PR.MATCH',img:'assets/imgs/teams/lazio.png',team:'Lazio',num:'678',note:'Pass percentage:90.2'},
    {title:'POSSESSION',img:'assets/imgs/teams/Marseille.png',team:'Marseille',num:'8.5',note:'Total matches:6'},
  ]
  activeBtn=0;
  tit='TABEL'; 
  changeTab(i,title){
    this.activeBtn = i;
    this.tit=title;   
  }     
  statsTab='players';  

  // go to another page
  goTo(page,$event){
    $event.stopPropagation();
    this.navCtrl.push(page)  
  }
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
