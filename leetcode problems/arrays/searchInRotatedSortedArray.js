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


// Search an element in sorted and rotated
// array using single pass of Binary Search

// Returns index of key in arr[l..h] if
// key is present, otherwise returns -1
function search(arr, l, h, key){
	if (l > h)
		return -1;

	let mid = Math.floor((l + h) / 2);
	if (arr[mid] == key)
		return mid;

	/* If arr[l...mid] is sorted */
	if (arr[l] <= arr[mid]) {
		/* As this subarray is sorted, we can quickly
		check if key lies in half or other half */
		if (key >= arr[l] && key <= arr[mid])
			return search(arr, l, mid - 1, key);
		/*If key not lies in first half subarray,
		Divide other half into two subarrays,
		such that we can quickly check if key lies
		in other half */
		return search(arr, mid + 1, h, key);
	}

	/* If arr[l..mid] first subarray is not sorted,
	then arr[mid... h]
	must be sorted subarray */
	if (key >= arr[mid] && key <= arr[h])
		return search(arr, mid + 1, h, key);

	return search(arr, l, mid - 1, key);
}

// Driver program
let arr = [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ];
let n = arr.length;
let key = 6;
let i = search(arr, 0, n - 1, key);