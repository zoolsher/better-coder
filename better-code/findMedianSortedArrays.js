/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var halfLen = Math.ceil((nums1.length + nums2.length) / 2);
  var i = 0;
  var j = 0;
  while (i + j < halfLen) {
    if (i >= nums1.length) {
      j++;
      continue;
    }
    if (j >= nums2.length) {
      i++;
      continue;
    }
    if (nums1[i] <= nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    }
  }
  var maxOfLeft;
  if (i === 0) {
    maxOfLeft = nums2[j - 1];
  } else if (j === 0) {
    maxOfLeft = nums1[i - 1];
  } else {
    maxOfLeft = Math.max(nums2[j - 1], nums1[i - 1]);
  }

  var minOfRight;
  if ((nums1.length + nums2.length) % 2 === 0) {
    if (i === nums1.length) {
      minOfRight = nums2[j];
    } else if (j === nums2.length) {
      minOfRight = nums1[i];
    } else {
      minOfRight = Math.min(nums1[i], nums2[j]);
    }
    return (minOfRight + maxOfLeft) / 2;
  } else {
    return maxOfLeft;
  }
};



module.exports = findMedianSortedArrays
