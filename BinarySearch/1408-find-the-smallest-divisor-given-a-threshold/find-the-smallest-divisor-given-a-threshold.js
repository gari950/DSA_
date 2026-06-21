/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

let isSmall = (arr, k) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.ceil(arr[i] / k);
    }

    // console.log(`${k} :: ${sum} `)
    return sum;
}
var smallestDivisor = function (nums, threshold) {
    // nums.sort((a, b) => a - b);
    let l = 1, n = nums.length, r = Math.max(...nums), ans = 0;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (isSmall(nums, mid) <= threshold) {

            r = mid - 1;
        } else
            l = mid + 1;
    }
    return l;
};

//1 11 22 33 44