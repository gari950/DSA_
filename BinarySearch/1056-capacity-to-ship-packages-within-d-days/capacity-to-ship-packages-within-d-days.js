/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var findDays = (wt, cap) => {
    let d = 1, load = 0;
    for (let i = 0; i < wt.length; i++) {
        if (wt[i] + load > cap) {
            d++;
            load = wt[i];
        } else {
            load += wt[i];
        }
    }
    return d;
}
var shipWithinDays = function (arr, days) {
    let l = Math.max(...arr), r = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let ans = 0;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        ans = findDays(arr, mid);
        if (ans <= days) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
};