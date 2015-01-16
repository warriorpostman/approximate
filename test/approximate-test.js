var expect = require('chai').expect;
var approxModule = require('../index');

describe('approximate parser ', function() {
  it('caches context year', function(){

    var approx = approxModule(2015)
    expect(approx).to.not.be.null;
    expect(approx.contextYear).to.equal(2015);
  });
  
  it('rejects undefined', function(){
    var func = function() { var approx = approxModule(undefined) };
    expect(func).to.throw(Error);
  });

  it('rejects null', function(){
    var func = function() { var approx = approxModule(null) };
    expect(func).to.throw(Error);
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

  it('parses a string containing multiple date MMM DD and returns the last match', function(){
    var approx = approxModule(2015)
    var func = function() { approx.parse('JAN 15 and FEB 23 - some bands playing') };
    expect(func).to.throw(Error);
  });
  
  it('parses a string containing simple date MMM DD', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('JAN 15 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('January 15, 2015').getTime());
  });
  
  it('parses a string containing date (MMM DD) with trailing text', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('JAN 15 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('January 15, 2015').getTime());
  });

  it('parses a string containing date (MMM DD) with preceding text', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('Wednesday JAN 16 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('January 16, 2015').getTime());
  });

  it('parses a string containing date (MMM DD) with preceding text', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('Wednesday JAN 16 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('January 16, 2015').getTime());
  });

  it('parses a string containing date (MM/DD) with single-digit month', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('1/16 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('January 16, 2015').getTime());
  });

  it('parses a string containing date (MM/DD) with double-digit month', function(){
    var approx = approxModule(2015)
    var parsed = approx.parse('12/16 - Some Event - Some Bands');
    expect(parsed.getTime()).to.equal(new Date('December 16, 2015').getTime());
  });
});


