angular.module('ibeacon.controllers.ranging', [])

  .controller('RangingCtrl', function($scope, Beacon, $ionicPopup, $cordovaBeacon, $cordovaToast) {
    $scope.regions = Beacon.regions;
    $scope.rangingRegions = [];
    $scope.data = {
      select: "0"
    };
    // A confirm dialog
    $scope.showConfirm = function(title) {
      var confirmPopup = $ionicPopup.confirm({
        title: title,
        scope: $scope,
        subTitle: 'Seleziona una Region',
        templateUrl: 'templates/selectregion.html'
      });
      return confirmPopup;
    };
    $scope.startRangingBeaconsInRegion = function() {
      $scope.showConfirm("startRangingBeaconsInRegion").then(function(res) {
        if(res) {
          Beacon.startRangingBeaconsInRegion($scope.data.select)
          .then(function(res) {
            if(res === "OK") {
              $cordovaToast.showShortBottom("startRangingBeaconsInRegion " + $scope.regions[$scope.data.select].name);
            }
          },function(res) {
            $ionicPopup.alert({
              title: 'startRangingBeaconsInRegion',
              template: res
            });
          })
        }
      });
    }
    $scope.stopRangingBeaconsInRegion = function() {
      $scope.showConfirm("stopRangingBeaconsInRegion").then(function(res) {
        if(res) {
          Beacon.stopRangingBeaconsInRegion($scope.data.select)
          .then(function(res) {
            if(res === "OK") {
              $cordovaToast.showShortBottom("stopRangingBeaconsInRegion " + $scope.regions[$scope.data.select].name);
            }
          },function(res) {
            $ionicPopup.alert({
              title: 'stopRangingBeaconsInRegion',
              template: res
            });
          })
        }
      });
    }
    $scope.getRangedRegions = function() {
      Beacon.getRangedRegions().then(
        function(res) {
          $scope.rangingRegions = res;
          $cordovaToast.showShortBottom("getRangedRegions aggiornato");
        },
        function(res) {
          $ionicPopup.alert({
            title: 'getRangedRegions',
            template: res
          }
        );
      });
    }
    $scope.isRangingAvailable = function() {
      Beacon.isRangingAvailable().then(
        function(res) {
          $scope.regions = res;
          $cordovaToast.showShortBottom("isRangingAvailable " + res);
        },
        function(res) {
          $ionicPopup.alert({
            title: 'isRangingAvailable',
            template: res
          }
        );
      });
    }
  })
