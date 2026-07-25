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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let ans = [];
   
    function dfs(root, curpath){
    if (!root) {
        return ans;
    }
    curpath += root.val;

    if (!root.left && !root.right) {
            ans.push(curpath);
            return;
        }

    if (root.left) {
        dfs(root.left, curpath + "->");
    }
    if (root.right) {
        dfs(root.right, curpath + "->");
    }
    }
    dfs(root, "");
    return ans;
};