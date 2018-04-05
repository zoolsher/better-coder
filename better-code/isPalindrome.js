/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) { return false; }
  var reversed = 0;
  while (reversed < x) {
    reversed = reversed * 10 + x % 10;
    x = Math.ceil(x / 10);
  }
  return (x === reversed) || (x === Math.ceil(reversed / 10));
};

module.exports = isPalindrome;
