/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var calcHeight = (root) => {
    if(root==null)return 0;
    let cnt=0;
    cnt = 1 + Math.max(calcHeight(root.left), calcHeight(root.right));
    return cnt;
}
var isBalanced = function(root) {
    if(root===null)return true;
    let h1 = calcHeight(root.left);
    let h2 = calcHeight(root.right);
    console.log(h1, h2,Math.abs(h1-h2)<=1);
    let left = isBalanced(root.left); 
    let right = isBalanced(root.right);
    if(Math.abs(h1-h2) > 1)return false;
    if(!left || !right)return false;
    return true;
};