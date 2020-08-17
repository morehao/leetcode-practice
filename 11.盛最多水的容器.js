/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//   const len = height.length;
//   let max = 0;
//   for (let i = 0; i < len; i++) {
//     for(let j = i + 1; j < len; j++) {
//       const currentArea = Math.abs(i - j)*Math.min(height[i], height[j]);
//       max = max > currentArea ? max : currentArea;
//     }
//   }
//   return max;
// };
var maxArea = function(height) {
  let [ left, right, max ] = [ 0, height.length - 1, 0 ];
  while(left < right) {
    const currentArea = Math.abs(right - left)*Math.min(height[left], height[right]);
    max = max > currentArea ? max : currentArea;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
// @lc code=end

