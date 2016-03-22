angular.module('ibeacon.controllers.authorization', [])

  .controller('AuthorizationCtrl', function($scope, Beacon, $ionicPopup, $cordovaBeacon, $cordovaToast) {
    $scope.log = {
      didChangeAuthorizationStatus: ""
    };

    $scope.getAuthorizationStatus = function() {
      Beacon.getAuthorizationStatus().then(
        function(res) {
          $cordovaToast.showShortBottom(res.authorizationStatus);
        },
        function(res) {
          $ionicPopup.alert({
            title: 'getAuthorizationStatus',
            template: res
          }
        );
      });
    };

    $scope.requestWhenInUseAuthorization = function() {
      Beacon.requestWhenInUseAuthorization().then(
        function(res) {
          $cordovaToast.showShortBottom("requestWhenInUseAuthorization " + res);
        },
        function(res) {
          $ionicPopup.alert({
            title: 'requestWhenInUseAuthorization',
            template: res
          }
        );
      });
    };

    $scope.requestAlwaysAuthorization = function() {
      Beacon.requestAlwaysAuthorization().then(
        function(res) {
          $cordovaToast.showShortBottom("requestAlwaysAuthorization " + res);
        },
        function(res) {
          $ionicPopup.alert({
            title: 'requestAlwaysAuthorization',
            template: res
          }
        );
      });
    };

    Beacon.setCallbackDidChangeAuthorizationStatus(function(res) {
      $scope.log.didChangeAuthorizationStatus += '-----------------' + '\n';
      $scope.log.didChangeAuthorizationStatus += JSON.stringify(res) + '\n';
    });
  });
