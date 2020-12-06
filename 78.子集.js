/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const result = [ [] ];
  for (let i = 0; i < nums.length; i++) {
    const len = result.length;
    for (let j = 0; j < len; j++) {
      result.push([...result[j].slice(), nums[i]]);
    }
  }
  return result;
};
// @lc code=end

