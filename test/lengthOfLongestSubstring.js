var assert = require('assert');
var lengthOfLongestSubstring = require('./../better-code/lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', function () {
  it('abcabcbb', function () {
    assert.equal(lengthOfLongestSubstring('abcabcbb'), '3');
  });
  it('bbbbb', function () {
    assert.equal(lengthOfLongestSubstring('bbbbb'), '1');
  });
  it('pwwkew', function () {
    assert.equal(lengthOfLongestSubstring('pwwkew'), '3');
  });
});
