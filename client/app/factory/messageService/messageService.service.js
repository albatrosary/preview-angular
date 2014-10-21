'use strict';

angular.module('previewAngularApp')
  .factory('messageService', function () {
    // Service logic
    // ...
    console.log('messageService Starting');

    var meaningOfLife = 'messageService';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
