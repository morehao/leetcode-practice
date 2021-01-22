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
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

// 冒泡排序
// const sortArray = nums => {
//   nums.forEach(()=> {
//     for (let i = 0; i < nums.length - 1; i++) {
//       if (nums[i + 1] < nums[i]) exchangeElem(i + 1, i, nums);
//     }
//   })
//   return nums;
// };

// 冒泡排序之快慢指针
const sortArray = nums => {
  let [ low, high ] = [ 0, nums.length - 1 ];
  while(low < high) {
    for (let i = low; i < high; ++i) {
      if (nums[i + 1] < nums[i]) exchangeElem(i, i + 1, nums);
    }
    --high;
    for (let i = high; i > low; --i) {
      if (nums[i] < nums[i - 1]) exchangeElem(i, i - 1, nums);
    }
    ++low;
  }
  return nums;
}

// @lc code=end

