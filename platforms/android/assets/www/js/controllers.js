angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaClipboard, $cordovaToast, $interval) {

  $scope.userId = "";
  $scope.password = "";
  $scope.showCredentials = false;

$scope.setPassword = function(pass) {
  $scope.password = pass;
  $scope.showCredentials = true;
};

$scope.setUserId = function(id) {
  $scope.userId = id;
  $scope.showCredentials = true;
};

})

.controller('AccountCtrl', function($scope) {

});
