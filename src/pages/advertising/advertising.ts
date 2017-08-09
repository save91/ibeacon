import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { BeaconProvider } from "../../providers/beacon/beacon";

/**
 * Generated class for the AdvertisingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advertising',
  templateUrl: 'advertising.html',
})
export class AdvertisingPage {
  public regions = [];
  public data = {
    select: "0",
    measuredPower: "-59"
  }
  public log = {
    peripheralManagerDidStartAdvertising: "",
    peripheralManagerDidUpdateState: ""
  };

  constructor(
    private beacon: BeaconProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) { }

  ionViewDidLoad() { }


  public startAdvertising() {
    this.beacon.startAdvertising(this.data.select, this.data.measuredPower)
      .then((res) => {
        if (res === "OK") {
          this.showToast("startAdvertising " + this.regions[this.data.select].name);
        }
      }, (res) => {
        this.showAlert('startAdvertising', res);
      })
  };

  public stopAdvertising() {
    this.beacon.stopAdvertising(this.data.select).then(
      (res) => {
        this.showToast("stopAdvertising " + res);
      },
      (res) => {
        this.showAlert('stopAdvertising', res);
      });
  };

  public isAdvertising() {
    this.beacon.isAdvertising().then(
      (res) => {
        this.showToast('isAdvertising ' + res);
      },
      (res) => {
        this.showAlert('isAdvertising', res);
      })
  };

  private showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  private showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
