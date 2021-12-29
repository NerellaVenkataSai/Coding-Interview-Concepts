/**
 *   https://leetcode.com/problems/find-peak-element/
 * 
 *   find peak element in array that is strictly greater than it's neighbours
 * 
 *   [1,2,3,1]
 */


function findPeakElement(arr) {
    let k = 3
    if(arr.length === 1) {
        return 0
    }

    if(arr[0] > arr[1]) {
        return 0
    }

    if (arr[arr.length -1] > arr[arr.length - 2]) {
        return arr[arr.length -1];
    }

    if(arr.length > 2) {
        let j=2

        for(let i=0; j < arr.length; i++) {
          if(arr[i+1] > arr[i] && arr[i+1] > arr[j]) {
              return i+1;
          }
          j++;
        }
        
    }
    
}

console.log(findPeakElement([1,2,1,3,5,6,4]))