/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let [ slideWindows, max ] = [ [], 0 ];
  for(let item of s) {
    const deletedIndex = slideWindows.findIndex(e => e === item);
    if (deletedIndex > -1) {
      slideWindows.splice(0, deletedIndex + 1);
    }
    slideWindows.push(item);
    max = Math.max(slideWindows.length, max);
  }
  return max;
};
// @lc code=end

