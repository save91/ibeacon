angular.module('ibeacon.controllers.regions', [])

.controller('RegionsCtrl', function($scope, $ionicModal, Beacon) {
  $scope.regions = Beacon.regions;
  $scope.region = {};

  var initRegion = function() {
    $scope.region = {
      name: Beacon.region.name,
      identifier: Beacon.region.identifier,
      uuid: Beacon.region.uuid,
      major: Beacon.region.major,
      minor: Beacon.region.minor,
      notifyEntryStateOnDisplay: Beacon.region.notifyEntryStateOnDisplay
    }
  }
  initRegion();

  $ionicModal.fromTemplateUrl('templates/addregion.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openAdd = function() {
    $scope.modal.show();
  };
  $scope.closeAdd = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  $scope.create = function() {
    $scope.regions.push($scope.region);
    initRegion();
    $scope.modal.hide();
  }
})
