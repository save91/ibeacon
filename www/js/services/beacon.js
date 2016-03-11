angular.module('ibeacon.services.beacon',[])

.factory('Beacon', function($cordovaBeacon, $rootScope, $ionicPlatform) {
  var Beacon = {
    region: {
      name: "",
      identifier: "BlueUp",
      uuid: "ACFD065E-C3C0-11E3-9BBE-1A514932AC01",
      major: "0",
      minor: "0",
      notifyEntryStateOnDisplay: false
    },
    regions: [{
      name: "e-xtrategy",
      identifier: "BlueUp",
      uuid: "ACFD065E-C3C0-11E3-9BBE-1A514932AC01",
      major: "0",
      minor: "0",
      notifyEntryStateOnDisplay: false
    }]
  };
  $ionicPlatform.ready(function() {
    var createBeaconRegion = function(number) {
      return $cordovaBeacon.createBeaconRegion(Beacon.regions[number].identifier, Beacon.regions[number].uuid, Beacon.regions[number].major, Beacon.regions[number].minor, Beacon.regions[number].notifyEntryStateOnDisplay);
    };
    Beacon.isBluetoothEnabled = function() {
      return $cordovaBeacon.isBluetoothEnabled();
    };
    Beacon.enableBluetooth = function() {
      return $cordovaBeacon.enableBluetooth();
    };
    Beacon.disableBluetooth = function() {
      return $cordovaBeacon.disableBluetooth();
    };
    Beacon.startMonitoringForRegion = function(number) {
      return $cordovaBeacon.startMonitoringForRegion(createBeaconRegion(number));
    };
    Beacon.stopMonitoringForRegion = function(number) {
      return $cordovaBeacon.stopMonitoringForRegion(createBeaconRegion(number));
    };
    Beacon.requestStateForRegion = function(number) {
      return $cordovaBeacon.requestStateForRegion(createBeaconRegion(number));
    };
    Beacon.getMonitoredRegions = function() {
      return $cordovaBeacon.getMonitoredRegions();
    };
    Beacon.isMonitoringAvailableForClass = function(number) {
      return $cordovaBeacon.isMonitoringAvailableForClass(createBeaconRegion(number));
    };
    Beacon.startRangingBeaconsInRegion = function(number) {
      return $cordovaBeacon.startRangingBeaconsInRegion(createBeaconRegion(number));
    };
    Beacon.stopRangingBeaconsInRegion = function(number) {
      return $cordovaBeacon.stopRangingBeaconsInRegion(createBeaconRegion(number));
    };
    Beacon.getRangedRegions = function() {
      return $cordovaBeacon.getRangedRegions();
    };
    Beacon.isRangingAvailable = function() {
      return $cordovaBeacon.isRangingAvailable();
    };
    Beacon.getAuthorizationStatus = function() {
      return $cordovaBeacon.getAuthorizationStatus();
    };
    Beacon.requestWhenInUseAuthorization = function() {
      return $cordovaBeacon.requestWhenInUseAuthorization();
    };
    Beacon.requestAlwaysAuthorization = function() {
      return $cordovaBeacon.requestAlwaysAuthorization();
    };
    Beacon.startAdvertising = function(number, measuredPower) {
      return $cordovaBeacon.startAdvertising(createBeaconRegion(number), measuredPower);
    };
    Beacon.stopAdvertising = function() {
      return $cordovaBeacon.stopAdvertising();
    };
    Beacon.isAdvertising = function() {
      return $cordovaBeacon.isAdvertising();
    };
    Beacon.setCallbackDidStartMonitoringForRegion = function(callback) {
      $cordovaBeacon.setCallbackDidStartMonitoringForRegion(callback);
    };
    $rootScope.$on("$cordovaBeacon:didDetermineStateForRegion", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("didDetermineStateForRegion");
      console.log(JSON.stringify(pluginResult));
    });
    $rootScope.$on("$cordovaBeacon:didStartMonitoringForRegion", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("didStartMonitoringForRegion");
      console.log(JSON.stringify(pluginResult));
    });
    $rootScope.$on("$cordovaBeacon:didEnterRegion", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("didEnterRegion");
      console.log(JSON.stringify(pluginResult));
    });
    $rootScope.$on("$cordovaBeacon:didExitRegion", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("didExitRegion");
      console.log(JSON.stringify(pluginResult));
    });
    $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("didRangeBeaconsInRegion");
      console.log(JSON.stringify(pluginResult));
    });
    $rootScope.$on("$cordovaBeacon:peripheralManagerDidStartAdvertising", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("peripheralManagerDidStartAdvertising");
      console.log(JSON.stringify(pluginResult));
    });
    $rootScope.$on("$cordovaBeacon:peripheralManagerDidUpdateState", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("peripheralManagerDidUpdateState");
      console.log(JSON.stringify(pluginResult));
    });
    $rootScope.$on("$cordovaBeacon:didChangeAuthorizationStatus", function(event, pluginResult, Devices) {
      console.log("--------------------------");
      console.log("didChangeAuthorizationStatus");
      console.log(JSON.stringify(pluginResult));
    });
  });
  return Beacon;
});
