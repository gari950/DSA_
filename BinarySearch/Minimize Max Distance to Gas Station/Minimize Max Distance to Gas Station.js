/*
We have a horizontal number line. On that number line, we have gas stations at positions stations[0], stations[1], ..., stations[n-1]. Now, we add k more gas stations so that d, the maximum distance between adjacent gas stations, is minimized. We have to find the smallest possible value of d. Find the answer exactly to 6 decimal places.
Note: stations is in a strictly increasing order.

Examples:

Input: stations[] = [1, 2, 3, 4, 5], k = 2
Output: 1.00
Explanation: Since all gaps are already equal (1 unit each), adding extra stations in between does not reduce the maximum distance.
Input: stations[] = [3, 6, 12, 19, 33], k = 3
Output: 6.00 
Explanation: The largest gap is 14 (between 19 and 33). Adding 2 stations there splits it into approx 4.67. The next largest gap is 7 (between 12 and 19). Adding 1 station splits it into 3.5. Now the maximum gap left is 6.
Constraint:
1 ≤ stations.size() ≤ 105
0 ≤ stations[i] ≤ 106
0 ≤ k ≤ 105
*/

class Solution {
    // Helper function to check if a max distance of 'mid' is possible with K stations
    isValid(arr, mid, k) {
        let count = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            let distance = arr[i + 1] - arr[i];
            // Calculate how many new stations are needed in this specific gap
            count += Math.floor(distance / mid);
            // If the distance is exactly divisible, we don't place a station on the boundary
            if (distance % mid === 0) {
                count--;
            }
        }
        return count <= k;
    }

    minMaxDist(arr, k) {
        let n = arr.length;
        if (n <= 1) return 0.00;

        let low = 0;
        let high = 0;

        // The maximum possible gap initially is our upper bound
        for (let i = 0; i < n - 1; i++) {
            high = Math.max(high, arr[i + 1] - arr[i]);
        }

        // Run binary search for floating points up to 10^-6 precision
        // 80 iterations are more than enough to achieve absolute precision
        for (let iter = 0; iter < 80; iter++) {
            let mid = low + (high - low) / 2;

            if (this.isValid(arr, mid, k)) {
                high = mid; // Try to look for a smaller maximum distance
            } else {
                low = mid;  // 'mid' is too small, we need a larger allowed distance
            }
        }

        // Format exactly to 6 decimal places as requested
        return Number(high.toFixed(6));
    }
}
