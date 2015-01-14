var expect = require('chai').expect;
var approxModule = require('../index');

describe('approximate parser ', function() {
  it('caches context year', function(){
    var approx = approxModule(2015)
    expect(approx).to.not.be.null;
    expect(approx.contextYear).to.equal(2015);
  });
  it('parses a simple colloquial date', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('JAN 15');
    expect(parsed.getTime()).to.equal(new Date('January 15, 2015').getTime());
  });
});


