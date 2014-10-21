'use strict';

describe('Service: sampleApplicationFactory', function () {

  // load the service's module
  beforeEach(module('previewAngularApp'));

  // instantiate service
  var sampleApplicationFactory;
  beforeEach(inject(function (_sampleApplicationFactory_) {
    sampleApplicationFactory = _sampleApplicationFactory_;
  }));

  it('should do something', function () {
    expect(!!sampleApplicationFactory).toBe(true);
  });

});
