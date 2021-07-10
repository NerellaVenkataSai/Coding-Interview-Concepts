/**
 * sliding window
 * MaxSubarraySum with kth size
 */

 function maxSubArraySum(arr, k) {
  
  if(arr.length < k) {
    return undefined;
  }
  let maxSum=0;
  let tempSum=0;

  // first calculate for first subArray and store it as maxSum 
  for(let i=0; i<k; i++) {
    maxSum += arr[i]
  }
   console.log(maxSum)
   tempSum = maxSum 
  for(let i = k; i < arr.length; i++) {
    console.log(arr[i])
    tempSum = tempSum - arr[i-k] + arr[i];
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum 
 }


console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3 ))





/**
 *  [2, 6, 9, 2, 1, 8, 6, 3]   kth = 3
 * 
 *   
 * 
 * 
 * 
 */