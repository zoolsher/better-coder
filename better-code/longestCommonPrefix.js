/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var longestCommonPrefixTwo = function (str1, str2) {
    var prefix = '';
    for (var i = 0; i < str1.length && i < str2.length; i++) {
      if (str1[i] === str2[i]) {
        prefix += str1[i];
      } else {
        return prefix;
      }
    }
    return prefix;
  }
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  var prefix = strs[0];
  for (var i = 1; i < strs.length; i++) {
    prefix = longestCommonPrefixTwo(prefix, strs[i]);
  }
  return prefix;
};

module.exports = longestCommonPrefix;
