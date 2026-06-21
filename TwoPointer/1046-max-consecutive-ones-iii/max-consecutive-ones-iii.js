/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let r = 0, l = 0, n = nums.length, cnt = 0, maxlen = 0;
    while (r < n) {
        if (nums[r] === 0) cnt++;
        if (cnt <= k) {
            maxlen = Math.max(maxlen, r - l + 1);
        }
        // while (cnt > k) {
        //     if (nums[l] != 0) l++;
        //     if (nums[l] === 0 && r - l + 1 > k) {
        //         l++;
        //         cnt--;
        //     }
        // }
        while (cnt > k) {
        // If the element leaving the window is a 0, reduce our zero count
        if (nums[l] === 0) {
            cnt--;
        }
    // Always shrink the window from the left
    l++;
}
        r++;
    }
    return maxlen;
};
