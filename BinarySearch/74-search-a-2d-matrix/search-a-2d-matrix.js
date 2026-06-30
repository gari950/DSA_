/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var find = (arr, t) => {
    let ans = -1;
    let l=0, r = arr.length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid] === t) return true;
        else if(arr[mid] >= t){
            ans=mid;
            r=mid-1;
        }else{
            l = mid+1;
        }
    }
    return false;
}
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    for(let i=0;i< n;i++){
        if(find(matrix[i],target)){
            return true;
        }
    }
    return false;
};