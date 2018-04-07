/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  var map = { '}': '{', ')': '(', ']': '[' };
  i = -1;
  while (++i < s.length) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (stack.pop() !== map[s[i]]) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
