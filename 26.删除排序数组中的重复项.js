/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const size = nums.length;
  if(size==0) return 0;
  let slowP = 0;
  for (let fastP = 0; fastP < size; fastP++) {
      if (nums[fastP] !== nums[slowP]) {
          slowP++;
          nums[slowP] = nums[fastP]
      }
  }
  return slowP + 1;
};
// @lc code=end

