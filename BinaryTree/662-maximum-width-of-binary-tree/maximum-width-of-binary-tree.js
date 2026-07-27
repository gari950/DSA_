class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    let maxWidth = 0;
    const queue = [[root, 0]];

    while (queue.length > 0) {
        const size = queue.length;
        const levelStart = queue[0][1];
        let first = 0, last = 0;

        for (let i = 0; i < size; i++) {
            const [node, index] = queue.shift();
            const normalizedIndex = index - levelStart;
            if (i === 0) first = normalizedIndex;
            if (i === size - 1) last = normalizedIndex;

            if (node.left) queue.push([node.left, 2 * normalizedIndex]);
            if (node.right) queue.push([node.right, 2 * normalizedIndex + 1]);
        }

        maxWidth = Math.max(maxWidth, last - first + 1);
    }

    return maxWidth;
};