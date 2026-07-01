/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const helper = (nums, k) => {
    let l = 0, r = 0, n = nums.length, mp = new Map(),maxi=0,sum=0;
    let len = 0;
    while (r < n) {
        mp.set(nums[r], (mp.get(nums[r]) || 0) + 1);
        sum+=nums[r];
        if ((r - l + 1) === k) {
             if (mp.size === k) {
            maxi = Math.max(maxi, sum);
        }
            mp.set(nums[l], mp.get(nums[l]) - 1);
            if (mp.get(nums[l]) === 0) mp.delete(nums[l]);
            sum-=nums[l];
            l++;
        }
       
        r++;
    }
    return maxi;
}
var maximumSubarraySum = function (nums, k) {
    return helper(nums, k) ;
};