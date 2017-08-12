import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalAggiungiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-aggiungi',
  templateUrl: 'modal-aggiungi.html',
})
export class ModalAggiungiPage {

  public region;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.region = this.navParams.get('region');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public change() {
    this.region.notifyEntryStateOnDisplay = !this.region.notifyEntryStateOnDisplay;
  }

  public create() {
    this.viewCtrl.dismiss(this.region);
  }

}
