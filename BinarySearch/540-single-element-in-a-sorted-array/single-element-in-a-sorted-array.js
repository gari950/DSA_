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

/* TC -- O(N) SC -- O(1)
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
}*/

// JavaScript
function singleNonDuplicate(nums) {
        const n = nums.length;
        if (n === 1) return nums[0];
        if (nums[0] !== nums[1]) return nums[0];
        if (nums[n-1] !== nums[n-2]) return nums[n-1];

        let low = 1, high = n - 2;
        while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) return nums[mid];

                const goRight = (mid % 2 === 0 && nums[mid] === nums[mid+1]) ||
                                                (mid % 2 === 1 && nums[mid] === nums[mid-1]);
                if (goRight) low = mid + 1;
                else high = mid - 1;
        }
        return -1;
}