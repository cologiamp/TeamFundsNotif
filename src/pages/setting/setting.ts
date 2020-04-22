import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Global } from '../../providers/global';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  public action = false;
  language='en';
  constructor(public _myApp:MyApp,public navCtrl: NavController,private global:Global) {
    this.action = this._myApp.animateVarible;
    console.log(this.action);
  } 




  // animate Function variable animateVarible in app.component
  public checkbox;
  animateApp(e:any){ 
    this._myApp.animateVarible = e.checked;
    this.action = this._myApp.animateVarible;
  }


}
