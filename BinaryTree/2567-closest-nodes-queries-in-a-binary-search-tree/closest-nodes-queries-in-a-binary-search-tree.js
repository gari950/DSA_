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
 * @param {number[]} queries
 * @return {number[][]}
 */

 /*
var closestNodes = function (root, queries) {
    function cielofNode(root, q) {
        let c = -1;
        while (root) {
            if (root.val === q) {
                c = root.val;
                return c;
            }
            if (q <= root.val) {
                c = root.val;
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return c;
    }
    function floorofNode(root, q) {
        let f = -1;
        while (root) {
            if (root.val === q) {
                f = root.val;
                return f;
            }
            if (q >= root.val) {
                f = root.val;
                root = root.right;
            } else {
                root = root.left;
            }
        }
        return f;
    }
    let ans = [];
    for (let q of queries) {
        let c = cielofNode(root, q);
        let f = floorofNode(root, q);
        ans.push([f, c]);
    }
    return ans;
};
*/

var closestNodes = function(root, queries) {
    const sorted = [];
    
    // Step 1: In-order traversal to get sorted elements
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        sorted.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    
    const n = sorted.length;
    const ans = [];
    
    // Step 2: Binary search for each query
    for (const q of queries) {
        let left = 0, right = n - 1;
        let floor = -1, ceil = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (sorted[mid] === q) {
                floor = sorted[mid];
                ceil = sorted[mid];
                break;
            } else if (sorted[mid] < q) {
                floor = sorted[mid]; // Best floor seen so far
                left = mid + 1;
            } else {
                ceil = sorted[mid];  // Best ceil seen so far
                right = mid - 1;
            }
        }
        
        ans.push([floor, ceil]);
    }
    
    return ans;
};