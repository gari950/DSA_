/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
     let map = new Map();
    let left = 0;
    let maxLen = 0; // Initialize with 0

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            // Move left to one position after the previous occurrence
            left = Math.max(left, map.get(s[right]) + 1);
        }
        map.set(s[right], right); // Update last seen index
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};