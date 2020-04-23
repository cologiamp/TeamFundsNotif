import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';


@IonicPage()
@Component({
  selector: 'page-select-league',
  templateUrl: 'select-league.html',
})
export class SelectLeaguePage {

  constructor(public navCtrl: NavController,private global:Global) {
   
  }

  favorites=[
    {img:'assets/imgs/league/allsvenskan-logo-menu.png',name:'Allsvenskan'},
    {img:'assets/imgs/league/superettan-logo-menu.png',name:'Superettan'},
    {img:'assets/imgs/league/div1-logo-menu.png',name:'Division 1 (Norra, Södra)'},
    {img:'assets/imgs/league/div2-logo-menu.png',name:'Division 2 (Norrland, N. Svealand, S. Svealand, N. Götaland, Ö. Götaland, V. Götaland) '},
    {img:'assets/imgs/league/div2-logo-menu.png',name:'Division 3'},
  ]

  leagues=[
    {img:'assets/imgs/league/la_liga.png',name:'La Liga'},
    {img:'assets/imgs/league/premier_league.png',name:'Premier League'},
    {img:'assets/imgs/league/portuguese_league.png',name:'Portuguese League'},
    {img:'assets/imgs/league/french_league.png',name:'French League'},
    {img:'assets/imgs/league/africa_qualifiers.png',name:'Africa qualifiers'},
    {img:'assets/imgs/league/la_liga.png',name:'La Liga'},
    {img:'assets/imgs/league/premier_league.png',name:'Premier League'},
    {img:'assets/imgs/league/portuguese_league.png',name:'Portuguese League'},
    {img:'assets/imgs/league/french_league.png',name:'French League'},
    {img:'assets/imgs/league/africa_qualifiers.png',name:'Africa qualifiers'},
  ]

  selectLeague(item ,$event){ 
    $event.stopPropagation();
    let index = this.leagues.indexOf(item);
    if(index > -1){
      this.leagues.splice(index, 1);
    }
    this.favorites.push(item);
  } 
  removeLeague(item ,$event){ 
    $event.stopPropagation();
    let index = this.favorites.indexOf(item);
    if(index > -1){
      this.favorites.splice(index, 1);
    }
    this.leagues.push(item);
  }
}      
           