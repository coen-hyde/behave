module.exports = function(limit, fn, afterFn) {
  var count = 0;

  return function() {
    if (count === limit) {
      // Limit has been reached
      return
    }

    count++
    fn();

    if (count === limit) {
      // Limit was reached for the first time
      afterFn();
    }
  }
}