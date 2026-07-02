/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function (nums, k, x) {
    const ans = [];
    const n = nums.length;
    
    // Since numbers range from -50 to 50, we only care about tracking negatives (-50 to -1).
    // freq[i] will store the count of the number (-i). 
    // Example: freq[50] stores the count of -50.
    const freq = new Array(51).fill(0);
    
    let l = 0;
    for (let r = 0; r < n; r++) {
        // 1. Add the incoming element to the frequency array if it's negative
        if (nums[r] < 0) {
            freq[Math.abs(nums[r])]++;
        }
        
        // 2. If the window size reaches k, process the window
        if (r - l + 1 === k) {
            let count = 0;
            let targetValue = 0;
            
            // Iterate from smallest negative (-50) to largest (-1)
            for (let i = 50; i >= 1; i--) {
                count += freq[i];
                if (count >= x) {
                    targetValue = -i;
                    break;
                }
            }
            
            ans.push(targetValue);
            
            // 3. Slide the window: remove the outgoing element at 'l'
            if (nums[l] < 0) {
                freq[Math.abs(nums[l])]--;
            }
            l++;
        }
    }
    
    return ans;
};