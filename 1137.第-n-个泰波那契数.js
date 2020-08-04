/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = N => {
  if (N < 2) return N;
  if (N === 2) return 1;
  let [ firstTwo, pre, curr, temp ] = [ 0, 1, 1, 3 ];
  while (temp++ <= N) {
    const sum = firstTwo + pre + curr;
    firstTwo = pre;
    pre = curr;
    curr = sum;
  }
  return curr;
};
// @lc code=end

