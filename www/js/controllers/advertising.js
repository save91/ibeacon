angular.module('ibeacon.controllers.advertising', [])

.controller('AdvertisingCtrl', function($scope, Beacon, $ionicPopup, $cordovaBeacon, $cordovaToast) {
  $scope.regions = Beacon.regions;
  $scope.data = {
    select: "0",
    measuredPower: "59"
  };
  $scope.showConfirm = function(title) {
    var confirmPopup = $ionicPopup.confirm({
      title: title,
      scope: $scope,
      subTitle: 'Seleziona una Region e measuredPower',
      templateUrl: 'templates/selectregionmeasuredpower.html'
    });
    return confirmPopup;
  };
  $scope.startAdvertising = function() {
    $scope.showConfirm("AdvertisingCtrl").then(function(res) {
      if(res) {
        Beacon.startAdvertising($scope.data.select, $scope.data.measuredPower)
        .then(function(res) {
          if(res === "OK") {
            $cordovaToast.showShortBottom("startAdvertising " + $scope.regions[$scope.data.select].name);
          }
        },function(res) {
          $ionicPopup.alert({
            title: 'startAdvertising',
            template: res
          });
        })
      }
    });
  };
  $scope.stopAdvertising = function() {
    Beacon.stopAdvertising().then(
      function(res) {
        $cordovaToast.showShortBottom("stopAdvertising " + res);
      },
      function(res) {
        $ionicPopup.alert({
          title: 'stopAdvertising',
          template: res
        }
      );
    });
  };
  $scope.isAdvertising = function() {
    Beacon.isAdvertising().then(
      function(res) {
        $cordovaToast.showShortBottom("isAdvertising " + res);
      },
      function(res) {
        $ionicPopup.alert({
          title: 'isAdvertising',
          template: res
        }
      );
    });
  };
})
