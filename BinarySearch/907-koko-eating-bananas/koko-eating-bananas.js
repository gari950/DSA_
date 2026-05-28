/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

const canEat = (k, arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.ceil(arr[i] / k);
    }
    return sum;
}
var minEatingSpeed = function (piles, h) {
    let l = 1, r = 0, n = piles.length;
    let mini = Number.MAX_VALUE;
    piles.sort((a, b) => a - b);
    // console.log(piles)
    r = piles[n - 1];
    // console.log(r)
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        // console.log(`${canEat(mid, piles)} :: ${mid} :: ${r} :: ${l} `)
        if (canEat(mid, piles) <= h) {
            mini =mid;
            r = mid - 1;
        }
        else{
            l = mid + 1;

        }
    }
    return mini;
};

// 4 11 20 23 30