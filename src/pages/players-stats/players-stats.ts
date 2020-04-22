import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';

@IonicPage()
@Component({
  selector: 'page-players-stats',
  templateUrl: 'players-stats.html',
})
export class PlayersStatsPage {

  constructor(public navCtrl: NavController,private global:Global) {
  }

  players=[
    {img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'10'},
    {img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'7'},
    {img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'7'},
    {img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'7'},
    {img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'6'},
    {img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'6'},
    {img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'6'},
    {img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'5'},
    {img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'4'},
    {img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'4'},
    {img:'assets/imgs/player1.png',name:'Player Name',team:'Arsenal',num:'4'},
    {img:'assets/imgs/player2.png',name:'Player Name',team:'Arsenal',num:'4'},
  ]

}
