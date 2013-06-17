var should = require('should')
  , behave = require('../');

describe('Behave', function() {
  it('should limit the amount of time a function can be called', function() {
    var count = 0
      , afterCalled = false;
    
    var modifiedFn = behave(5, function() {
      count++;
    }, function() {
      afterCalled = true
    });

    for(var i = 0; i < 20; i++) {
      modifiedFn();
    }

    count.should.equal(5);
    afterCalled.should.equal(true);
  });
})