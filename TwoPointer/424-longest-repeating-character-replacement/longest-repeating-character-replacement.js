/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let l = 0, r = 0, n = s.length, maxi = 0;
    let mp = new Map();
    let maxcnt = 0;
    while (r < n) {
        mp.set(s[r], (mp.get(s[r]) || 0) + 1);
        maxcnt = Math.max(...mp.values());
        if ((r - l + 1) - maxcnt <= k)
            maxi = Math.max(maxi, r - l + 1);

        while ((r - l + 1) - maxcnt > k) {
            mp.set(s[l], mp.get(s[l]) - 1);
            maxcnt = Math.max(...mp.values());
            l++;
        }

        r++;
    }
    return maxi;
};