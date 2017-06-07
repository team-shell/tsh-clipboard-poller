angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaClipboard, $cordovaToast, $interval, $cordovaLocalNotification) {
  $scope.sniffed = "";

$scope.sniffClipboard = function() {
  $cordovaClipboard.paste().then(function (result) {
      $scope.sniffed = result;
    });
  $cordovaToast.show('Sniffed: ' + $scope.sniffed, 'long', 'center');

  if ($scope.isEmailAddress($scope.sniffed)) {
    $cordovaLocalNotification.schedule({
        id: 1,
        title: 'Clipboard Sniffer - Email Address Found',
        text: $scope.sniffed,
      })
  }
};

$scope.isEmailAddress = function(text) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text);
}

$interval($scope.sniffClipboard, 3000);


})
