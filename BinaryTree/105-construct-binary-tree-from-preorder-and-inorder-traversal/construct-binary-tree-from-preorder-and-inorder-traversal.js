/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// JavaScript implementation
var buildTree = function(preorder, inorder) {
    let index = 0;
    const map = new Map();
    inorder.forEach((val, i) => map.set(val, i));

    function helper(start, end) {
        if (start > end) return null;

        const rootVal = preorder[index++];
        const node = new TreeNode(rootVal);
        const mid = map.get(rootVal);

        node.left = helper(start, mid - 1);
        node.right = helper(mid + 1, end);
        return node;
    }

    return helper(0, inorder.length - 1);
};