var lowestCommonAncestor = function(root, p, q) {
    let pathP = [];
    let pathQ = [];

    // Helper function to find path from current node to target
    function findPath(curr, target, path) {
        if (!curr) return false;

        // 1. Choose: Add current node to path
        path.push(curr);

        // 2. Base case: Target found!
        if (curr === target) {
            return true;
        }

        // 3. Recurse: Try searching left and right subtrees
        if (findPath(curr.left, target, path) || findPath(curr.right, target, path)) {
            return true; // Target found in one of the subtrees, keep the path!
        }

        // 4. Backtrack: Target wasn't in this branch, remove current node
        path.pop();
        return false;
    }

    // Populate paths
    findPath(root, p, pathP);
    findPath(root, q, pathQ);

    // Now compare pathP and pathQ to find the Lowest Common Ancestor
    let lca = null;
    let minLength = Math.min(pathP.length, pathQ.length);

    for (let i = 0; i < minLength; i++) {
        if (pathP[i] === pathQ[i]) {
            lca = pathP[i]; // Update while the paths match
        } else {
            break; // First mismatch found, stop!
        }
    }

    return lca;
};

var lowestCommonAncestor = function(root, p, q) {
    // Base case: null node or found p/q
    if (!root || root === p || root === q) {
        return root;
    }

    // Search left and right subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // If both sides returned a node, the current node is the LCA
    if (left && right) {
        return root;
    }

    // Otherwise, pass up whichever side returned a node
    return left ? left : right;
};