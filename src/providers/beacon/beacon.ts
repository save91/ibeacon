import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IBeacon } from '@ionic-native/ibeacon';
import 'rxjs/add/operator/map';

/*
  Generated class for the BeaconProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BeaconProvider {

  public region = {
    identifier: "BlueUp",
    uuid: "ACFD065E-C3C0-11E3-9BBE-1A514932AC01",
    major: 0,
    minor: 0,
    notifyEntryStateOnDisplay: false
  };

  public regions = [{
    identifier: "BlueUp",
    uuid: "ACFD065E-C3C0-11E3-9BBE-1A514932AC01",
    major: 0,
    minor: 0,
    notifyEntryStateOnDisplay: false
  }];


  constructor(private ibeacon: IBeacon) {
  }

  public isBluetoothEnabled() {
    return this.ibeacon.isBluetoothEnabled();
  };
  public enableBluetooth() {
    return this.ibeacon.enableBluetooth();
  };
  public disableBluetooth() {
    return this.ibeacon.disableBluetooth();
  };
  public startMonitoringForRegion(number) {
    return this.ibeacon.startMonitoringForRegion(this.createBeaconRegion(number));
  };
  public stopMonitoringForRegion(number) {
    return this.ibeacon.stopMonitoringForRegion(this.createBeaconRegion(number));
  };
  public requestStateForRegion(number) {
    return this.ibeacon.requestStateForRegion(this.createBeaconRegion(number));
  };
  public getMonitoredRegions() {
    return this.ibeacon.getMonitoredRegions();
  };
  public isMonitoringAvailableForClass(number) {
    return this.ibeacon.isMonitoringAvailableForClass(this.createBeaconRegion(number));
  };
  public startRangingBeaconsInRegion(number) {
    return this.ibeacon.startRangingBeaconsInRegion(this.createBeaconRegion(number));
  };
  public stopRangingBeaconsInRegion(number) {
    return this.ibeacon.stopRangingBeaconsInRegion(this.createBeaconRegion(number));
  };
  public getRangedRegions() {
    return this.ibeacon.getRangedRegions();
  };
  public isRangingAvailable() {
    return this.ibeacon.isRangingAvailable();
  };
  public getAuthorizationStatus() {
    return this.ibeacon.getAuthorizationStatus();
  };
  public requestWhenInUseAuthorization() {
    return this.ibeacon.requestWhenInUseAuthorization();
  };
  public requestAlwaysAuthorization() {
    return this.ibeacon.requestAlwaysAuthorization();
  };
  public startAdvertising(number, measuredPower) {
    return this.ibeacon.startAdvertising(this.createBeaconRegion(number), measuredPower);
  };
  public stopAdvertising(number) {
    return this.ibeacon.stopAdvertising(this.createBeaconRegion(number));
  };
  public isAdvertising() {
    return this.ibeacon.isAdvertising();
  };

  public getDelegate() {
    return this.ibeacon.Delegate();
  }

  private createBeaconRegion(number) {
    return this.ibeacon.BeaconRegion(this.regions[number].identifier, this.regions[number].uuid, this.regions[number].major, this.regions[number].minor, this.regions[number].notifyEntryStateOnDisplay);
  }

}
