import { Component, ViewChild} from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { CustomerPage } from '../pages/customer/customer';

import { NotificationsService } from "../services/notifications.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = 'SignInPage';     
  pages: Array<{title: string, component: any}>;
  leagues;
  teams;  
  
  public animateVarible:boolean= false;

  //rootPage: any = CustomerPage;

  constructor(private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private platform: Platform,
              private notificationsService: NotificationsService,
              private toastController: ToastController) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: 'HomePage' },
      { title: 'SUPPORT MY TEAM', component: 'TopNewsPage' },
      { title: 'ALL MATCHES', component: 'AllMatchesPage' },
      { title: 'SETTINGS', component: 'SettingPage' },
      { title: 'LOG OUT', component: 'SignInPage' },
    ];   

    this.leagues=[
      {img:'assets/imgs/league/allsvenskan-logo-menu.png',name:'Allsvenskan'},
      {img:'assets/imgs/league/superettan-logo-menu.png',name:'Superettan'},
      {img:'assets/imgs/league/div1-logo-menu.png',name:'Division 1 (Norra, Södra)'},
      {img:'assets/imgs/league/div2-logo-menu.png',name:'Division 2 (Norrland, N. Svealand, S. Svealand, N. Götaland, Ö. Götaland, V. Götaland) '},
      {img:'assets/imgs/league/div2-logo-menu.png',name:'Division 3'},
    ];

    this.teams=[
      {img:'assets/imgs/league/global.png',name:'Östersunds FK'},
      {img:'',name:''},
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.notificationSetup();
    });
  
  }

  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  private notificationSetup() {
    alert("notificationSetup");
    this.notificationsService.getToken();
    this.notificationsService.onNotifications().subscribe(
      (msg) => {
        this.presentToast(msg.body);
      });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }

}
