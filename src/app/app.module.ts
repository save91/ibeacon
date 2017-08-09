import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeaconRegionPageModule } from "../pages/beacon-region/beacon-region.module";
import { BluetoothPageModule } from "../pages/bluetooth/bluetooth.module";
import { MonitoringPageModule } from "../pages/monitoring/monitoring.module";
import { RangingPageModule } from "../pages/ranging/ranging.module";
import { AuthorizationPageModule } from "../pages/authorization/authorization.module";
import { AdvertisingPageModule } from "../pages/advertising/advertising.module";
import { BeaconProvider } from '../providers/beacon/beacon';
import { IBeacon } from "@ionic-native/ibeacon";


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BeaconRegionPageModule,
    BluetoothPageModule,
    MonitoringPageModule,
    RangingPageModule,
    AuthorizationPageModule,
    AdvertisingPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    IBeacon,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeaconProvider
  ]
})
export class AppModule {}
