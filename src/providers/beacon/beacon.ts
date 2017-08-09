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
    major: "0",
    minor: "0",
    notifyEntryStateOnDisplay: false
  };

  public regions = [{
    identifier: "BlueUp",
    uuid: "ACFD065E-C3C0-11E3-9BBE-1A514932AC01",
    major: "0",
    minor: "0",
    notifyEntryStateOnDisplay: false
  }];

  private delegate;

  constructor(private ibeacon: IBeacon) {
    this.delegate = this.ibeacon.Delegate();
  }

  public isBluetoothEnabled() {
    return this.delegate.isBluetoothEnabled();
  };
  public enableBluetooth() {
    return this.delegate.enableBluetooth();
  };
  public disableBluetooth() {
    return this.delegate.disableBluetooth();
  };
  public startMonitoringForRegion(number) {
    return this.delegate.startMonitoringForRegion(this.createBeaconRegion(number));
  };
  public stopMonitoringForRegion(number) {
    return this.delegate.stopMonitoringForRegion(this.createBeaconRegion(number));
  };
  public requestStateForRegion(number) {
    return this.delegate.requestStateForRegion(this.createBeaconRegion(number));
  };
  public getMonitoredRegions() {
    return this.delegate.getMonitoredRegions();
  };
  public isMonitoringAvailableForClass(number) {
    return this.delegate.isMonitoringAvailableForClass(this.createBeaconRegion(number));
  };
  public startRangingBeaconsInRegion(number) {
    return this.delegate.startRangingBeaconsInRegion(this.createBeaconRegion(number));
  };
  public stopRangingBeaconsInRegion(number) {
    return this.delegate.stopRangingBeaconsInRegion(this.createBeaconRegion(number));
  };
  public getRangedRegions() {
    return this.delegate.getRangedRegions();
  };
  public isRangingAvailable() {
    return this.delegate.isRangingAvailable();
  };
  public getAuthorizationStatus() {
    return this.delegate.getAuthorizationStatus();
  };
  public requestWhenInUseAuthorization() {
    return this.delegate.requestWhenInUseAuthorization();
  };
  public requestAlwaysAuthorization() {
    return this.delegate.requestAlwaysAuthorization();
  };
  public startAdvertising = function (number, measuredPower) {
    return this.delegate.startAdvertising(this.createBeaconRegion(number), measuredPower);
  };
  public stopAdvertising() {
    return this.delegate.stopAdvertising();
  };
  public isAdvertising() {
    return this.delegate.isAdvertising();
  };
  //Events
  //Monitorings
  public setCallbackDidDetermineStateForRegion(callback) {
    this.delegate.setCallbackDidDetermineStateForRegion(callback);
  };
  public setCallbackDidStartMonitoringForRegion(callback) {
    this.delegate.setCallbackDidStartMonitoringForRegion(callback);
  };
  public setCallbackDidEnterRegion(callback) {
    this.delegate.setCallbackDidEnterRegion(callback);
  };
  public setCallbackDidExitRegion(callback) {
    this.delegate.setCallbackDidExitRegion(callback);
  };
  //Rangings
  public setCallbackDidRangeBeaconsInRegion(callback) {
    this.delegate.setCallbackDidRangeBeaconsInRegion(callback);
  };
  //Advertisings
  public setCallbackPeripheralManagerDidStartAdvertising(callback) {
    this.delegate.setCallbackPeripheralManagerDidStartAdvertising(callback);
  };
  public setCallbackPeripheralManagerDidUpdateState(callback) {
    this.delegate.setCallbackPeripheralManagerDidUpdateState(callback);
  };
  //Bluetooth and authorization
  public setCallbackDidChangeAuthorizationStatus(callback) {
    this.delegate.setCallbackDidChangeAuthorizationStatus(callback);
  };

  private createBeaconRegion(number) {
    return this.delegate.createBeaconRegion(this.regions[number].identifier, this.regions[number].uuid, this.regions[number].major, this.regions[number].minor, this.regions[number].notifyEntryStateOnDisplay);
  }

}
