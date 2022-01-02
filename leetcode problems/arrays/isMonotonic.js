/**
 *  isMonotonic
 *   https://leetcode.com/problems/monotonic-array/
 * 
 *   Edge cases
 *   As given array is in sorted order we can decide whethere it's increasing or decreasing or equal to
 * 
 *   A[0] === A[A.length-1] then equal
 *   A[0] > A[A.length-1] then less than
 *   A[0] < A[A.length-1] then greater than
 */

function isMonotonic(arr) {
    let arrayType=''
    if(arr[0] === arr[arr.length -1]){ arrayType = 'equal'}
    else if(arr[0] > arr[arr.length -1]){ arrayType = 'greaterThan'}
    else if(arr[0] < arr[arr.length -1]){ arrayType = 'lessThan'}

    for(let i=0; i<=arr.length-2; i++) {
        if(arrayType === 'equal') {
            if(arr[i] === arr[i+1]){
                continue;
            }  else {
                return false;
            }
        }
        else if(arrayType === 'lessThan') {
            if(arr[i] <= arr[i+1]){
                continue;
            }  else {
                return false;
            }
        }
        else if(arrayType === 'greaterThan') {
            if(arr[i] >= arr[i+1]){
                continue;
            }  else {
                return false;
            }
        }
    }

    return true;
}

console.log(isMonotonic([3,1,1]))