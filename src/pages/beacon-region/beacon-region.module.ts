import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeaconRegionPage } from './beacon-region';

@NgModule({
  declarations: [
    BeaconRegionPage,
  ],
  imports: [
    IonicPageModule.forChild(BeaconRegionPage),
  ],
})
export class BeaconRegionPageModule {}
