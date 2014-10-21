'use strict';

angular.module('previewAngularApp')
  .factory('greetingService', function () {
    // Service logic
    // ...
    console.log('greetingService Starting');

    var meaningOfLife = 'greetingService';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
