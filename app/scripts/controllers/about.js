var app = angular.module('Modul', []);

app.controller('kontroler',['$scope', function($scope){

  $scope.NoCopied = false;
  $scope.NoPaste = false;
  $scope.NoClick = false;
  $scope.clickNoDblClick = false;
  $scope.displayNone = false;
  $scope.showAgain = false;

  $scope.copyNo = function () {
  	$scope.NoCopied = true;
  };

  $scope.pasteNo = function () {
  	$scope.NoPaste = true;
  };

  $scope.clickNo = function () {
    $scope.NoClick = true;
  };

  $scope.clickNoDblClick = function () {
   alert("Kozakiem jesteś");
  };

  $scope.wylacz = function () {
    $scope.displayNone = true;
  };

  $scope.wlacz = function () {
    $scope.showAgain = true;
  };


}]);
