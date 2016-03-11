var app = angular.module('ibeacon', [
  'ionic',
  'ngCordova',
  'ibeacon.controllers.app',
  'ibeacon.controllers.regions',
  'ibeacon.controllers.bluetooth',
  'ibeacon.controllers.monitoring',
  'ibeacon.controllers.ranging',
  'ibeacon.controllers.authorization',
  'ibeacon.controllers.advertising',
  'ibeacon.services.beacon'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  });
