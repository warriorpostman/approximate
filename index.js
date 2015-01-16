(function() {
  var proxy;

  module.exports = function( year ) {
    if (!year.toString().match(/[0-9]{4}/g).length == 1)
      throw new Error(year + ' is not a legit year');
    var contextYear = year;

    proxy = { 
      contextYear : contextYear, 

      parse : function( value ) {
        var lower = value.toLowerCase();
        var matches = lower.match(
            /(jan|feb|mar|apr|jun|jul|aug|sep|oct|nov|dec)\ +[0-9]{1,2}[^0-9]/g
            );
        if (matches && matches.length == 1) {
          return new Date(matches[0] + ', ' + contextYear); 
        } else {
          return proxy.parseGeneralDate( value )
        }
      },

      parseGeneralDate : function( value ) {
        var lower = value.toLowerCase();
        var matches = lower.match(
            /(1|2|3|4|5|6|7|8|9|10|11|12)\/[0-9]{1,2}[^0-9]/g
            );
        if (matches && matches.length == 1) {
          return new Date(matches[0] + '/' + contextYear); 
        } else {
          throw new Error(value + ' can\'t be parsed.');
        }
      }

      
    };
    return proxy;
  }
})()

