import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { CustomerPage } from '../pages/customer/customer';
import { CustomerPageModule } from '../pages/customer/customer.module';
import { LeaguePage } from '../pages/league/league';
import { LeaguePageModule } from '../pages/league/league.module';
import { TeamPageModule } from '../pages/team/team.module';
import { TeamPage } from '../pages/team/team';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignInPageModule } from '../pages/sign-in/sign-in.module';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {NotificationsService} from "../services/notifications.service";
import {Firebase} from "@ionic-native/firebase";
import {FIREBASE_CONFIG} from "../config/firebase.config";

import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';
import { GetProvider } from '../providers/get-provider';
import { Global } from '../providers/global';
import { IonicStorageModule } from '@ionic/Storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(), 
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    CustomerPageModule,
    LeaguePageModule,
    TeamPageModule,
    SignInPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    NotificationsService,
    PostProvider,
    GetProvider,
    Global,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
