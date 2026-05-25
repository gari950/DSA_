/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function (nums) {
    let mp = new Map();
    const getKey = (val) => {
        return [...mp].find(([key, value]) => val === value)[0];
    }
    for (let i = 0; i < nums.length; i++) {
        mp.set(nums[i], (mp.get(nums[i]) || 0) + 1);
    }
    return getKey(Math.min(...mp.values()));
};