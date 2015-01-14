var expect = require('chai').expect;
var approxModule = require('../index');

describe('approximate parser ', function() {
  it('caches context year', function(){
    var approx = approxModule(2015)
    expect(approx).to.not.be.null;
    expect(approx.contextYear).to.equal(2015);
  });
  
  it('rejects bogus three-digit year', function(){
    var func = function() { var approx = approxModule(491) };
    expect(func).to.throw(Error);
  });

  it('rejects missing MMM', function(){
    var approx = approxModule(2015)
    var func = function() { approx.parse('15') };
    expect(func).to.throw(Error);
  });

  it('rejects bogus MMM', function(){
    var approx = approxModule(2015)
    var func = function() { approx.parse('FOO 15') };
    expect(func).to.throw(Error);
  });

  it('rejects bad (missing) DD', function(){
    var approx = approxModule(2015)
    var func = function() { approx.parse('JAN') };
    expect(func).to.throw(Error);
  });

  it('rejects bad (excess) DD', function(){
    var approx = approxModule(2015)
    var func = function() { approx.parse('JAN 1500') };
    expect(func).to.throw(Error);
  });

  it('parses a simple colloquial date', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('JAN 15 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('January 15, 2015').getTime());
  });
  
  it('parses a simple colloquial date with subsequent', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('JAN 15 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('January 15, 2015').getTime());
  });
});


