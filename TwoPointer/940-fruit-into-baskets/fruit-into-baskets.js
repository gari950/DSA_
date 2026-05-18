/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let n = fruits.length;
    let low = 0;    
    let high = 0;     
    let maxLen = 0;  // stores max window size
    let map = new Map(); // stores fruit counts

    while (high < n) {
        // add current fruit to map
        map.set(fruits[high], (map.get(fruits[high]) || 0) + 1);

        // shrink window if more than 2 fruit types
        while (map.size > 2) {
            map.set(fruits[low], map.get(fruits[low]) - 1);
            if (map.get(fruits[low]) === 0) {
                map.delete(fruits[low]);
            }
            low++;
        }

        // update max length of valid window
        maxLen = Math.max(maxLen, high - low + 1);
        high++;
    }

    return maxLen;
};