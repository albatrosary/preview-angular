'use strict';

angular.module('previewAngularApp')
  .controller('SampleapplicationCtrl', ['$scope','$state','sampleApplicationFactory', 'message', 'greeting', 
  	function ($scope, $state, sampleApplicationFactory, message, greeting) {
  	  console.log('SampleapplicationCtrl Starting');
      
  	  console.log($state.current.data.customData1)
      console.log(message);
      console.log(sampleApplicationFactory.someMethod());
      console.log(greeting);
    }]);
