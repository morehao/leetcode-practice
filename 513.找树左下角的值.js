/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = function(root) {
  let result;
  const treeArr = []
  treeArr.push(root);
  while(treeArr.length > 0) {
      const currentNode = treeArr.shift();
      result = currentNode.val;
      if (currentNode.right) treeArr.push(currentNode.right);
      if (currentNode.left) treeArr.push(currentNode.left);
  }
  return result;
};
// @lc code=end

