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
 * @param {number} key
 * @return {TreeNode}
 */

 /*
var deleteNode = function (root, key) {
    if (root == null) return null;
    if(root.val == key) return helper(root);
    let cur = root;
    while (root != null) {
        if (root.val <= key) {
            if (root.right && root.right.val === key) {
                root.right = helper(root.right);
                break;
            } else {
                root = root.right;
            }
        } else {
            if (root.left && root.left.val == key) {
                root.left = helper(root.left);
                break;
            } else {
                root = root.left;
            }
        }
    }
    function helper(node){
        if(node.left == null){
            return node.right;
        }
        else if(node.right == null){
            return node.left;
        }
        let rightChild = node.right;
        let lastRight = lastRightChild(node.left);
        lastRight.right = rightChild;
        return root.lrft;
    }
    function lastRightChild(root){
        if(root.right == null){
            return root;
        }
        return lastRightChild(root.right);
    }
    return cur;
};
*/

var deleteNode = function(root, key) {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Case 1 & 2: Node has 0 or 1 child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 3: Node has 2 children
        // Find the min value node in the right subtree (inorder successor)
        let curr = root.right;
        while (curr.left) {
            curr = curr.left;
        }
        
        // Replace current value with successor's value
        root.val = curr.val;
        
        // Delete the successor node from right subtree
        root.right = deleteNode(root.right, curr.val);
    }

    return root;
};