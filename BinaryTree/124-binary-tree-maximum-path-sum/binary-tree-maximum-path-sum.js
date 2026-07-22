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
 * @return {number}
 */

var maxPathSum = function(root) {
    let maxi = -Infinity;

    const getSum = (node) => {
        if (!node) return 0;

        // 1. Ignore negative sums by comparing with 0
        let lsum = Math.max(getSum(node.left),0);
        let rsum = Math.max(getSum(node.right),0);

        // 2. Update global max path passing through the current node
        maxi = Math.max(maxi, node.val + lsum + rsum);

        // 3. Return max single path extended to the parent node
        //path refers to -10 20 15 or -10 20 7
        return node.val + Math.max(lsum, rsum); 
    };

    getSum(root);
    return maxi;
};