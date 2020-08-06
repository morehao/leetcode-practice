/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A === B) return A.length > new Set(A).size;
  if (A.length !== B.length) return false;
  let [ a, b ] = [ '', '' ]
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      a = A[i] + a;
      b += B[i];
    }
  }
  return a.length === 2 && a === b;
};
// @lc code=end

