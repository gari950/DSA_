/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    return helper(nums, k) - helper(nums, k - 1);
};

const helper = (nums, k) => {
    let l = 0, r = 0, n = nums.length, mp = new Map();
    let len = 0;
    while (r < n) {
        mp.set(nums[r], (mp.get(nums[r]) || 0) + 1);
        while (mp.size > k) {
            mp.set(nums[l], mp.get(nums[l]) - 1);
            if (mp.get(nums[l]) === 0) mp.delete(nums[l]);
            l++;
        }
        if (mp.size <= k) len += (r - l + 1);
        r++;
    }
    return len;
}