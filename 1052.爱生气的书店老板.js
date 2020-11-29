/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
const maxSatisfied = (customers, grumpy, X) => {
  let total = 0;
  let max = 0, tempGrumpyTotal = 0;
  let left = 0, right = 0;
  while (right < customers.length) {
    // 计算未使用秘密技巧时满意顾客总数
    total += grumpy[right] ? 0 : customers[right];
    // 计算使用秘密技巧后区间x内不满意顾客总数
    tempGrumpyTotal += grumpy[right] ? customers[right] : 0;
    if (right - left + 1 > X) {
      tempGrumpyTotal -= grumpy[left] ? customers[left] : 0;
      left++;
    }
    max = Math.max(tempGrumpyTotal, max);
    right++;
  }
  return total + max;
};
// @lc code=end

