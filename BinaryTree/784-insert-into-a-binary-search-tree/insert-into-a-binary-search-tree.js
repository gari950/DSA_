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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root == null)return new TreeNode(val);
    let cur = root;
    while(true){
        if(val >= cur.val){
            if(cur.right) cur = cur.right;
            else{
                cur.right = new TreeNode(val);
                break;
            }
        }else{
            if(cur.left) cur = cur.left;
            else{
                cur.left = new TreeNode(val);
                break;
            }
        }
    }
    return root;
};