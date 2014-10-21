'use strict';

angular.module('previewAngularApp')
  .controller('SampleapplicationCtrl', ['$scope','sampleApplicationFactory', 'message', 'greeting', 
  	function ($scope, sampleApplicationFactory, message, greeting) {
  		
    console.log('SampleapplicationCtrl Starting');

    console.log(message);
    console.log(sampleApplicationFactory.someMethod());
    console.log(greeting);
  }]);
