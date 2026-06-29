/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let maxOnes = -1;
    let maxRowIdx = 0;

    // Helper function to find the first occurrence of 1 using binary search
    const findFirstOne = (row) => {
        let l = 0;
        let r = row.length - 1;
        let firstOneIdx = row.length; // Default if no 1 is found

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);

            if (row[mid] === 1) {
                firstOneIdx = mid; // Potential candidate found
                r = mid - 1;       // Keep searching left for the *first* 1
            } else {
                l = mid + 1;       // Search right
            }
        }
        return firstOneIdx;
    };

    for (let i = 0; i < mat.length; i++) {
        // 1. Sort the row so binary search becomes valid
        let sortedRow = [...mat[i]].sort((a, b) => a - b);

        // 2. Find the first '1' index using binary search
        let firstOneIdx = findFirstOne(sortedRow);

        // 3. Number of 1s is total elements minus the first 1's index
        let currentOnes = sortedRow.length - firstOneIdx;

        // 4. Update max track (strict '>' preserves the smallest row index on ties)
        if (currentOnes > maxOnes) {
            maxOnes = currentOnes;
            maxRowIdx = i;
        }
    }

    return [maxRowIdx, maxOnes];
};