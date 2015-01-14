var proxy;

module.exports = function( year ) {
  // TODO: do a check here that it's a legit number at least, and year 
  proxy = { 
    contextYear : year, 
    parse : function( value ) {
      return Date.now();
    }
  };
  return proxy;
}

