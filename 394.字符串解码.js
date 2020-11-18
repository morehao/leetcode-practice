/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
  const stack = [];
  for (const ele of s) {
    if (ele === ']') {
      let repeatStr = '', repeatCount = '';
      while(stack.length && stack[stack.length - 1] !== '[') {
        // 拼接最终的重复字符串
        repeatStr = `${stack.pop()}${repeatStr}`;
      }
      // 删除栈顶的[
      stack.pop();
      while(stack.length && Number.isInteger(Number(stack[stack.length - 1]))) {
          // 计算重复字符串需要重复的次数
          repeatCount = `${stack.pop()}${repeatCount}`;
      }
      stack.push(repeatStr.repeat(Number(repeatCount)));
    } else {
      stack.push(ele);
    }
  }
  return stack.join('');
};
// @lc code=end

