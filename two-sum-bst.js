/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const set = new Set()
  function travTree (node, target) {
    if (!node) return false

    if (set.has(target - node.val)) return true
    set.add(node.val)
    return travTree(node.left, target) || travTree(node.right, target)
  }

  return travTree(root, k)
};