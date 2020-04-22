import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotosDetailsPage } from './photos-details';
import { IonicImageViewerModule } from 'ionic-img-viewer';


@NgModule({
  declarations: [
    PhotosDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotosDetailsPage),IonicImageViewerModule
  ],
})
export class PhotosDetailsPageModule {}
