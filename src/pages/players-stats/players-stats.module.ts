import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayersStatsPage } from './players-stats';

@NgModule({
  declarations: [
    PlayersStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayersStatsPage),
  ],
})
export class PlayersStatsPageModule {}
