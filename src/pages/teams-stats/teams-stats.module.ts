import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsStatsPage } from './teams-stats';

@NgModule({
  declarations: [
    TeamsStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamsStatsPage),
  ],
})
export class TeamsStatsPageModule {}
