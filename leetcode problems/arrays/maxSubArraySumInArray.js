/**
 *  Max subarray sum in given array
 * 
 *  [-2,-3,4,-1,-2,1,5,-3] 
 * 
 *  1. approach one brute force get all sub arrays and calculate sum o(n2)
 * 
 *  2. https://www.youtube.com/watch?v=YxuK6A3SvTs&t=345s
 *   kadanes algorith
 * 
 *   loop through array
 * 
 *   let maxEndingHere = 0;
 *   let maxSoFar = arr[0];
 * 
 *   for(let i of arr) {
 *      maxEndingHere = i + maxEndingHere;
 * 
 *      if(maxEndingHere < i) {
 *          maxEndingHere = i
 *      } 
 *      if(maxSoFar < maxEndingHere) {
 *          maxSoFar = maxEndingHere
 *      }
 *   }
 * 
 *   [-2,-3,4,-1,-2,1,5,-3] 
 *   maxEndingHere=0
 *   maxSoFar=-2
 *   
 *   1st loop // maxEndingHere= -2 maxSoFar=-2
 *   2nd loop // maxEndingHere= -5 maxSoFar=-2
 *   3rd loop // maxEndingHere= 4 maxSoFar=4
 *   4th loop // maxEndingHere= 3 maxSoFar=4
 *   5th loop // maxEndingHere= 1 maxSoFar=4
 *   6th loop // maxEndingHere= 2 maxSoFar=4
 *   7th loop // maxEndingHere= 7 maxSoFar=7
 *   8th loop // maxEndingHere= 4 maxSoFar=7
 * 
 *   //o/p 7
 *   
 *   
 */



