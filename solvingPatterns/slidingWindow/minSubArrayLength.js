/**
 *  This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 * 
 */

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      console.log(total)
      total += nums[end];
      console.log(total)
      end++;
      console.log(end)
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      // console.log(start)
      console.log(end)
      // console.log(total)
      minLen = Math.min(minLen, end-start);
      // console.log(minLen)
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))

/** startPoint
 *  EndPoint  
 * 
 *   S
 *   2, 3, 1, 2, 4, 3
 *            E
 *            8  minLength=4 
 *            8 - 2 = 6  start = 1 end 4
 *      S
 *   2, 3, 1, 2, 4, 3
 *               E
 *           10 minLength=4
 *           10 - 3 = 7 start = 2  end 5
 *         S
 *   2, 3, 1, 2, 4, 3
 *               E
 *           7 minLength=3
 *           7 - 1 = 6 start = 3  end 5
 *            S
 *   2, 3, 1, 2, 4, 3
 *                  E
 *           9 minLength=3
 *           9 - 2 = 7 start 4 end 6
 *            S
 *   2, 3, 1, 2, 4, 3
 *                  E
 *           7 minLength=2
 *           7 - 4 = 3 start 5 end 6
 * 
 *          
 *           
 *           
 */