/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
    
  if (!head || !head.next) return head;
  const hash = new Map();
  let currentNode = head, listLen = 0;
  while(currentNode && ++listLen) {
      hash.set(listLen, currentNode);
      currentNode = currentNode.next;
  }
  k = k % listLen;
  
  hash.get(listLen).next = head;
  head = hash.get(listLen - k).next;
  hash.get(listLen - k).next = null;
  return head;
};
// @lc code=end

