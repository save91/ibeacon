angular.module('ibeacon.controllers.monitoring', [])

.controller('MonitoringCtrl', function($scope, Beacon, $ionicPopup, $cordovaBeacon, $cordovaToast) {
  $scope.regions = Beacon.regions;
  $scope.monitoringsRegions = [];
  $scope.data = {
    select: "0"
  };
  $scope.log = {
    didDetermineStateForRegion: "",
    didStartMonitoringForRegion: "",
    didEnterRegion: "",
    didExitRegion: ""
  };
  var callbackditest = function(data) {
    console.log(data);
  };
  Beacon.setCallbackDidStartMonitoringForRegion(callbackditest);
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
  $scope.startMonitoringForRegion = function() {
    $scope.showConfirm("startMonitoringForRegion").then(function(res) {
      if(res) {
        Beacon.startMonitoringForRegion($scope.data.select)
        .then(function(res) {
          if(res === "OK") {
            $cordovaToast.showShortBottom("startMonitoringForRegion " + $scope.regions[$scope.data.select].name);
          }
        },function(res) {
          $ionicPopup.alert({
            title: 'startMonitoringForRegion',
            template: res
          });
        })
      }
    });
  };
  $scope.stopMonitoringForRegion = function() {
    $scope.showConfirm("stopMonitoringForRegion").then(function(res) {
      if(res) {
        Beacon.stopMonitoringForRegion($scope.data.select)
        .then(function(res) {
          if(res === "OK") {
            $cordovaToast.showShortBottom("stopMonitoringForRegion " + $scope.regions[$scope.data.select].name);
          }
        }, function(res) {
          $ionicPopup.alert({
            title: 'stopMonitoringForRegion',
            template: res
          });
        })
      }
    });
  };
  $scope.requestStateForRegion = function() {
    $scope.showConfirm("requestStateForRegion").then(function(res) {
      if(res) {
        Beacon.requestStateForRegion($scope.data.select)
        .then(function(res) {
          debugger;
          //TODO: Provare con iPhone
          if(res === "OK") {
            $cordovaToast.showShortBottom("requestStateForRegion " + $scope.regions[$scope.data.select].name);
          }
        }, function(res) {
          $ionicPopup.alert({
            title: 'requestStateForRegion',
            template: res
          });
          //Manual request for monitoring update is not supported on Android
        })
      }
    });
  };
  $scope.getMonitoredRegions = function() {
    Beacon.getMonitoredRegions().then(
      function(res) {
        $scope.monitoringsRegions = res;
        $cordovaToast.showShortBottom("getMonitoredRegions aggiornato");
      },
      function(res) {
        $ionicPopup.alert({
          title: 'getMonitoredRegions',
          template: res
        });
      }
    );
  };
  $scope.isMonitoringAvailableForClass = function() {
    $scope.showConfirm("isMonitoringAvailableForClass").then(function(res) {
      if(res) {
        Beacon.isMonitoringAvailableForClass($scope.data.select)
        .then(function(res) {
          var risp = "no";
          if(res) {
            risp = "si";
          }
          $cordovaToast.showShortBottom("isMonitoringAvailableForClass " + $scope.regions[$scope.data.select].name + " = " +risp);
        }, function(res) {
          $ionicPopup.alert({
            title: 'isMonitoringAvailableForClass',
            template: res
          });
          //Manual request for monitoring update is not supported on Android
        })
      };
    });
  };
  Beacon.setCallbackDidDetermineStateForRegion(function(res) {
    $scope.log.didDetermineStateForRegion += '-----------------' + '\n';
    $scope.log.didDetermineStateForRegion += JSON.stringify(res) + '\n';
  });
  Beacon.setCallbackDidStartMonitoringForRegion(function(res) {
    $scope.log.didStartMonitoringForRegion += '-----------------' + '\n';
    $scope.log.didStartMonitoringForRegion += JSON.stringify(res) + '\n';
  });
  Beacon.setCallbackDidEnterRegion(function(res) {
    $scope.log.didEnterRegion += '-----------------' + '\n';
    $scope.log.didEnterRegion += JSON.stringify(res) + '\n';
  });
  Beacon.setCallbackDidExitRegion(function(res) {
    $scope.log.didExitRegion += '-----------------' + '\n';
    $scope.log.didExitRegion += JSON.stringify(res) + '\n';
  });
});
