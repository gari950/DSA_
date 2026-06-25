/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var cnt = function(arr, pages) {
    let st = 1, p = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + p <= pages) {
            p += arr[i];
        } else {
            st++;
            p = arr[i];
        }
    }
    return st;
}
var splitArray = function (arr, k) {
    let n = arr.length;
    if (k > n) return - 1;
    let l = Math.max(...arr), r = arr.reduce((acc, cur) => acc + cur, 0);
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let s = cnt(arr, mid);
        if (s > k)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return l;
};