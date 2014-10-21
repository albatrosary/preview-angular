'use strict';

describe('Controller: SampleapplicationCtrl', function () {

  // load the controller's module
  beforeEach(module('previewAngularApp'));

  var SampleapplicationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleapplicationCtrl = $controller('SampleapplicationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
