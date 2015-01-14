var expect = require('chai').expect;
var approxModule = require('../index');

describe('parse', function() {
  it('parses stuff but first make sure index works', function(){
    var approx = approxModule(2015)
    expect(approx).to.not.be.null;
    var parsed = approx.parse('JAN 15');
    expect(parsed).to.equal(new Date('January, 15, 2015'));
  });
});


