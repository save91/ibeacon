import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalAggiungiPage } from "../modal-aggiungi/modal-aggiungi";
import { BeaconProvider } from "../../providers/beacon/beacon";
import * as _ from 'lodash';

/**
 * Generated class for the BeaconRegionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beacon-region',
  templateUrl: 'beacon-region.html',
})
export class BeaconRegionPage {

  constructor(
    private modalCtrl: ModalController,
    private beacon: BeaconProvider) { }

  public region;
  public regions;

  ionViewDidLoad() {
    this.initRegion();
    this.regions = this.beacon.regions;
  }

  public openAdd() {
    let modal = this.modalCtrl.create(ModalAggiungiPage, {region: this.region});
    modal.onDidDismiss(data => {
      if (!!data) {
        console.log(data);
        this.regions.push(data);
        this.initRegion();
      }
    });
    modal.present();
  }

  private initRegion() {
    this.region = _.clone(this.beacon.region);
  }

}
