/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const result = [];
  for (let i = 0; i < S.length; i++) {
      let left = right = i;
      while(left > -1) {
          if (S[left] === C) break;
          left -= 1;
        }
      while(right < S.length) {
        if (S[right] === C) break;
        right += 1;
      }
      if (left !== -1 && right !== S.length) {
        result.push(Math.min(i - left, right - i));
      } else if (left === -1) {
        result.push(right - i);
      } else {
        result.push(i - left);
      }
  }
  return result;
};
// @lc code=end

