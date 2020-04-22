import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPopPage } from './search-pop';

@NgModule({
  declarations: [
    SearchPopPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPopPage),
  ],
})
export class SearchPopPageModule {}
