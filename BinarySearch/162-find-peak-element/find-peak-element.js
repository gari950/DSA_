/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 1, n = nums.length, r = n - 2;
    if (n == 1) return n - 1;
    if (n == 2) return nums[0] > nums[1] ? 0 : 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
        if (nums[mid] > nums[mid - 1]) {
            if (nums[mid] < nums[mid + 1]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        if (nums[mid - 1] > nums[mid]) {
            if (nums[mid] > nums[mid + 1]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    if (r == 0 && nums[r] > nums[l]) return 0;
    if (l == n - 1 && nums[l] > nums[r]) return n - 1;
    return l;
};