import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangingPage } from './ranging';

@NgModule({
  declarations: [
    RangingPage,
  ],
  imports: [
    IonicPageModule.forChild(RangingPage),
  ],
})
export class RangingPageModule {}
