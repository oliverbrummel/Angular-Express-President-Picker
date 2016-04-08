var app = angular.module('getPrez', []);

app.controller('PrezController', function($scope, $http){
  $scope.democrats = [];
  $scope.republicans = [];
  $scope.getRandomNumber = function(min, max){
    return Math.floor(Math.random()* (max - min)) + min
  }

  $scope.makeList = function(){
    $scope.clickedShow = true;
    $http.get('/democrats').then(function(response){
      $scope.democrats = response.data;
    })
    $http.get('/republicans').then(function(response){
      $scope.republicans = response.data;
    })
  };

  $scope.getWinner = function(){
    $scope.clickedWinner = true;
    $scope.totalCandidates = $scope.democrats.concat($scope.republicans);
    $scope.winner = $scope.totalCandidates[$scope.getRandomNumber(0,12)];
  }


//closes the app.controller
});
