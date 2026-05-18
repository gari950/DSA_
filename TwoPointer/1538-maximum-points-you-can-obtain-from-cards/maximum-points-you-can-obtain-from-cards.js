/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (arr, k) {
    let n = arr.length, l = 0, r = n - 1, cnt = 0, maxi = -1, lsum = 0, rsum = 0;
    // for (let i = 0; i < n; i++) {
    //     sum += arr[r];
    //     cnt =  (r - l + 1);
    //     while(cnt > k){
    //         sum = sum - arr[l];
    //         cnt--;
    //         l=l+1;
    //         cnt=(r-l+1);
    //     }
    //     if (cnt <= k) {
    //         maxi = Math.max(maxi, sum);
    //         console.log(maxi)
    //         r++;
    //     }
    // }
    for (let i = 0; i <= k - 1; i++) {
        lsum += arr[i];
    }
        maxi = lsum;
    for (let i = k - 1; i >= 0; i--) {
        lsum -= arr[i];
        rsum += arr[r];
        r--;
        maxi = Math.max(maxi, lsum + rsum);
        console.log(maxi)
    }
    return maxi;

};