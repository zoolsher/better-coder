var assert = require('assert');
var twoSum = require('./../better-code/two-sum');
describe('two-sum', function () {
  it('answer near left', function () {
    var nums = [2, 7, 11, 15];
    var target = 9;
    var res = twoSum(nums, target);

    assert.deepEqual([0, 1], res);
  });
  it('no answer', function () {
    var nums = [1, 2, 3, 4];
    var target = 8;
    var res = twoSum(nums, target);
    assert.deepEqual([0, 0], res);
  });
  it('answer near', function () {
    var nums = [0, 2, 4, 7, 9, 11, 17, 18];
    var target = 6;
    var res = twoSum(nums, target);
    assert.deepEqual([1, 2], res);
  });
  it('answer near right', function () {
    var nums = [0, 2, 4, 7, 9, 11, 17, 18];
    var target = 35;
    var res = twoSum(nums, target);
    assert.deepEqual([6, 7], res);
  });
  it('negetive array', function () {
    var nums = [-1, -2, -3, -4, -5];
    var target = -8;
    var res = twoSum(nums, target);
    assert.deepEqual([2, 4], res);
  })
});
