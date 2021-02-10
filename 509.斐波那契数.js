/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// const fib = N => {
//   if (N < 2) return N;
//   if (N === 2) return 1;
//   return fib(N - 2) + fib(N - 1);
// }
const fib = N => {
  if (N < 2) return N;
  if (N === 2) return 1;
  let [ pre, curr, temp ] = [ 1, 1, 3 ];
  while (temp++ <= N) {
    const sum = pre + curr;
    pre = curr;
    curr = sum;
  }
  return curr;
};

// @lc code=end

