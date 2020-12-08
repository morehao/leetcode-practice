/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];
  const bracketMap = { '[': ']', '{': '}', '(': ')' };
  for (const ele of s) {
    if (ele === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(bracketMap[ele]);
    }
  }
  return !stack.length;
};
// @lc code=end

