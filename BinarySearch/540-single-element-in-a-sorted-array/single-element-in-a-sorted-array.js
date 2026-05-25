/**
 * @param {number[]} nums
 * @return {number}
 */


/*            TC -- O(N^2) SC -- O(N)

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
*/

var singleNonDuplicate = function (nums) {
    let cnt = 0;
    if (nums.length < 2) return nums[0];
    for (let i = 0; i <= nums.length - 1; i += 2) {
        // console.log(`${nums[i]}:${nums[(i + 1) % nums.length]}`)
        if ((i + 1) < nums.length) {
            if (nums[i] != nums[(i + 1) % nums.length]) {
                cnt = nums[i];
                break;
            }
        } else {
            cnt = nums[i];
            break;
        }
    }
    return cnt;
}