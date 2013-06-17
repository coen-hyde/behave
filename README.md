Behave
======

Behave wraps a function to limit the amount of times it can be called, then calls the a notifier function once that limit has been reached.

Usage
-----

```js
var behave = require('behave');

var myfunc = behave(5, function() {
  console.log('Hello');
}, function() {
  console.log('Good bye');
});

for (var i = 0; i < 20; i++) {
  myfunc();
}

```

The above example will print.

   Hello
   Hello
   Hello
   Hello
   Hello
   Good Bye

