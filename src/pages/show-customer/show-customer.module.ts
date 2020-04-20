import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowCustomerPage } from './show-customer';

@NgModule({
  declarations: [
    ShowCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowCustomerPage),
  ],
})
export class ShowCustomerPageModule {}
