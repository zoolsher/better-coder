var findMedianSortedArrays = require('./../better-code/findMedianSortedArrays');
var assert = require('assert');

describe('findMedianSortedArrays', function () {
  it('[1,2,3],[3,4]', function () {
    assert.equal(findMedianSortedArrays([1, 2, 3], [3, 4]), 3);
  })
  it('[1,3],[2]', function () {
    assert.equal(findMedianSortedArrays([1, 3], [2]), 2);
  })
  it('[1,2],[3,4]', function () {
    assert.equal(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
  })
  it('[],[1]', function () {
    assert.equal(findMedianSortedArrays([], [1]), 1);
  })
})

