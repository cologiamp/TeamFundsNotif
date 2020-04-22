import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopNewsPage } from './top-news';

@NgModule({
  declarations: [
    TopNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopNewsPage),
  ],
})
export class TopNewsPageModule {}
