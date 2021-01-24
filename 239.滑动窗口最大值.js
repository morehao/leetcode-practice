/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//   if (k === 0) return [];
//   const [ length, result ] = [ nums.length, [] ];
//   for (let i = 0; i < length - k + 1; i++) {
//     let max = Number.MIN_SAFE_INTEGER;
//     for(let j = i; j < i + k; j++) {
//       max = Math.max(max, nums[j]);
//     }
//     result.push(max);
//   }
//   return result;
// };

class MyQueue {
  constructor(nums) {
    this.list = nums;
  }

  push(val) {
    // 队列从队头到队尾递减
    while (this.list[this.list.length - 1] < val) this.list.pop();
    this.list.push(val);
  }

  shift(val) {
    if (this.list[0] === val) this.list.shift();
  }

  max() {
    return this.list[0];
  }
}
const maxSlidingWindow = (nums, k) => {
  if (k === 0) return [];
  const [ queue, result ] = [ new MyQueue([]), [] ];
  // 构造第一个窗口
  for (let i = 0; i < k - 1; i++) {
    queue.push(nums[i]);
  }
  // 开始滑动窗口
  for (let i = k - 1; i < nums.length; i++) {
    // 右边新元素进入队列
    queue.push(nums[i]);
    // 记录队列中最大元素
    result.push(queue.max());
    // 左边元素出队列
    queue.shift(nums[i - k + 1]);
  }
  return result;
}
// @lc code=end

