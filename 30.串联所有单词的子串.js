/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  if (words.length < 1) return [];
  const hashMap = {}, result = [];
  for (const ele of words) {
    hashMap[ele] ? hashMap[ele]++ : hashMap[ele] = 1;
  }
  const oneWordLen = words[0].length, allWordLen = words.length * words[0].length, sLen = s.length;
  for (let i = 0; i < sLen - allWordLen + 1; i++) {
    const tempHashMap = {...hashMap};
    for (let j = i; j < i + allWordLen - oneWordLen + 1; j+=oneWordLen) {
      const sliceStr = s.slice(j, j + oneWordLen);
      if (!tempHashMap[sliceStr]) break;
      tempHashMap[sliceStr]--;
    }
    if (Object.values(tempHashMap).every(val => val === 0)) result.push(i);
  }
  return result;
};
// @lc code=end

