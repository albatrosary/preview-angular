'use strict';

describe('Service: greetingService', function () {

  // load the service's module
  beforeEach(module('previewAngularApp'));

  // instantiate service
  var greetingService;
  beforeEach(inject(function (_greetingService_) {
    greetingService = _greetingService_;
  }));

  it('should do something', function () {
    expect(!!greetingService).toBe(true);
  });

});
