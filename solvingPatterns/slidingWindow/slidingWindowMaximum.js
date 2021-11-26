/**
 *  // best approach as per time complexity is refer https://www.youtube.com/watch?v=LiSdD3ljCIE&list=PLEJXowNB4kPyP2PdMhOUlTY6GrRIITx28&index=13
 *  sliding window maximum  with kth size
 * 
 * Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

    Given an array nums, a sliding window of size k moves from the leftmost side of the array to the rightmost side of the array. You can only see the numbers in the sliding window K. The sliding window moves one bit to the right at a time.
 */

 function slidingWindowMax(arr, k) {
  if(arr.length < k || k === 0) {
    return [];
  } 
  let finalArr = []
   
   let window = []

   //first window
   for(let i=0; i < k; i++) {
    window.push(arr[i])
   }
   finalArr.push(Math.max(...window))

   // remaining windows from k
   for(let i=k; i < arr.length; i++) {
     window = [...window.slice(1), arr[i]]
     console.log(window)
     finalArr.push(Math.max(...window))
   }
   return finalArr;
 }

 console.log(slidingWindowMax([1,3,-1,-3,5,3,6,7], 3))
 /**
  *  [1,3,-1,-3,5,3,6,7]
  */


  var ar = [1,2,3]

  var t = [...ar.slice(1), 4]

  t

