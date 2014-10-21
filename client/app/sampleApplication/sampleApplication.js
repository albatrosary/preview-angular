'use strict';

angular.module('previewAngularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sampleApplication', {
        url: '/sampleApplication',
        templateUrl: 'app/sampleApplication/sampleApplication.html',
        controller: 'SampleapplicationCtrl',
        resolve: {
          message: function(messageService){
            return messageService.someMethod();
          },
          greeting: function(greetingService){
            return greetingService.someMethod();
          }
        }
      });
  });