/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let [ left, right ] = [ 0, nums.length - 1 ];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midNum = nums[mid];
    if (midNum > target) {
      right = mid - 1;
    } else if (midNum < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
// @lc code=end

