var isPalindrome = require('./../better-code/isPalindrome');
var assert = require('assert');

describe('isPalindrome', function () {
  it('121', function () {
    assert.equal(isPalindrome(121), true);
  });
  it('1222', function () {
    assert.equal(isPalindrome(1222), false);
  });
  it('0', function () {
    assert.equal(isPalindrome(0), true);
  });
})
