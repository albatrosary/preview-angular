'use strict';

describe('Controller: NextapplicationCtrl', function () {

  // load the controller's module
  beforeEach(module('previewAngularApp'));

  var NextapplicationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NextapplicationCtrl = $controller('NextapplicationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
