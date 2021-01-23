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
// const sortArray = nums => {
//   let [ low, high ] = [ 0, nums.length - 1 ];
//   while(low < high) {
//     for (let i = low; i < high; ++i) {
//       if (nums[i + 1] < nums[i]) exchangeElem(i, i + 1, nums);
//     }
//     --high;
//     for (let i = high; i > low; --i) {
//       if (nums[i] < nums[i - 1]) exchangeElem(i, i - 1, nums);
//     }
//     ++low;
//   }
//   return nums;
// }
// 冒泡排序之记录交换位置
// const sortArray = nums => {
//   let i = nums.length - 1;
//   while(i > 0) {
//     let pos = 0;
//     for (let j = 0; j < i; j++) {
//       if (nums[j + 1] < nums[j]) {
//         exchangeElem(j, j + 1, nums);
//         pos = j;
//       }
//     }
//     i = pos;
//   }
//   return nums;
// }

// 插入排序
// const sortArray = nums => {
//   for (let i = 1; i < nums.length; i++) {
//     const key = nums[i];
//     let j = i;
//     while(j > 0 && nums[j - 1] > key) {
//       nums[j] = nums[j - 1];
//       j--;
//     }
//     nums[j] = key
//   }
//   return nums;
// }

// 归并排序
function merge (leftNums, rightNums) {
  const result = [];
  while(leftNums.length && rightNums.length) {
    if (leftNums[0] <= rightNums[0]) {
      result.push(leftNums.shift());
    } else {
      result.push(rightNums.shift());
    }
  }
  while(leftNums.length) result.push(leftNums.shift())
  while(rightNums.length) result.push(rightNums.shift())
  return result;
}
function mergeSort(nums) {
  const len = nums.length;
  if (len <= 1) return nums;
  const midIndex = Math.floor(len / 2);
  const leftNums = nums.slice(0, midIndex);
  const rightNums = nums.slice(midIndex);
  return merge(mergeSort(leftNums), mergeSort(rightNums));
}
const sortArray = nums => {
  return mergeSort(nums);
}

// 快速排序
// function partition (left, right, nums) {
//   const pivot = nums[Math.floor((right + left) / 2)];
//   let [ i, j ] = [ left, right ];
//   while(i <= j) {
//     while(nums[i] < pivot) i++;
//     while(pivot < nums[j]) j--;
//     if (i <= j) {
//       exchangeElem(i, j, nums);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

// function quickSort (left, right, nums) {
//   if (nums.length < 2) return;
//   const pivotIndex = partition(left, right, nums);
//   if (left < pivotIndex - 1) quickSort(left, pivotIndex - 1, nums);
//   if (right > pivotIndex) quickSort(pivotIndex, right, nums);
// }

// const sortArray = nums => {
//   if (nums.length < 2) return nums;
//   quickSort(0, nums.length - 1, nums);
//   return nums;
// }
// @lc code=end

