/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 状态转移方程：f(i, j) = f(i - 1, j) + f(i, j - 1)
var uniquePaths = (m, n) => {
  const initArr = len => new Array(len);
  const result = initArr(m).fill(initArr(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      result[i][j] = result[i - 1][j] + result[i][j - 1];
    }
  }
  return result[m - 1][n - 1];
};
// @lc code=end

