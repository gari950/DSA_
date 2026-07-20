/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (str) {
    const isAlphanumeric = str => str.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const s = isAlphanumeric(str);
    let l = 0, r = s.length-1;
    
    if (s === " ")return true;
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
    return true;
};