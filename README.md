# approximate
A library to parse "approximate" dates. 

  Trivial example:
  var approx = require('approximate')(2015);
    ```javascript
    var parsedDate = approx('JAN 15');
    console.log(parsedDate); // yields ISO timestamp equivalent to January 15, 2015 00:00:00Zsomething something
    ```

  More complicated example: But what if I want to parse a more complex string and just get a valid Date object? Then I can do the same thing:
    ```javascript
    var parsedDate = approx('JAN 15 - THE WILD ATARIS, LARGE TYPHOON, THE IGNORANT GOATS');
    console.log(parsedDate); // yields ISO timestamp equivalent to January 15, 2015 00:00:00Zsomething something
    ```

How to install:
  npm install approximate



