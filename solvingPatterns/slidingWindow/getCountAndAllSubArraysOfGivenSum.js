/**
 *  return all subArrays on sum k
 * 
 *  This solution will solve different problems
 *  1. count no. of subArrays to given sum
 *  2. max contiguous subArray return of given sum
 *  3. min contiguous subArray return of given sum
 *  4. Return All subArrays of given sum
 *  5. Return First SubArray of given sum
 * 
 */

 function getAllSubArraysOfGivenSum(arr, sum) {
  let count = 0;
  let preFixSumOfVisitedIndex = {};
  let subArrays = []
  let currentIndexSum = 0;
  for(let i = 0; i < arr.length; i++) {
    currentIndexSum = currentIndexSum + arr[i];
    preFixSumOfVisitedIndex[currentIndexSum] =  preFixSumOfVisitedIndex[currentIndexSum] ? preFixSumOfVisitedIndex[currentIndexSum] : i
    
    if(currentIndexSum === sum) {
      count++;
      subArrays.push(arr.slice(0, i + 1))
    } else if(preFixSumOfVisitedIndex.hasOwnProperty(currentIndexSum - sum)){
      const startingIndex = preFixSumOfVisitedIndex[currentIndexSum - sum] + 1
      console.log(preFixSumOfVisitedIndex)
      console.log(startingIndex)  
      console.log(i)
      subArrays.push(arr.slice(startingIndex, i + 1))
      count++;
    }
  
   }
   return {count, subArrays}
}


/**  reference link 
 *   https://www.youtube.com/watch?v=HbbYPQc-Oo4
 * 
 *     [3, 4, 7, 2, -3, 1, 4, 2]  // sum 7
 *      i
 *   // This approach is to return only count no of sub arrays
 *   // To return all subArrays use index as value in preFixSumOfVisitedIndex.
 *   
 *   *** Formula ****
 *   // currentSumValue === sum || preFixSumOfVisitedIndex[currentSumValue - sum] --> count++
 *   preFixSumOfVisitedIndex = {
 *     3: 1,
 *     7: 1,  // 7 === sum --> count = 1
 *    14: 2,  // preFixSumOfVisitedIndex[14-sum] //true --> count = 2 --> count = 3 
 *    16: 1,
 *    13: 1,
 *    18: 1,
 *    20: 1,  // preFixSumOfVisitedIndex[20-sum] //true --> count = 4 
 *                      
 *   }
 */

 /**  Test inputs
  *   [3, 4, 7, 2, 3, 2, 1, 4, 2] 
  * */

 console.log(getAllSubArraysOfGivenSum([3, 4, 7, 2, -3, 1, 4, 2], 7))

/**
*   // formula if currentIndexSum === sum then arr.slice(0, index + 1)
*              if obj.has(currentIndexSum - sum )  then arr.slice(visitedIndex[currentIndexSum - sum]+1, index +1)
*   count 
*   {
*     3: 0
*     7: 1   arr=[[3,4]]
*     14: 2  arr=[[3,4],[7]]
*     16: 3
*     13: 4
*     14     arr=[[3,4],[7],[7,2,-3,1]]
*     18: 6
*     20: 7  arr=[[3,4],[7],[7,2,-3,1],[1,4,2]]
*     
*    
*     
*      
*   }
*  
*  */ 

// console.log([3, 4, 7, 2, -3, 1, 4, 2].slice(5,8))