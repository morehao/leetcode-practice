/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 0) return [];
  const [ length, result ] = [ nums.length, [] ];
  for (let i = 0; i < length - k + 1; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for(let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    result.push(max);
  }
  return result;
};
// @lc code=end

