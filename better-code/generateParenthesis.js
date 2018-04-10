/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var res = [];
  var stack = [['', n, n]];
  while (stack.length !== 0) {
    var [ str, l, r ] = stack.pop();
    if (r === 0) {
      res.push(str);
      continue;
    }
    if (l === 0) {
      stack.push([str + ')', l, r - 1]);
      continue;
    }
    if (l === r) {
      stack.push([str + '(', l - 1, r]);
      continue;
    }
    stack.push([str + ')', l, r - 1]);
    stack.push([str + '(', l - 1, r]);
  }
  return res;
};

module.exports = generateParenthesis;
