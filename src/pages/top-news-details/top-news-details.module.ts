import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopNewsDetailsPage } from './top-news-details';

@NgModule({
  declarations: [
    TopNewsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopNewsDetailsPage),
  ],
})
export class TopNewsDetailsPageModule {}
