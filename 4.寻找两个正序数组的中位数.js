/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const [ m, n ] = [ nums1.length, nums2.length ];
  const mergeArr = [];
  let [ i, j] = [ 0, 0 ];
  while(i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      mergeArr.push(nums1[i++]);
    } else {
      mergeArr.push(nums2[j++]);
    }
  }
  while (i < m) {
    mergeArr.push(nums1[i++]);
  }
  while (j < n) {
    mergeArr.push(nums2[j++]);
  }
  const { length } = mergeArr;
  return length % 2 === 1
    ? mergeArr[Math.floor(length / 2)]
    : (mergeArr[length / 2] + mergeArr[length / 2 - 1]) / 2;
};
// @lc code=end

