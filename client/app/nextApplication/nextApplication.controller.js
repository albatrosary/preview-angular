'use strict';

angular.module('previewAngularApp')
  .controller('NextapplicationCtrl', function ($scope, message) {
  	console.log('NextapplicationCtrl');
  	console.log(message.message);
    $scope.message = 'Hello';
  });
