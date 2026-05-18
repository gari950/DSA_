/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let r = 0, l = 0, n = s.length, m = t.length, cnt = 0;
    let mp = new Map();
    let maxlen = Number.MAX_VALUE, stidx = -1;
    if (n < m) return "";
    for (let i = 0; i < m; i++) mp.set(t[i], (mp.get(t[i]) || 0) + 1);
    while (r < n) {
        if (mp.get(s[r]) > 0) cnt++;

        mp.set(s[r], (mp.get(s[r]) || 0) - 1);

        while (cnt === m) {
            if ((r - l + 1) < maxlen) {
                maxlen = (r - l + 1);
                stidx = l;
            }
            mp.set(s[l], mp.get(s[l]) + 1);
            if (mp.get(s[l]) > 0) cnt--;
            l++;
        }
        r++;
    }
    return stidx === -1 ? "" : s.substring(stidx, stidx + maxlen);
};