/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let l = 0, n = nums.length, cnt = 0;
    while (l < n) {
        if (nums[l] > nums[(l + 1) % n]) cnt++;
        l++;
    }
    return cnt <= 1;
};