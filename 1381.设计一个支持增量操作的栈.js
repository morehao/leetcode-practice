/*
 * @lc app=leetcode.cn id=1381 lang=javascript
 *
 * [1381] 设计一个支持增量操作的栈
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
CustomStack.prototype.push = function(x) {
  if (this.stack.length < this.maxSize) this.stack.push(x);
};

/**
* @return {number}
*/
CustomStack.prototype.pop = function() {
  const len = this.stack.length;
  return len < 1 ? -1 : this.stack.pop();
};

/** 
* @param {number} k 
* @param {number} val
* @return {void}
*/
CustomStack.prototype.increment = function(k, val) {
  const len = this.stack.length;
  for (let i = 0; i < len; i++) {
      if (i >= k) return;
      this.stack[i] += val;
  }
};

/**
* Your CustomStack object will be instantiated and called as such:
* var obj = new CustomStack(maxSize)
* obj.push(x)
* var param_2 = obj.pop()
* obj.increment(k,val)
*/
// @lc code=end

