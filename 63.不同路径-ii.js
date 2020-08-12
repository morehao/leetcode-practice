/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] == 1) return 0;
  const [ m, n ] = [ obstacleGrid.length, obstacleGrid[0].length ];
  // 待排查为何以下初始化二维数组的方式会无法通过
  // const initArr = len => new Array(len);
  // const dp = initArr(m).fill(initArr(n));

  const dp = new Array(m);
  for (let i = 0; i < m; i++) dp[i] = new Array(n);
  dp[0][0] = 1; // 起点，方式只有1
  for (let i = 1; i < m; i++) { // 相邻两个格子，当前格子为障碍或前一个格子为障碍
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
  }
  for (let i = 1; i < n; i++) { // 相邻两个格子，当前格子为障碍或前一个格子为障碍
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

