/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function exchangeElem (i, j, arr) {
  if (i < 0 || i > arr.length) return;
  if (j < 0 || j > arr.length) return;
  if (arr[i] < arr[j]) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}

// 冒泡排序
const sortArray = nums => {
  nums.forEach(()=> {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] < nums[i]) exchangeElem(i + 1, i, nums);
    }
  })
  return nums;
};
// @lc code=end

