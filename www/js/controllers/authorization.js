angular.module('ibeacon.controllers.authorization', [])

  .controller('AuthorizationCtrl', function($scope, Beacon, $ionicPopup, $cordovaBeacon, $cordovaToast) {
    $scope.getAuthorizationStatus = function() {
      Beacon.getAuthorizationStatus().then(
        function(res) {
          $scope.regions = res;
          $cordovaToast.showShortBottom("getAuthorizationStatus " + res);
        },
        function(res) {
          $ionicPopup.alert({
            title: 'getAuthorizationStatus',
            template: res
          }
        );
      });
    }
    $scope.requestWhenInUseAuthorization = function() {
      Beacon.requestWhenInUseAuthorization().then(
        function(res) {
          $scope.regions = res;
          $cordovaToast.showShortBottom("requestWhenInUseAuthorization " + res);
        },
        function(res) {
          $ionicPopup.alert({
            title: 'requestWhenInUseAuthorization',
            template: res
          }
        );
      });
    }
    $scope.requestAlwaysAuthorization = function() {
      Beacon.requestAlwaysAuthorization().then(
        function(res) {
          $scope.regions = res;
          $cordovaToast.showShortBottom("requestAlwaysAuthorization " + res);
        },
        function(res) {
          $ionicPopup.alert({
            title: 'requestAlwaysAuthorization',
            template: res
          }
        );
      });
    }
  })
