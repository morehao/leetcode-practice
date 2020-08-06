/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mapData = new Map();
    if (nums.length < 2) return [];
    let result;
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if(mapData.has(diff)) {
        result = [ mapData.get(diff), i ];
        break;
      } else {
        mapData.set(nums[i], i);
      }
    }
    return result;
};
// @lc code=end

