/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let cnt = 0, maxi = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(")
        maxi = Math.max(maxi, ++cnt);
        if (s[i] === ")") {
            cnt--;
        }
    }
    return maxi;
};