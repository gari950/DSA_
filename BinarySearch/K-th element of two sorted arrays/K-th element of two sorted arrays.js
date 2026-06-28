/*
Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

Examples :

Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
Output: 6
Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.
Input: a[] = [1, 4, 8, 10, 12], b[] = [5, 7, 11, 15, 17], k = 6
Output: 10
Explanation: Combined sorted array is [1, 4, 5, 7, 8, 10, 11, 12, 15, 17]. The 6th element of this array is 10.
Constraints:
1 ≤ a.size(), b.size() ≤ 106
1 ≤ k ≤ a.size() + b.size()
0 ≤ a[i], b[i] ≤ 108
*/

/**
* @param {number[]} a
* @param {number[]} b
* @param {number} k
* @return s {number}
*/

class Solution {
	kthElement(nums1, nums2, k) {
		// code here
		let n1 = nums1.length, n2 = nums2.length;
		if (n1>n2)return this.kthElement(nums2, nums1, k);
		let l = Math.max(0,k-n2), h = Math.min(k,n1), n = n1 + n2, left = k;
		while (l <= h) {
			let mid1 = Math.floor((l + h)/2);
			let mid2 = left - mid1;
			let l1 = -Infinity, l2 = -Infinity;
			let r1 = Infinity, r2 = Infinity;
			if (mid1<n1)r1 = nums1[mid1];
			if (mid2<n2)r2 = nums2[mid2];
			if (mid1 - 1 >= 0)
				l1 = nums1[mid1 - 1];
			if (mid2 - 1 >= 0)
				l2 = nums2[mid2 - 1];
			if (l1 <= r2 && l2 <= r1) {
				return Math.max(l1, l2);
			} else if (l1 > r2) h  = mid1 - 1;
			else l = mid1 + 1;
			}
		return 0;
	}
}
