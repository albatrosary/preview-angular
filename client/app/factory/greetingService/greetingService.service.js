'use strict';

angular.module('previewAngularApp')
  .factory('greetingService', function () {
    // Service logic
    // ...


    console.log('greetingService Starting');
    console.log();
    var meaningOfLife = 'greetingService';

    // Public API here
    return {
      someMethod: function ($scope, $q, $timeout) {
        return meaningOfLife;
      }
    };
  });
