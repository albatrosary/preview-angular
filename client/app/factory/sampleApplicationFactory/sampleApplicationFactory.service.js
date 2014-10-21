'use strict';

angular.module('previewAngularApp')
  .factory('sampleApplicationFactory', function () {

    console.log('sampleApplicationFactory Starting');

    var meaningOfLife = 'sampleApplicationFactory';

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
