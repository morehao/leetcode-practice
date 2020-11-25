/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// const searchInsert = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) return i;
//   }
//   return nums.length;
// };
const searchInsert = (nums, target) => {
  let leftIndex = 0, rightIndex = nums.length - 1;
  while(leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const middleValue = nums[middleIndex];
    if (target === middleValue) return middleIndex;
    target > middleValue ? leftIndex = middleIndex + 1 : rightIndex = middleIndex - 1;
  }
  return leftIndex;
}
// @lc code=end

