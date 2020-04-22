import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';
@IonicPage()
@Component({
  selector: 'page-match-details',
  templateUrl: 'match-details.html',
})
export class MatchDetailsPage {
  tab='stats';
  constructor(public navCtrl: NavController,private global:Global) {

  }

  statsPercentage=[
    {title:'Ball Possession',team1:'71%',team2:'29%'},
  ]
  statsNum=[
    {title:'Total Shots',team1:23,team2:12,team1P:'75%',team2P:'25%'},
    {title:'Accurate Passes',team1:629,team2:236,team1P:'80%',team2P:'20%'},
    {title:'Fouls',team1:8,team2:9,team1P:'49%',team2P:'51%'},
    {title:'Corners',team1:7,team2:2,team1P:'90%',team2P:'10%'},
    {title:'Offside',team1:2,team2:4,team1P:'25%',team2P:'75%'},
  ] 
  highlights=[ 
    {time:'84',img:'ball',content:'is simply dummy text of the printing ',team:'team1',content2:''},   
    {time:'84',img:'flag',content:'is simply dummy text of the printing ',team:'team2',content2:''},   
    {time:'84',img:'red-card',content:'Player Name',team:'team1',content2:''},  
    {time:'84',img:'ball',content:'is simply dummy text of the printing ',team:'team2',content2:''},  
    {time:'84',img:'yellow-card',content:'Player Name',team:'team1',content2:''},   
    {time:'82',img:'exchange',content:'Player Name',team:'team1',content2:'Player Name'},  
    {time:'84',img:'ball',content:'is simply dummy text of the printing ',team:'team2',content2:''},   
    {time:'78',img:'exchange',content:'Player Name',team:'team2',content2:'Player Name'},   
    {time:'74',img:'yellow-card',content:'Player Name',team:'team1',content2:''},   
    {time:'84',img:'yellow-card',content:'Player Name',team:'team1',content2:''},   
  ]; 
}  
  