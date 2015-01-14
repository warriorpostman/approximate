var proxy;

module.exports = function( year ) {
  if (!year.toString().match(/[0-9]{4}/g).length == 1)
    throw new Error(year + ' is not a legit year');
  var contextYear = year;
  // TODO: do a check here that it's a legit number at least, and year 
  proxy = { 
    contextYear : contextYear, 
    parse : function( value ) {
      var lower = value.toLowerCase();
      var matches = lower.match(
          /(jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec)\ +[0-9]{1,2}[^0-9]*$/g
          );
      if (matches && matches.length == 1) {
        // so janky
        var match = value.toLowerCase().match(
         /(jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec)\ +[0-9]{1,2}[^0-9]/g
         );
        return new Date(match + ', ' + contextYear); 
      } else {
        throw new Error(value + ' can\'t be parsed.');
      }
    }
  };
  return proxy;
}

