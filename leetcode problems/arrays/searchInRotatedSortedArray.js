/**
 *  search in rotated sorted array
 *  https://www.youtube.com/watch?v=U8XENwh8Oy8&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=8
 *  https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 *  // binary search algo // O(log n)
 * 
 *  [4,5,6,7,0,1,2]
 *   L     M     R
 * 
 *  if(Target < Medium) {
 *      if(Target < L) {
 *         //right sorted
 *      }
 *      else {
 *          left sorted
 *     }
 *  }
 * 
 *  if(Target > Medium) {
 *      if(Target > R) {
 *         //left sorted
 *      }
 *      else {
 *          right sorted
 *      }
 *      
 *  }
 */

function binarySearchOnrotatedSortedArray(arr, target, left=0, right=arr.length-1, medium=Math.floor(arr.length/2)) {

    // let medium = Math.floor(arr.length/2);
    // let left = 0;
    // let right = arr.length-1
    console.log(left, right, medium)
    if(arr[medium] === target) {
        return medium
    }

    if(arr[left] === target) {
        return left
    }

    if(arr[right] === target) {
        return right
    }

    if(target > arr[medium]) {
        
        if(target > arr[right]) {
            // left side
            left = 0;
            right = medium -1;
            medium = Math.floor((left+right)/2)
            return binarySearchOnrotatedSortedArray(arr, target, left, right, medium)
        } else {
            left = medium+1
            medium = Math.floor((left+right)/2)
            console.log(left,right,medium)
            return binarySearchOnrotatedSortedArray(arr, target, left, right, medium)
        }


    }

    if(target < arr[medium]) {

        if(target < arr[left]) {
            // right side
            left = medium +1
            right = arr.length - 1
            medium = Math.floor((left+right)/2)

            return binarySearchOnrotatedSortedArray(arr, target, left, right, medium)

        } else {
            right = medium-1
            medium = Math.floor((left+right)/2)
            console.log(left,right,medium)
            // if(right > target)
    
            return binarySearchOnrotatedSortedArray(arr, target, left, right, medium)
        }
    }
      
}

/**
 * I/ps
 * [6,7,8,0,1,2,3,4,5]
 * 
 * [2,3,4,5,6,7,8,0,1]
 * 
 * [4,5,6,7,0,1,2]
 */

console.log(binarySearchOnrotatedSortedArray([2,3,4,5,6,7,8,0,1], 0))