import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Global } from '../../providers/global';


@IonicPage()
@Component({
  selector: 'page-all-matches',
  templateUrl: 'all-matches.html',
})
export class AllMatchesPage {

  constructor(public navCtrl: NavController,private global:Global) {
    this.getDaysInMonth(this.month_num , this.year);
    this.isGroupShown(3);
  }

  matches=[
    {   
      title:'Favorites',
      items:[
        {firstTeamImg:'assets/imgs/teams/real_madrid.png',firstTeamName:'Real Madrid', time:'19:30',secondTeamImg:'assets/imgs/teams/granada.png',secondTeamName:'Garnada'},
        {firstTeamImg:'assets/imgs/teams/barcelona.png',firstTeamName:'Barcelona', time:'22:30',secondTeamImg:'assets/imgs/teams/villarreal.png',secondTeamName:'Villarreal FC'},  
      ]
    },
    {
      title:'INT - Champions League',
      items:[
        {firstTeamImg:'assets/imgs/teams/liverpool.png',firstTeamName:'Liverpool', time:'19:30',secondTeamImg:'assets/imgs/teams/spartak_moscow.png',secondTeamName:'Spartak Moscow'},
        {firstTeamImg:'assets/imgs/teams/maribor.png',firstTeamName:'Maribor', time:'22:30',secondTeamImg:'assets/imgs/teams/sevilla.png',secondTeamName:'Sevilla'},  
      ]
    },
    {
      title:'INT - Fifa Club World Club',
      items:[
        {firstTeamImg:'assets/imgs/teams/real_madrid.png',firstTeamName:'Real Madrid', time:'19:30',secondTeamImg:'assets/imgs/teams/granada.png',secondTeamName:'Garnada'},
        {firstTeamImg:'assets/imgs/teams/barcelona.png',firstTeamName:'Barcelona', time:'22:30',secondTeamImg:'assets/imgs/teams/villarreal.png',secondTeamName:'Villarreal'},  
      ]
    },
  ]

  // calender Function
  monthNames = ["January", "February", "March", "April", "May", "June","July",
                "August", "September", "October", "November", "December"];  
  days_name=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  days=[];
  myDate=new Date();
  year=this.myDate.getFullYear();
  month_num=this.myDate.getMonth();
  month_name=this.monthNames[this.month_num];

  // increase and decrease month function
  change_month(type){
    this.shownGroup=null;
    if(type=='increase'){
      this.month_num=this.month_num + 1;
      if(this.month_num>=12){
        this.month_num=0;
        this.year=this.year + 1;
      }
    }
    else if(type=='decrease'){  
      this.month_num=this.month_num - 1;
      if(this.month_num<0){
        this.month_num=11;
        this.year=this.year - 1;
      }
    }

    this.month_name=this.monthNames[this.month_num];
    this.days=[];
    this.getDaysInMonth(this.month_num , this.year);
  }

  getDaysInMonth(month, year) {
    // Since no month has fewer than 28 days
    var date = new Date(year, month);
    while (date.getMonth() === month) {
      var a = new Date(date);
      var day_num = a.getDate() ;  
      this.days.push( { name:this.days_name[a.getDay()],day_num:day_num});
      date.setDate(date.getDate() + 1);
    }
  }
    
  // click day
shownGroup = 3;
  toggleGroup(group) {
        this.shownGroup = group;
  };
  isGroupShown(group) {
      return this.shownGroup === group;  
  };
}
