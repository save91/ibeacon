app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.regions', {
    url: '/regions',
    views: {
      'menuContent': {
        templateUrl: 'templates/regions.html',
        controller: 'RegionsCtrl'
      }
    }
  })

  .state('app.bluetooth', {
    url: '/bluetooth',
    views: {
      'menuContent': {
        templateUrl: 'templates/bluetooth.html',
        controller: 'BluetoothCtrl'
      }
    }
  })

  .state('app.monitoring', {
    url: '/monitoring',
    views: {
      'menuContent': {
        templateUrl: 'templates/monitoring.html',
        controller: 'MonitoringCtrl'
      }
    }
  })

  .state('app.ranging', {
    url: '/ranging',
    views: {
      'menuContent': {
        templateUrl: 'templates/ranging.html',
        controller: 'RangingCtrl'
      }
    }
  })

  .state('app.authorization', {
    url: '/authorization',
    views: {
      'menuContent': {
        templateUrl: 'templates/authorization.html',
        controller: 'AuthorizationCtrl'
      }
    }
  })

  .state('app.advertising', {
    url: '/advertising',
    views: {
      'menuContent': {
        templateUrl: 'templates/advertising.html',
        controller: 'AdvertisingCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/regions');
});
