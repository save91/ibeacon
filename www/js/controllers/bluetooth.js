angular.module('ibeacon.controllers.bluetooth', [])

.controller('BluetoothCtrl', function($scope, $ionicPopup, Beacon, $cordovaToast) {
  $scope.isBluetoothEnabled = function() {
    Beacon.isBluetoothEnabled()
    .then(function(res) {
      var stato = res ? "Acceso":"Spento";
      $cordovaToast.showShortBottom(stato);
    },function(res) {
      $cordovaToast.showShortBottom(res.data);
    });
  };
  $scope.enableBluetooth = function() {
    Beacon.enableBluetooth()
    .then(function(res) {
      $cordovaToast.showShortBottom("Abilitato");
    },function(res) {
      $cordovaToast.showShortBottom(res.data);
    });
  };
  $scope.disableBluetooth = function() {
    Beacon.disableBluetooth()
    .then(function(res) {
      $cordovaToast.showShortBottom("Disabilitato");
    },function(res) {
      $cordovaToast.showShortBottom(res.data);
    });
  };
})
