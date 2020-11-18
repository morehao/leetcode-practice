/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
const detectCycle = function(head) {
  if (head === null) return null;
  let slow = head, fast = head;
  let isCircle = false;
  while(fast !== null) {
      if (fast.next === null) return null;
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
          isCircle = true;
          break;
      }
  }
  if (!isCircle) return null;
  slow = head;
  while(slow !== fast) {
      slow = slow.next;
      fast = fast.next;
  }
  return slow;
};
// @lc code=end

