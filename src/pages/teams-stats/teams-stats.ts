import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';

@IonicPage()
@Component({
  selector: 'page-teams-stats',
  templateUrl: 'teams-stats.html',
})
export class TeamsStatsPage {

  constructor(public navCtrl: NavController,private global:Global) {
  }
  teams=[
    {img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'7.30',note:'Man of the match:Player Name'},
    {img:'assets/imgs/teams/barcelona.png',team:'Barcelona',num:'22',note:'Total Shots:28'},
    {img:'assets/imgs/teams/lazio.png',team:'Lazio',num:'678',note:'Pass percentage:90.2'},
    {img:'assets/imgs/teams/Marseille.png',team:'Marseille',num:'8.5',note:'Total matches:6'},
    {img:'assets/imgs/teams/arsenal.png',team:'Arsenal',num:'7.30',note:'Man of the match:6'},
    {img:'assets/imgs/teams/barcelona.png',team:'Barcelona',num:'22',note:'Total Shots:28'},
    {img:'assets/imgs/teams/lazio.png',team:'Lazio',num:'678',note:'Pass percentage:90.2'},
    {img:'assets/imgs/teams/Marseille.png',team:'Marseille',num:'8.5',note:'Total matches:6'},
  ]
}
