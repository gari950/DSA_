/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let index = postorder.length - 1;
    let map = new Map();
    inorder.forEach((val, i) => map.set(val, i));
    function helper(start, end) {
        if (start > end) return null;
        let rootVal = postorder[index--];
        let root = new TreeNode(rootVal);
        let mid = map.get(rootVal);
        root.right = helper(mid + 1, end);
        root.left = helper(start, mid - 1);
        return root;
    };
    return helper(0, inorder.length - 1);

};