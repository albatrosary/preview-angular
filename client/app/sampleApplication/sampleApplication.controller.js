'use strict';

angular.module('previewAngularApp')
  .controller('SampleapplicationCtrl', ['$scope', 'sampleApplicationFactory', function ($scope, sampleApplicationFactory) {
    
    $scope.message = 'Hello';

    console.log($scope.message);
    console.log(sampleApplicationFactory.someMethod());
    console.log($scope.greeting);
  }]);
