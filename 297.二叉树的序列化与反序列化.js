/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
  const result = [];
  const helpArr = [];
  helpArr.push(root);
  while(helpArr.length > 0) {
      const currentNode = helpArr.shift();
      if (currentNode) {
          result.push(currentNode.val);
          helpArr.push(currentNode.left);
          helpArr.push(currentNode.right);
      } else {
          result.push('null');
      }
  }
  return result.join(',');
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
const deserialize = function(data) {
  if (data === 'null') return null;
  const arr = data.split(',');
  const root = new TreeNode(arr[0]);
  const helpArr = [];
  helpArr.push(root);
  let leftIndex = 1;
  while(leftIndex < arr.length) {
    const currentNode = helpArr.shift();
    const left = arr[leftIndex];
    const right = arr[leftIndex + 1];
    if (left !== 'null') {
      const leftNode = new TreeNode(left);
      currentNode.left = leftNode;
      helpArr.push(leftNode);
    }
    if (right !== 'null') {
      const rightNode = new TreeNode(right);
      currentNode.right = rightNode;
      helpArr.push(rightNode);
    }
    leftIndex += 2;
  }
  return root;
}
/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
// @lc code=end

