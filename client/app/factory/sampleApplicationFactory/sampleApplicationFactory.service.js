'use strict';

angular.module('previewAngularApp')
  .factory('sampleApplicationFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 'sampleApplicationFactory';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
