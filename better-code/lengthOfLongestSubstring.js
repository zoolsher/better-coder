/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) { return 0; }

  var chars = new Array(128);
  chars.fill(-1);
  var length = 0;
  var i = 0, j = 0;
  for (; j < s.length; j++) {
    i = Math.max(i, chars[s.charCodeAt(j)]);
    length = Math.max(length, j - i + 1);
    chars[s.charCodeAt(j)] = j + 1;
  }

  return length;
};

module.exports = lengthOfLongestSubstring;
