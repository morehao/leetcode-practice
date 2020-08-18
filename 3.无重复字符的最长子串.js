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
var lengthOfLongestSubstring = function(s) {
  let [ slideWindows, max ] = [ [], 0 ];
  const uniqueMap = new Map();
  for(let item of s) {
    if (uniqueMap.has(item)) {
      const deletedIndex = slideWindows.findIndex(e => e === item);
      slideWindows = slideWindows.slice(deletedIndex + 1).concat(item);
    } else {
      slideWindows.push(item);
    }
    uniqueMap.set(item, item);
    max = slideWindows.length > max ? slideWindows.length : max;
  }
  return max;
};
// @lc code=end

