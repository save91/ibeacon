import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BeaconRegionPage } from "../pages/beacon-region/beacon-region";
import { BluetoothPage } from "../pages/bluetooth/bluetooth";
import { MonitoringPage } from "../pages/monitoring/monitoring";
import { RangingPage } from "../pages/ranging/ranging";
import { AuthorizationPage } from "../pages/authorization/authorization";
import { AdvertisingPage } from "../pages/advertising/advertising";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BeaconRegionPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'BeaconRegion', component: BeaconRegionPage },
      { title: 'Bluetooth', component: BluetoothPage },
      { title: 'Monitoring', component: MonitoringPage },
      { title: 'Ranging', component: RangingPage },
      { title: 'Authorization', component: AuthorizationPage },
      { title: 'Advertising', component: AdvertisingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
