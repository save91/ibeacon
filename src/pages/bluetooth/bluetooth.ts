import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { BeaconProvider } from "../../providers/beacon/beacon";

/**
 * Generated class for the BluetoothPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html',
})
export class BluetoothPage {

  public log;

  constructor(
    private beacon: BeaconProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.log = {
      didChangeAuthorizationStatus: ""
    };
    const delegate = this.beacon.getDelegate();
    delegate.didChangeAuthorizationStatus().subscribe(res => {
      this.log.didChangeAuthorizationStatus += '-----------------' + '\n';
      this.log.didChangeAuthorizationStatus += JSON.stringify(res) + '\n';
    });
  }

  public isBluetoothEnabled() {
    this.beacon.isBluetoothEnabled()
      .then((res) => {
        const stato = res ? "Acceso" : "Spento";
        this.showToast(stato);
      }, (res) => {
        this.showToast(res.data);
      });
  };
  public enableBluetooth() {
    this.beacon.enableBluetooth()
      .then((res) => {
        this.showToast("Abilitato");
      }, (res) => {
        this.showToast("Errore");
      });
  };
  public disableBluetooth() {
    this.beacon.disableBluetooth()
      .then((res) => {
        this.showToast("Disabilitato");
      }, (res) => {
        this.showToast("Errore");
      });
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
