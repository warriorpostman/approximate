var proxy;

module.exports = function( year ) {
  var contextYear = year;
  // TODO: do a check here that it's a legit number at least, and year 
  proxy = { 
    contextYear : contextYear, 
    parse : function( value ) {
      var lower = value.toLowerCase();
      var matches = lower.match(
          /(jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec)\ +[0-9]{1,2}$/g
          );
      if (matches && matches.length == 1)
        return new Date(value + ', ' + contextYear); 
      else 
        throw new Error(value + ' can\'t be parsed.');
    }
  };
  return proxy;
}

