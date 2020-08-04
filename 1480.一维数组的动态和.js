/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = nums => {
  if (nums.length === 1) return nums;
  const [ result, keys ] = [[], nums.keys() ];
  for (const index of keys) {
    if (index === 0) {
      result.push(nums[index]);
    } else {
      result.push(result[index - 1] + nums[index]);
    }
  }
  return result;
};
// @lc code=end

