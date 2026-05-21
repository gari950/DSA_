/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0, r = nums.length - 1, ans = Number.MAX_VALUE;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[l] <= nums[mid]) {
            ans = Math.min(ans, nums[l]);
            l = mid + 1;
        } else {
            r = mid - 1;
            ans = Math.min(ans, nums[mid]);
        }
       
    }
    return ans;
};