import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { BeaconProvider } from "../../providers/beacon/beacon";

/**
 * Generated class for the MonitoringPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monitoring',
  templateUrl: 'monitoring.html',
})
export class MonitoringPage {
  public log;
  public monitoringsRegions;
  private regions: any[];
  private regionSelected: boolean;

  constructor(
    private beacon: BeaconProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.log = {
      didChangeAuthorizationStatus: "",
      didDetermineStateForRegion: "",
      didStartMonitoringForRegion: "",
      didEnterRegion: "",
      didExitRegion: ""
    };
    this.regions = this.beacon.regions;
    const delegate = this.beacon.getDelegate();
    delegate.didChangeAuthorizationStatus().subscribe(res => {
      this.log.didChangeAuthorizationStatus += '-----------------' + '\n';
      this.log.didChangeAuthorizationStatus += JSON.stringify(res) + '\n';
    });
    delegate.didDetermineStateForRegion().subscribe(res => {
      this.log.didDetermineStateForRegion += '-----------------' + '\n';
      this.log.didDetermineStateForRegion += JSON.stringify(res) + '\n';
    });
    delegate.didStartMonitoringForRegion().subscribe(res => {
      this.log.didStartMonitoringForRegion += '-----------------' + '\n';
      this.log.didStartMonitoringForRegion += JSON.stringify(res) + '\n';
    });
    delegate.didEnterRegion().subscribe(res => {
      this.log.didEnterRegion += '-----------------' + '\n';
      this.log.didEnterRegion += JSON.stringify(res) + '\n';
    });
    delegate.didExitRegion().subscribe(res => {
      this.log.didExitRegion += '-----------------' + '\n';
      this.log.didExitRegion += JSON.stringify(res) + '\n';
    });
  }

  public startMonitoringForRegion() {
    const alert = this.createConfirm();
    alert.onDidDismiss((data) => {
      if (this.regionSelected) {
        this.beacon.startMonitoringForRegion(data)
          .then((res) => {
            if (res === "OK") {
              this.showToast("startMonitoringForRegion " + this.regions[data].identifier);
            }
          }, (res) => {
            this.showAlert('startMonitoringForRegion', res);
          })
      }
    });
    this.regionSelected = false;
    alert.present();
  }

  public stopMonitoringForRegion() {
    const alert = this.createConfirm();
    alert.onDidDismiss((data) => {
      if (this.regionSelected) {
        this.beacon.stopMonitoringForRegion(data)
          .then((res) => {
            this.showToast("stopMonitoringForRegion " + this.regions[data].identifier);
          }, (res) => {
            this.showAlert('stopMonitoringForRegion', res);
          })
      }
    });
    this.regionSelected = false;
    alert.present();
  }

  public requestStateForRegion() {
    const alert = this.createConfirm();
    alert.onDidDismiss((data) => {
      if (this.regionSelected) {
        this.beacon.requestStateForRegion(data)
          .then((res) => {
            this.showToast("requestStateForRegion " + this.regions[data].identifier);
          }, (res) => {
            this.showAlert('requestStateForRegion', res);
          })
      }
    });
    this.regionSelected = false;
    alert.present();
  }

  public getMonitoredRegions() {
    this.beacon.getMonitoredRegions()
      .then((res) => {
        this.monitoringsRegions = res;
        this.showToast("getMonitoredRegions aggiornato");
      }, (res) => {
        this.showAlert('getMonitoredRegions', res);
      })
  }

  public isMonitoringAvailableForClass() {
    const alert = this.createConfirm();
    alert.onDidDismiss((data) => {
      if (this.regionSelected) {
        this.beacon.isMonitoringAvailableForClass(data)
          .then((res) => {
            let risp = "no";
            if (res) {
              risp = "si";
            }
            this.showToast("isMonitoringAvailableForClass " + this.regions[data].identifier + " = " + risp);
          }, (res) => {
            this.showAlert('isMonitoringAvailableForClass', res);
            //Manual request for monitoring update is not supported on Android
          })
      }
    });
    this.regionSelected = false;
    alert.present();
  }

  private createConfirm() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Seleziona Region');

    this.regions.forEach((r, i) => {
      alert.addInput({
        type: 'radio',
        label: r.identifier,
        value: i.toString(),
        checked: i === 0 ? true : false
      });
    });


    alert.addButton({
      text: 'Annulla'
    });
    alert.addButton({
      text: 'OK',
      handler: () => { this.regionSelected = true }
    });
    return alert;
  }

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
