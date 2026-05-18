/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, k) {
    return handlesum(nums, k) - handlesum(nums, k - 1);
}
handlesum = (nums, k) => {
    let r = 0, l = 0, n = nums.length;
    let mp = new Map(), cnt = 0, maxi = -1;
    while (r < n) {
        // mp.set(nums[r], (mp.get(nums[r] || 0) + 1);
        // let cnt = mp.get(nums[r]);
        cnt += nums[r];
        while (cnt > k && l<=r) {
            cnt -= nums[l];
            l++;
        }

        maxi += (r - l + 1);
        r++;
    }
    return maxi;
};