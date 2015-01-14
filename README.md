# approximate
A library to parse "approximate" dates

Example:

var approx = require('approximate')(2015);

var parsedDate = approx('JAN 15');
console.log(parsedDate); // yields ISO timestamp equivalent to January 15, 2015 00:00:00Zsomething something
