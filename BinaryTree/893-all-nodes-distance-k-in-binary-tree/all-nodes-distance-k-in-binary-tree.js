/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var distanceK = function(root, target, k) {
    if (!root) return [];

    // Step 1: Map each node to its parent using BFS/DFS
    const parentMap = new Map();
    
    function markParents(node) {
        if (!node) return;
        if (node.left) {
            parentMap.set(node.left, node);
            markParents(node.left);
        }
        if (node.right) {
            parentMap.set(node.right, node);
            markParents(node.right);
        }
    }
    markParents(root);

    // Step 2: Initialize BFS from `target`
    const queue = [target];
    const visited = new Set([target]);
    let currentDistance = 0;

    // Step 3: Traverse level-by-level
    while (queue.length > 0) {
        // If we reached distance k, return all values currently in the queue
        if (currentDistance === k) {
            return queue.map(node => node.val);
        }

        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const curr = queue.shift();

            // Check 3 possible directions:
            const neighbors = [
                curr.left,                     // Down Left
                curr.right,                    // Down Right
                parentMap.get(curr)            // Upward (Parent)
            ];

            for (const neighbor of neighbors) {
                if (neighbor && !visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        currentDistance++;
    }

    return [];
};