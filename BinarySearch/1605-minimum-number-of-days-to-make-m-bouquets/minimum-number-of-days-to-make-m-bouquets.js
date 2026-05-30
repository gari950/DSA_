/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

var cntbouquets = (arr, day, m, k) => {
    let cnt = 0, b = 0, n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] <= day) cnt++;
        else {
            b += Math.floor(cnt / k);
            cnt = 0;
        }
    }
    b += Math.floor(cnt / k);
    // console.log(b, cnt/k , b>=m)
    if (b >= m) return true;
    else false;
}

var minDays = function (bloomDay, m, k) {
    let total = m * k, n = bloomDay.length;
    if (total > n) return -1;
    let maxi = Math.max(...bloomDay), cnt = 0, mini = Math.min(...bloomDay);
    let l = mini, r = maxi, ans = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        // console.log(mid)
        if (cntbouquets(bloomDay, mid, m, k) === true) {
            ans = mid;
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return  ans;
};