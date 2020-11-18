/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  if (!root) return [];
  const posHash = {};
  function dfs(root, x, y) {
    if (!root) return;
    if (!posHash[x]) posHash[x] = [];
    posHash[x].push([y, root.val]);
    dfs(root.left, x - 1, y - 1);
    dfs(root.right, x + 1, y - 1);
  }
  dfs(root, 0, 0);
  let sortedTree;
  let xSorted = Object.keys(posHash).sort((a, b)=> a - b);
  sortedTree = xSorted.map(key => posHash[key]);
  sortedTree = sortedTree.map( xEle => {
    xEle.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return b[0] - a[0];
    })
    return xEle.map(ele => ele[1]);
  })
  return sortedTree;
};
// @lc code=end

