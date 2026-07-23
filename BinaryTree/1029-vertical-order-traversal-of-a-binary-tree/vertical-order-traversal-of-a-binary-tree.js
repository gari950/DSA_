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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    if (!root) return [];
    let map = new Map();
    let q = [];
    q.push([root,0,0]);
    while (q.length > 0) {
        let [node, row, col] = q.shift()
        if (!node) return;
        if (!map.get(col)) map.set(col, []);
        map.get(col).push([row, node.val]);
        if (node.left) {
            q.push([node.left, row + 1, col - 1]);
        }
        if (node.right) {
            q.push([node.right, row + 1,col + 1]);
        }
    }
    let ans = [];
    let cols = [...map.keys()].sort((a, b) => a - b);
    for(let c of cols){
        let arr = map.get(c).sort((a,b)=>{
            if(a[0]!=b[0])return a[0]-b[0];
            else return a[1]-b[1];
        });
        // console.log(arr)
        ans.push(arr.map(x=>x[1]));
    }
    // console.log(ans)
    return ans;
};