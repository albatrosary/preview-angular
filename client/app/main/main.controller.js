'use strict';

angular.module('previewAngularApp')
  .controller('MainCtrl', function ($scope, $http, $exceptionHandler) {
    $scope.awesomeThings = [];

    $scope.errormessage = $exceptionHandler;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
