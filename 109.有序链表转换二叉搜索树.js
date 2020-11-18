/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function(head) {
  if (!head) return null;
  return buildTree(head, null);
};
const buildTree = (left, right) => {
   if (!left || left === right) return null;
   let slow = left;
   let fast = left;
   while(fast !== right && fast.next !== right) {
       slow = slow.next;
       fast = fast.next.next
   }
   let root = new TreeNode(slow.val);
   root.left = buildTree(left, slow);
   root.right = buildTree(slow.next, right);
   return root;
}
// @lc code=end

