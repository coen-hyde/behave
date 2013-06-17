var should = require('should')
  , behave = require('../');

describe('Behave', function() {
  it('should limit the amount of time a function can be called', function() {
    var count = 0
      , afterCalled = false
      , i;
    
    var modifiedFn = behave(5, function() {
      count++;
    }, function() {
      i.should.equal(5);
      afterCalled = true
    });

    for(i = 1; i <= 20; i++) {
      modifiedFn();
    }

    count.should.equal(5);
    afterCalled.should.equal(true);
  });
})