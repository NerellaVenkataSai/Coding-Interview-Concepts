/**
 *    https://leetcode.com/problems/squares-of-a-sorted-array/
 * 
 *   Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * 
 *   To get solution in TC: O(n) we use two pointer approach
 * 
 *   result = [0,0,0,0,0]
 *   [4,1,0,3,10]   L > R L++  ;  R > L R--
 *    L        R    rIndex = arr.length-1 = 4  
 *   [4,1,0,3,10] -4 < 10 --> R-- ; result = [0,0,0,0,10] ; rIndex--
 *    L       R
 *   [4,1,0,3,10] 4 > 3 --> L++ ; result = [0,0,0,4,10] ; rIndex--
 *      L   R
 *   [4,1,0,3,10] 1 < 3 --> R-- ; result = [0,0,3,4,10] ; rIndex--
 *      L R
 *   [4,1,0,3,10] 1 > 0 --> L++ ; result = [0,1,3,4,10] ; rIndex--
 *       L,R
 * 
 *   break;
 */

function squaresOnSortedArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let rIndex = arr.length - 1;
  let result = Array(rIndex).fill(0);
  let tempResult = arr.map(i => Math.pow(i,2));
  while(left <= right) {
    console.log(arr[left], arr[right])  
    if(tempResult[left] > tempResult[right]) {
        result[rIndex] = tempResult[left];
        left++;
        rIndex--
    }
    if(tempResult[right] > tempResult[left]) {
        result[rIndex] = tempResult[right];
        right--;
        rIndex--
    }
    if(tempResult[left] === tempResult[right]) {
        result[rIndex] = tempResult[left];
        left++;
        rIndex--
    }
    if(left === right) { 
        result[rIndex] = tempResult[left]; 
        break;  
    }
  }
  console.log(result)
  return result;
}

console.log(squaresOnSortedArray([-7,-3,2,3,11]))

console.log(Array(4).fill(0))