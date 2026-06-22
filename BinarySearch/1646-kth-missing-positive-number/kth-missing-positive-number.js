/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    //   for(let i=0;i<arr.length;i++){
    //     if(arr[i]<=k)k++;
    //     else break;
    //   }
    //   return k;


    // console.log(missing)
    let l = 0, r = arr.length - 1;

    // console.log(r)
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let missing = arr[mid] - (mid + 1);
        if (missing < k) l = mid + 1;
        else r = mid - 1;
    }
    // console.log(r, missing[r - 1])
    return r+1+k;
};