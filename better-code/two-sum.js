/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var mTarget = map[target - nums[i]];
    if (mTarget !== undefined) {
      return [mTarget, i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [0, 0];
};
module.exports = twoSum;
