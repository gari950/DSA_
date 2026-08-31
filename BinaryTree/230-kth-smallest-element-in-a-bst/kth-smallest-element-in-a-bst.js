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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, key) {
    let result = 0,k=0;
    
    function inorder(node) {
        if (!node) return;
        
        inorder(node.left);
        
        k++;
        if (k === key) {
            result = node.val;
            return;
        }
        
        inorder(node.right);
    }
    
    inorder(root);
    return result;
};