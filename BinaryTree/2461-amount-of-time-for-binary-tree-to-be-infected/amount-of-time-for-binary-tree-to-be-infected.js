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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    const graph = new Map();

    // 1. Convert tree to undirected graph
    function buildGraph(node, parent) {
        if (!node) return;
        
        if (!graph.has(node.val)) {
            graph.set(node.val, []);
        }
        
        if (parent !== null) {
            graph.get(node.val).push(parent);
            graph.get(parent).push(node.val);
        }
        
        buildGraph(node.left, node.val);
        buildGraph(node.right, node.val);
    }

    buildGraph(root, null);

    // 2. BFS starting from the start node
    const queue = [start];
    const visited = new Set([start]);
    let minutes = 0;

    while (queue.length > 0) {
        const size = queue.length;
        let infectedNext = false;

        for (let i = 0; i < size; i++) {
            const current = queue.shift();

            for (const neighbor of graph.get(current) || []) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    infectedNext = true;
                }
            }
        }

        if (infectedNext) {
            minutes++;
        }
    }

    return minutes;
};